import { z } from "zod";

function uniqueById<T extends { id: number }>(
  describe: (entry: T) => string,
): z.core.CheckFn<T[]> {
  return (payload) => {
    const firstSeen = new Map<number, T>();
    payload.value.forEach((entry, index) => {
      const previous = firstSeen.get(entry.id);
      if (previous === undefined) {
        firstSeen.set(entry.id, entry);
        return;
      }
      payload.issues.push({
        code: "custom",
        input: entry.id,
        path: [index, "id"],
        message: `duplicate of "${describe(previous)}"`,
      });
    });
  };
}

const urlOrEmpty = z.union([z.literal(""), z.url()]);

export const ReadingSchema = z.object({
  title: z.string().min(1),
  url: urlOrEmpty,
});

export const LectureSchema = z.object({
  id: z.number().int().positive(),
  date: z
    .string()
    .regex(/^\d{2}\/\d{2} [MWF]$/, 'expected "MM/DD D", e.g. "10/16 F"'),
  topic: z.string().min(1),
  notes: urlOrEmpty,
  code: urlOrEmpty,
  recording: urlOrEmpty,
  readings: z.array(ReadingSchema),
});

export const LectureListSchema = z
  .array(LectureSchema)
  .check(uniqueById((l) => l.topic));

export const AssignmentSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  release: z
    .string()
    .regex(/^\d{1,2}\/\d{1,2}$/, 'expected "M/D", e.g. "10/5"'),
  due: z.string().min(1),
  demos: z.string().min(1),
  link: z.url().optional(),
});

export const AssignmentListSchema = z
  .array(AssignmentSchema)
  .check(uniqueById((a) => a.title));

export const GearupSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().min(1),
  date: z
    .string()
    .regex(
      /^\d{1,2}\/\d{1,2}-\d{1,2}\/\d{1,2}$/,
      'expected "M/D-M/D", e.g. "10/17-10/18"',
    ),
  slides: z.url().optional(),
  recording: z.url().optional(),
});

export const GearupListSchema = z.array(GearupSchema);

export const StaffSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  cslogin: z.string().min(1),
  pronouns: z.string().min(1),
  zodiac: z.string(),
  hometown: z.string(),
  bio: z.string().min(1),
  img: z.string().min(1),
});

export const StaffListSchema = z.array(StaffSchema);

export type Reading = z.infer<typeof ReadingSchema>;
export type Lecture = z.infer<typeof LectureSchema>;
export type Assignment = z.infer<typeof AssignmentSchema>;
export type Gearup = z.infer<typeof GearupSchema>;
export type StaffMember = z.infer<typeof StaffSchema>;
