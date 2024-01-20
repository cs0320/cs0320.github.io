import '../App.css';
// import SceneViewer from './SceneViewer';
import DropDown from './Helpers/Dropdown';



function Calendar() {
  return (
    <section id="calendar">
        <div className="max-w-5xl mx-auto px-6 pt-32">
        <img className='pb-24' src='/divider.png'></img>
          <h1 className="text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500 text-indigo-900">Calendar</h1>
          <div className="text-sm md:text-base text-indigo-900">
            <p>As Tim mentioned in class, cs32 has a special way of holding TA hours, which we call collab section. In collab sections, students will bring their bugs to a room of other classmates assigned to serve as their debugging partners and, in pairs, go through the <a className='underline hover:text-violet-500' href='https://hackmd.io/@brown-csci0320/BJKCtyxxs'>debugging recipe</a> (explored in lecture-note form in the <a className='underline hover:text-violet-500' href='https://hackmd.io/@brown-csci0320/H1ONPLN25'>debugging manifesto</a>) to practice debugging together. The goal is to give students the scaffolding necessary to grow their debugging, communication, and collaboration skills while under the supervision of the course staff.</p>
            <br></br><p>Every student is required to serve one hour per week as a debugging partner. Collab sections will be assigned after shopping period ends. Please take a look at the <a className='underline hover:text-violet-500' href='https://tinyurl.com/collabf23'>collab section student guide</a> which details the workflow for coming to collab section for help as well as the workflow for serving as a debugging partner.</p>
            <div className="row">

              <div className="col-md-12 py-6">
                
                <div className="hours-container">
                  <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=Y18wNGJmMjkwZjMzZGFjY2E5ZTYzMjE0ZjdmZDFkN2Q1MDVjZTI5OWE4ZGFmYTZmYzA0N2Y4NDRkZjExZGVmZjdiQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y18xNzQ5OWFkZGM3NzFjZTRiZGIxOTc2N2IxM2RkNGYwMWIzNmYyZmMxMjY5Njg2MDhiZGJiYzY1ZjVmZWJmODRlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y182ODIyOTcwMDcyMDI0ZjQwNDExMGFhZDQzZmY1NTRmYjk5NzViYzNkOTI3YTQ1Yzg3OGFlMGQxNDFkOGUwZTI3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y18wYWI5OGJkMzAxNzBlZDAzYjY5NmVmNzYzNDFkNGZmNTYwNmRiNDAwYWU1MDljNDM2MjcyNWQwNjQyMjMyNGQxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23b6b2cc&color=%23E67C73&color=%239E69AF&color=%237986CB" style={{ border: 'solid 1px #777' }} width="100%" height="600" frameBorder="0" scrolling="no"></iframe>
                </div>
                <h3 className="text-l md:text-md font-bold mt-6 text-violet-500"><b>Talk to Tim</b></h3>
                <p>
                  Talk to Tim via <a href="https://brown.zoom.us/my/tim.browncs"><b>Zoom</b></a> on Monday from <b>12
                  PM–12:50 PM EST.</b>
                  Tim will also be holding an info session during the first week of class on Friday.
                </p>
                <div className="text-sm md:text-base pt-6">
            
                <DropDown title="How to: Collab Section" description={[]}  />
                <DropDown title="How to: Starter Hours" description={[]}  />
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Calendar;
