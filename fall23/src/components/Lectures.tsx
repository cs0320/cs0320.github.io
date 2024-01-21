import '../App.css';
// import SceneViewer from './SceneViewer';
import LectureData from '../data/lectures.json';
import React from 'react';



function Lectures() {
  return (
    <div>
      <section id="lectures">
        <div className="max-w-5xl mx-auto px-6 pt-32">
           <img className='pb-24' src='/divider.png'></img>
          <h1 className="text-indigo-900 text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500 neon-text-yellow">
            Lectures
          </h1>
          <div className="text-sm md:text-base text-indigo-900">
            <p>cs0320 is taught by Tim Nelson. Lectures are held every Tuesday and Thursday from 1:00 to 2:20 PM in Salomon 001 and recordings will be uploaded after each lecture.</p>
            <table className="table">
              <thead>
                <tr className="table-header text-violet-500">
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
                      <td className="py-3 text-violet-500">
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
                      <td><a className='hover:text-violet-500' href={lecture.code}>{lecture.code ? 'Livecode' : ''}</a></td>
                      <td><a className='hover:text-violet-500' href={lecture.reading}>{lecture.reading ? 'Recording' : ''}</a></td>
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
