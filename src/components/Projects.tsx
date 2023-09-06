import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Navbar from './Navbar';
// import SceneViewer from './SceneViewer';
import { Disclosure } from "@headlessui/react";
import DropDown from './Helpers/Dropdown';
import AssignmentData from '../data/assignments.json'
import GearupData from '../data/gearups.json'



function Projects() {
  return (
    <div>
      <section id="assignments">
        <div className="max-w-5xl mx-auto px-6 pt-32">
          <h1 className="text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500 text-indigo-900">Assignments</h1>
          <div className="text-sm md:text-base text-indigo-900">
            <p>Project handouts are released at 2:20 PM ET on the specified release day. Code submissions are due in Gradescope by <b>7:30 PM ET</b> on the specified code freeze date. Demos will take place sometime within the demo window, depending on your availabilities. Review assignments are out on 9:00 AM ET on the start date in the review window and are due by <b>1:00 PM ET</b> on the end date in the review window.</p>
            <table className="table">
              <thead>
                <tr className="table-header text-violet-500">
                  <th className="pb-3">Project</th>
                  <th>Release</th>
                  <th>Due</th>
                  <th>Demos</th>
                </tr>
              </thead>
              <tbody>
                {AssignmentData && AssignmentData.map(assignment => {
                  return (
                    <tr>
                      <td className="py-3 text-violet-500">
                        <a href={assignment.link} target="_blank" className={assignment.link ? "inline-flex items-center" : "inline-flex items-center inactive-link"}>
                          <b>{assignment.title}</b>
                          {assignment.link && <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                          </svg>}
                        </a>
                      </td>
                      <td>{assignment.release}</td>
                      <td>{assignment.due}</td>
                      <td>{assignment.demos}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="gearups">
        <div className="max-w-5xl mx-auto px-6 pt-32">
          <h1 className="text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500 text-indigo-900">Gear Ups</h1>
          <div className="text-sm md:text-base text-indigo-900">
            <p>Gear-ups are interactive, lecture-style sections led by TAs that reinforce content from lecture with a specific emphasis on applying concepts to the current sprint. Gear-ups are held on the Thursday and Friday after each project's release. Attendance is mandatory, and gear-up sections will be assigned after shopping period ends.</p>
            <table className="table">
              <thead>
                <tr className="table-header text-violet-500">
                  <th className="pb-3">Topic</th>
                  <th>Date</th>
                  <th>Slides</th>
                  <th>Recording</th>
                </tr>
              </thead>
              <tbody>
                {GearupData && GearupData.map(gearup => {
                  return (
                    <tr>
                      <td className="py-3 text-violet-700">
                        <b>{gearup.title}</b>
                      </td>
                      <td>{gearup.date}</td>
                      <td>{gearup.slides}</td>
                      <td>{gearup.recording}</td>
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

export default Projects;
