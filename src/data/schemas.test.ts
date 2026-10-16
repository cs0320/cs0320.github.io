import { writeFileSync } from "node:fs";
import { z } from "zod";
import type { ZodType } from "zod";
import { expect, test } from "vitest";
import assignmentData from "./assignments.json";
import gearupData from "./gearups.json";
import lectureData from "./lectures.json";
import staffData from "./staff.json";
import {
  LectureSchema,
  AssignmentListSchema,
  GearupListSchema,
  LectureListSchema,
  StaffListSchema,
} from "./schemas";

function formatPath(path: PropertyKey[]): string {
  return path
    .map((key) => (typeof key === "number" ? `[${key}]` : `.${String(key)}`))
    .join("")
    .replace(/^\./, "");
}

function describeEntry(entry: unknown, index: number): string {
  if (entry === null || typeof entry !== "object") return `[${index}]`;
  const fields = entry as Record<string, unknown>;
  const name =
    typeof fields.id === "number"
      ? `id ${fields.id}`
      : typeof fields.name === "string"
        ? fields.name
        : typeof fields.title === "string"
          ? fields.title
          : `[${index}]`;
  return typeof fields.date === "string" ? `${name} (${fields.date})` : name;
}

function expectValid(filename: string, data: unknown, schema: ZodType): void {
  const result = schema.safeParse(data);
  if (result.success) return;

  const entries = Array.isArray(data) ? data : [];
  const problems = result.error.issues.map((issue) => {
    const [index, ...rest] = issue.path;
    const where =
      typeof index === "number"
        ? describeEntry(entries[index], index)
        : filename;
    const field = rest.length > 0 ? ` -> ${formatPath(rest)}` : "";
    return `${where}${field}: ${issue.message}`;
  });

  expect.fail(
    `${filename} has ${problems.length} problem(s):\n  ${problems.join("\n  ")}`,
  );
}

test("lectures.json matches its schema", () => {
  expectValid("lectures.json", lectureData, LectureListSchema);
});

test("assignments.json matches its schema", () => {
  expectValid("assignments.json", assignmentData, AssignmentListSchema);
});

test("gearups.json matches its schema", () => {
  expectValid("gearups.json", gearupData, GearupListSchema);
});

test("staff.json matches its schema", () => {
  expectValid("staff.json", staffData, StaffListSchema);
});

test("lectures.schema.json is generated from the zod schema", () => {
  writeFileSync(
    "src/data/lectures.schema.json",
    JSON.stringify(
      z.toJSONSchema(z.array(LectureSchema), { target: "draft-7" }),
      null,
      2,
    ) + "\n",
  );
});
