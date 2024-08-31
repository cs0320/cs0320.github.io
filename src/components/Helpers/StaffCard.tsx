// import SceneViewer from './SceneViewer';
import { StaffMember } from './StaffMember';

function StaffCard(props: {person: StaffMember}) {
   return (
      <div className="text-center">
         <div className="image-container">
            <div className="image-flip">
               <img src={props.person.img} alt="" className="object-cover front-image"></img>
               <img src={props.person.hover} alt="" className="object-cover back-image"></img>
            </div>
         </div>
         
         <div className="name font-display text-xs md:text-sm font-bold mt-4">{props.person.name}</div>
         <div className="pronoun-row text-xs md:text-sm mt-1 font-bold">
            <span className=" mx-1">{props.person.pronouns} |</span>{props.person.role}<span className=" mx-1">| {props.person.cslogin}</span>
         </div>
         <p className="text-sm mt-1 md:mt-2">{props.person.bio}</p>
      </div>
   );
}

export default StaffCard;
