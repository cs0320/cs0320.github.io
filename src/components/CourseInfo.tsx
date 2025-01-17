import '../App.css';
// import SceneViewer from './SceneViewer';
import CourseData from '../data/course_info.json';
import DropDown from './Helpers/Dropdown';



function CourseInfo() {
  return (
    <div>
      <section id="course-info">
        <div className="max-w-5xl mx-auto px-6 pt-32 pb-16">
          <h1 className="text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500">Welcome to cs32!</h1><div className="text-sm md:text-base">
            <div className="body-text space-y-8"><p>CSCI 0320 focuses on designing, building, testing, and maintaining systems collaboratively. It covers programming techniques (using Java and TypeScript with various frameworks), object-oriented design, advanced testing (e.g., fuzz testing), debugging approaches, and tools such as source control systems. The course concludes with a major group project that students gather requirements for, then design and implement themselves.</p>
            </div>
            <div className="useful-links text-xl whitespace-pre-wrap mt-14 rounded-md px-6 pb-6 pt-3"><div className="relative my-4"><div className="absolute inset-0 flex items-center" aria-hidden="true">
            </div>
              <div className="relative flex justify-start">
                <span className="pr-2 text-xl md:text-2xl font-bold inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 opacity-90" viewBox="0 0 20 20"><path fill="#e6507b" fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path>
                  </svg>Useful Links</span>
              </div>
            </div>
              <div className='flex flex-wrap'>
                <a className="quick-link" href="https://docs.google.com/document/d/17aDeWqIe4OHaw4jw-ZydASAOcg7oU-JKtJma1bhTE2M/edit?usp=sharing" target="_blank" rel="noreferrer">Syllabus</a>
                <a className="quick-link" href="https://docs.google.com/document/d/1ejCvcbb-nJBkiQZlNDAEmxYf-H5lXQdVBZDkaWsu7so/edit?usp=sharing" target="_blank" rel="noreferrer">Missive</a>
                <a className="quick-link" href="https://edstem.org/us/courses/59996/discussion/" target="_blank" rel="noreferrer">EdStem</a>
                <a className="quick-link" href="https://hours.cs.brown.edu/" target="_blank" rel="noreferrer">Hours</a>
                <a className="quick-link" href="https://www.gradescope.com/courses/796961" target="_blank" rel="noreferrer">Gradescope</a>
                <a className="quick-link" href="https://docs.google.com/forms/d/e/1FAIpQLSfr-464cuKCSqz0qH5fHloOQB-YYYZfwHoS-EJ_DEQEf7Syhg/viewform" target="_blank" rel="noreferrer">Anonymous Feedback</a>
                <a className="quick-link" href="mailto:cs0320headtas@lists.brown.edu" target="_blank" rel="noreferrer">HTA Email</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500">Course Info</h1>
          <div className="text-sm md:text-base">
            {CourseData && CourseData.map(infoBit => {
              return (
                <DropDown title={infoBit.title} description={infoBit.description} />
              )
            })}
          </div>
        </div>
      </section>
    </div>

  );
}

export default CourseInfo;
