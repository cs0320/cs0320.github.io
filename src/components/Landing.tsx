import '../App.css';
// import SceneViewer from './SceneViewer';
import Calendar from './Calendar';
import CourseInfo from './CourseInfo';
import Lectures from './Lectures';
import Projects from './Projects';
import Staff from './Staff';



function Landing() {
  return (
    // style={{backgroundColor: '#0c0036'}}
    // 1D1058
    // style={{backgroundColor: '#1D1058'}}
    <section className="px-2  py-32 md:px-0 font-mono bg-gray-50 " >


      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3 px-8">
          <div className="w-full md:w-1/2 md:px-3 lg:px-8">

            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-violet-100 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block text-violet-500 typing-demo">cs0320.</span>
                <span className="block xl:inline text-indigo-800">
                  Introduction to Software Engineering</span>
              </h1>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto">
              <div className='imgBox'>
                <img src='https://i.ibb.co/Hnj8gdw/185-2x.png'></img>
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
