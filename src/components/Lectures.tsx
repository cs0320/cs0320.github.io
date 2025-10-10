import "../App.css";
// import SceneViewer from './SceneViewer';
import LectureData from "../data/lectures.json";

function Lectures() {
  return (
    <div>
      <section id="lectures">
        <div className="max-w-5xl mx-auto px-6 pt-16">
          <img className="pb-16" src="/apple-divider.png" alt=""></img>
          <h1
            className="text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500 neon-text-yellow"
            style={{
              background: "#fcedd7ae",
              width: "15%",
              borderRadius: "10px",
            }}
          >
            Lectures
          </h1>
          <div className="text-sm md:text-base">
            <p
              style={{
                backgroundColor: "#fcedd7ae",
                borderRadius: "20px",
                padding: "10px",
              }}
            >
              cs0320 is taught by Tim Nelson. Lectures are held every Tuesday
              and Thursday from<b> 10:30AM to 11:50AM (new time!)</b> in{" "}
              <b>Barus & Holley 168</b></p>
              <p
               style={{
                backgroundColor: "#fcedd7ae",
                borderRadius: "20px",
                padding: "10px",
              }}><b>Recordings</b> will be
              uploaded after each lecture and can also always be found on{" "}
              <a
                className="hyperlink"
                href="https://brown.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx#folderID=%2266b9e9e2-07aa-4460-ac5b-b348016201d8%22"
              >
                Panopto
              </a>.</p>

              <p
                style={{
                backgroundColor: "#fcedd7ae",
                borderRadius: "20px",
                padding: "10px",
              }}><b>Lecture notes</b> can be found{" "}
              <a className="hyperlink" href="https://cs0320.github.io/notes/">
                here
              </a>
              , and class livecode can be found in{" "}
              <a
                className="hyperlink"
                href="https://github.com/cs0320/class-livecode"
              >
                this Github repo
              </a>
              . Always check these resources for additional content. Not every resource (especially in the notes) fits a specific lecture slot.
            </p>
            <table className="table">
              <thead>
                <tr className="table-header">
                  <th>Topic</th>
                  <th>Notes</th>
                  <th>Date</th>
                  <th>Code</th>
                  <th>Recording</th>
                  <th>Readings</th>
                </tr>
              </thead>
              <tbody>
                {LectureData &&
                  LectureData.map((lecture) => {
                    return (
                      <tr key={lecture.id}>
                        <td className="py-3">
                          <a
                            href={lecture.notes}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              pointerEvents: lecture.notes ? "auto" : "none",
                            }}
                            className="inline-flex items-center assignment-link"
                          >
                            <b>{lecture.topic}</b>
                            {/* {lecture.notes && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                ></path>
                              </svg>
                            )} */}
                          </a>
                        </td>
                        <td>
                        {lecture.notes ? 
                              <a className="hyperlink" href={lecture.notes}>Notes</a> : ""}
                        </td>
                        <td>{lecture.date}</td>
                        <td>
                          {lecture.code ?                           
                          <a className="hyperlink" href={lecture.code}>Code</a>
                          : "-"}
                        </td>
                        <td>
                          {lecture.recording ? 
                            <a className="hyperlink" href={lecture.recording}>Recording</a>
                            : "-"}
                        </td>
                        <td>
                          {lecture.readings.map(reading => {
                            return <p>&bull; <a className="hyperlink" href={reading.url}>
                              {reading.title}
                            </a></p>
                          })}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Lectures;
