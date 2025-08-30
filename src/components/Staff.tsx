import "../App.css";
// import SceneViewer from './SceneViewer';
import StaffData from "../data/staff.json";
import StaffCard from "./Helpers/StaffCard";
import { StaffMember } from "./Helpers/StaffMember";

function Staff() {
  const typedStaffData: StaffMember[] = StaffData;
  return (
    <section id="staff">
      <div className="max-w-5xl mx-auto px-6 pt-16">
        <img className="pb-16" src="/yarn-divider.png" alt=""></img>
        <h1 className="text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500">
          Course Staff
        </h1>
        <div className="text-sm md:text-base">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* <StaffCard /> */}
            {typedStaffData &&
              typedStaffData.map((person) => {
                return <StaffCard person={person} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Staff;
