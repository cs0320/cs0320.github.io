import "../App.css";
// import SceneViewer from './SceneViewer';
import Calendar from "./Calendar";
import CourseInfo from "./CourseInfo";
import Lectures from "./Lectures";
import Projects from "./Projects";
import Staff from "./Staff";

function Landing() {
  return (
    // style={{backgroundColor: '#0c0036'}}
    // 1D1058
    // style={{backgroundColor: '#1D1058'}}
    <section className="landing px-2  py-32 md:px-0 font-mono ">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3 px-8">
          <div className="w-full md:w-1/2 md:px-3 lg:px-8">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block typing-demo">cs0320.</span>
                <span className="software-title">
                  Introduction to Software Engineering
                </span>
              </h1>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto">
              <div className="text-xl-x">
                <em>
                  This site is being updated for Fall 2025. Information may not
                  be current.
                </em>
              </div>
              <div className="image-container-1">
                <img src="/hot-choco.png" alt="" className="scatter-image" />
                <img src="/fire.png" alt="" className="scatter-image" />
                <img src="/honey-jar.png" alt="" className="scatter-image" />
                <img src="/yarn.png" alt="" className="scatter-image" />
                <img src="/apple.png" alt="" className="scatter-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CourseInfo />
      <Projects />
      <Lectures />
      <Calendar />
      <Staff />
    </section>
  );
}

export default Landing;
