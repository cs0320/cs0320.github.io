import '../App.css';
// import SceneViewer from './SceneViewer';
import LectureData from '../data/lectures.json';



function Lectures() {
  return (
    <div>
      <section id="lectures">
        <div className="max-w-5xl mx-auto px-6 pt-16">
           <img className='pb-16' src='/leaf_divider.png'></img>
          <h1 className="text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500 neon-text-yellow">
            Lectures
          </h1>
          <div className="text-sm md:text-base">
            <p>cs0320 is taught by Tim Nelson. Lectures are held every Tuesday and Thursday from<b> 1:00 to 2:20 PM</b> in <b>85 Waterman St 130</b> and recordings will be uploaded after each lecture and can also always be found on <a className='hyperlink' href="https://brown.hosted.panopto.com/Panopto/Pages/Sessions/List.aspx?embedded=0&isFromTeams=false#folderID=%2259307d1e-6c59-49df-b5ec-b1da00cfd4c6%22">Panopto</a>. The lecture notes can be found on <a className='hyperlink' href="https://cs0320.github.io/notes/">Github pages</a>.</p>
            <table className="table">
              <thead>
                <tr className="table-header">
                  <th>Topic</th>
                  <th>Date</th>
                  <th>Code</th>
                  <th>Recording</th>
                </tr>
              </thead>
              <tbody>
                {LectureData && LectureData.map(lecture => {
                  return (
                    <tr key={lecture.id}>
                      <td className="py-3">
                        <a href={lecture.notes} target="_blank" style={{ pointerEvents: lecture.notes ? 'auto' : 'none' }}  className="inline-flex items-center assignment-link">
                          <b>{lecture.topic}</b>
                          {lecture.notes &&
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                          </svg>
                          }
                        </a>
                      </td>
                      <td>{lecture.date}</td>
                      <td><a className='' href={lecture.code}>{lecture.code ? 'Livecode' : '—'}</a></td>
                      <td><a className='' href={lecture.recording}>{lecture.recording ? 'Recording' : '—'}</a></td>
                    </tr>
                  )
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
