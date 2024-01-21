// import SceneViewer from './SceneViewer';
import React from 'react';
import { StaffMember } from './StaffMember';


function StaffCard(props: {person: StaffMember}) {
   return (
      <div className="text-center">
         <div className="aspect-w-1 aspect-h-1 bg-gray-900 rounded-xl overflow-hidden"><img src={props.person.img} alt="" className="object-cover"></img></div>
         <div className="text-violet-500 font-display text-xs md:text-sm font-bold mt-4">{props.person.name}</div>
         <div className="text-violet-500 text-xs md:text-sm mt-1 font-bold opacity-50">
            <span className=" mx-1">{props.person.pronouns} |</span>{props.person.role}<span className=" mx-1">| {props.person.cslogin}</span>
         </div>
         <p className="text-sm mt-1 md:mt-2 text-violet-800">{props.person.bio}</p>
      </div>
   );
}

export default StaffCard;
