import "../App.css";
// import SceneViewer from './SceneViewer';
import DropDown from "./Helpers/Dropdown";

function Calendar() {
  return (
    <div>
      <section id="calendar">
        <div className="max-w-5xl mx-auto px-6 pt-16">
          <img className="pb-8" src="/honey-jar-divider.png" alt=""></img>
          <h1
            className="text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500"
            style={{
              background: "#fcedd7ae",
              width: "15%",
              borderRadius: "10px",
            }}
          >
            Calendar
          </h1>
          <div className="text-sm md:text-base">
            {/* <p>As Tim mentioned in class, cs32 has a special way of holding TA hours, which we call collab section. In collab sections, students will bring their bugs to a room of other classmates assigned to serve as their debugging partners and, in pairs, go through the <a className='underline' href='https://hackmd.io/@brown-csci0320/BJKCtyxxs'>debugging recipe</a> (explored in lecture-note form in the <a className='underline' href='https://hackmd.io/@brown-csci0320/H1ONPLN25'>debugging manifesto</a>) to practice debugging together. The goal is to give students the scaffolding necessary to grow their debugging, communication, and collaboration skills while under the supervision of the course staff.</p>
            <br></br><p>Every student is required to serve one hour per week as a debugging partner. Collab sections will be assigned after shopping period ends. Please take a look at the <a className='underline' href='https://docs.google.com/document/d/1rPhDvm2U6womNb74EZLA7Zmt_KIoMObtMvG1PLjWgho/edit#heading=h.a8a0x3tklyf2'>collab section student guide</a> which details the workflow for coming to collab section for help as well as the workflow for serving as a debugging partner.</p> */}
            <div className="row">
              <div className="col-md-12 py-6">
                <div className="hours-container">
                  <iframe
                    title="Calendar"
                    src="https://calendar.google.com/calendar/u/0/embed?src=c_58df939d64dd6200a5cca24568e653d398bdd57821d97700d8f18e313c2719c3@group.calendar.google.com&ctz=America/New_York"
                    style={{ border: "solid 5px rgb(230 139 80)" }}
                    width="100%"
                    height="600"
                  ></iframe>
                </div>
                <div
                  style={{
                    backgroundColor: "#fcedd7ae",
                    borderRadius: "5px",
                    padding: "3px",
                    marginTop: "1.5rem",
                  }}
                >
                  <h3 className="text-l md:text-md font-bold">
                    <b>Talk to Tim</b>
                  </h3>
                  <p
                    style={{
                      padding: "3px",
                    }}
                  >
                    These are shown on the calendar! You can drop by with any question, whether it's about low-level code problems or course policy or general CS advice. (Priority will be given to 0320 questions, of course.)
                  </p>
                </div>
                <div className="text-sm md:text-base pt-6">
                  <DropDown title="Collab Section Info" description={[]} />
                  <DropDown title="Gearup Info" description={[]} />
                  {/* <DropDown title="How to: Conceptual Hours" description={[]}  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="forms">
        <div className="max-w-5xl mx-auto px-6">
          <img className="pt-8" src="/candle-divider.png" alt=""></img>
          {/* <h1 className="text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500">Forms</h1> */}
          <div className="useful-links text-xl-x whitespace-pre-wrap mt-14 rounded-md px-6 pb-6 pt-3">
            <div className="relative my-4">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              ></div>
              <div className="relative flex justify-start">
                <span className="pr-2 text-xl md:text-2xl font-bold inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 opacity-90"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="rgb(230 139 80)"
                      fill-rule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Forms
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a
                className="quick-link"
                href="https://docs.google.com/forms/d/e/1FAIpQLSc5nT2USx-cRFGPIDa87vNpxk8bxMgxyCAmsd02dFMRYQeF_Q/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Collab Section Swap Form
              </a>
              <a
                className="quick-link"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdaNjaNVleEh_KJ8Cn-iWYzY3tMfHLVQ2l2C5FUfBADpXbIAw/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Collab Section Debugging Partner Form
              </a>
              {/* <a className="quick-link" href="https://docs.google.com/forms/d/e/1FAIpQLSe6XtyXXCO-yUTgGQo_X_rIL08hUswbdNFDX_NmY7l1oXHJ2A/viewform?usp=dialog" target="_blank" rel="noreferrer">Collab Section Attendance Form</a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Calendar;
