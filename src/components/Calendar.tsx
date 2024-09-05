import '../App.css';
// import SceneViewer from './SceneViewer';
import DropDown from './Helpers/Dropdown';



function Calendar() {
  return (
    <section id="calendar">
        <div className="max-w-5xl mx-auto px-6 pt-16">
        <img className='pb-16' src='/acorn_divider.png'></img>
          <h1 className="text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500">Calendar</h1>
          <div className="text-sm md:text-base">
            {/* <p>As Tim mentioned in class, cs32 has a special way of holding TA hours, which we call collab section. In collab sections, students will bring their bugs to a room of other classmates assigned to serve as their debugging partners and, in pairs, go through the <a className='underline' href='https://hackmd.io/@brown-csci0320/BJKCtyxxs'>debugging recipe</a> (explored in lecture-note form in the <a className='underline' href='https://hackmd.io/@brown-csci0320/H1ONPLN25'>debugging manifesto</a>) to practice debugging together. The goal is to give students the scaffolding necessary to grow their debugging, communication, and collaboration skills while under the supervision of the course staff.</p>
            <br></br><p>Every student is required to serve one hour per week as a debugging partner. Collab sections will be assigned after shopping period ends. Please take a look at the <a className='underline' href='https://docs.google.com/document/d/1rPhDvm2U6womNb74EZLA7Zmt_KIoMObtMvG1PLjWgho/edit#heading=h.a8a0x3tklyf2'>collab section student guide</a> which details the workflow for coming to collab section for help as well as the workflow for serving as a debugging partner.</p> */}
            <div className="row">

              <div className="col-md-12 py-6">
                
                <div className="hours-container">
                  {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=Y19hOTdlOGQ0M2Y0ZjEwY2M2NmEyY2FhYzcyMDA2NTY4MDk3MGViOWE2NzQ3MjYwMzk4OTNiOWYwNTdjZjllMGE2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y182ZWNhM2YwMTFmNGQwNzJjMDIzNmVmN2E4ZGM1OTJhZTQyMWYwNmE0NzE0NjNmYWY2NGE0ZWQ4NzgwYjAxMmRkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y18xN2VlZTk3NTI0NDc0Y2M5YTE0NDBkODQwMWVhMTUwMDcyNjNhMzY1NmQ4MGU0NjM1NDg2NjlkZTRhNmVkYjEyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=Y185YjA5YzAyYTIyOTY1ZDU3ZjBlNjE1NDkyMTNlODg0NzVhYTBiMmNlODM0NDZmNjI1ZDU5MDBmZTZlZTkyYTEzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23B39DDB&color=%23EF6C00&color=%233F51B5&color=%237CB342" style={{ border: 'solid 1px #777' }} width="100%" height="600" frameBorder="0" scrolling="no"></iframe> */}
                  <iframe src="https://calendar.google.com/calendar/embed?src=c_95eba3b54eedca59e91ba8caaa7f340e047d1a242abbe1142ab5c55aa2ebdf26%40group.calendar.google.com&ctz=America%2FNew_York" style={{ border: 'solid 5px #c87610' }} width="100%" height="600"></iframe>
                </div>
                <h3 className="text-l md:text-md font-bold mt-6"><b>Talk to Tim</b></h3>
                <p>
                  Talk to Tim in <b>CIT 355</b> on Thursdays from <b>2:30
                  PM–3:30 PM EST</b> (right after lecture). 
                </p>
                <div className="text-sm md:text-base pt-6">
            
                <DropDown title="Collab Section Info" description={[]}  />
                {/* <DropDown title="How To: Collab Section" description={[]}  /> */}
                {/* <DropDown title="How to: Conceptual Hours" description={[]}  /> */}
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Calendar;
