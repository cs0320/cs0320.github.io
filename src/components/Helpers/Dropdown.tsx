import { Disclosure } from '@headlessui/react';


function DropDown(props: { title: string, description: string[] }) {
    return (
        <div>
            <Disclosure>
                {({ open }) => (
                    <>
                        <div className="border-b border-[#c54805]">
                            <Disclosure.Button className="py-4 font-bold dropdown md:text-2xl w-full text-left focus:underline flex justify-between items-center hover-fade">
                                {props.title}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-6 w-6 transition-transform duration-200 transform ${open ? 'rotate-45' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4v16m8-8H4"
                                    ></path>
                                </svg>
                            </Disclosure.Button>

                            <Disclosure.Panel>
                                {/* Your collapsible content goes here */}

                                <p className="mt-1 mb-3"><ul className="list-outside pl-8 list-disc">
                                {props.title === 'How To: Collab Section' && 
                                    <div>
                                    </div>
                                    }
                                    {props.title === 'Collab Section Info' && 
                                    <div>
                                        <li className='mb-2'>
                                        You will serve as a collab partner for 1 hour every other week during your assigned collab section slot. Collab partners discuss and help with through bugs and design questions that other students bring.
                                        </li>
                                        <li className='mb-2'>
                                        As a collab partner helping with a bug, you will spend a maximum of 20 minutes per student (one iteration of the Debugging Recipe).
                                        </li>
                                        <li className='mb-2'>
                                        <a className='underline' href='https://docs.google.com/document/d/1rPhDvm2U6womNb74EZLA7Zmt_KIoMObtMvG1PLjWgho/edit?usp=sharing'>Collab Section Guide</a>
                                        </li>
                                        <li className='mb-2'>
                                        <a className='underline' href='https://docs.google.com/forms/d/e/1FAIpQLSfjYo0ccOuz4sJTY-1LoYN-YLIQryNenpTeQJBKsFFSjucw-g/viewform?usp=sf_link'>Collab Section Swap Form</a>
                                        </li>
                                    </div>
                                    }
                                    {props.title === 'Gearup Info/Forms' && 
                                    <div>
                                        <li className='mb-2'>
                                        Gear-ups are interactive, lecture-style sections led by TAs that reinforce content from lecture with a specific emphasis on applying concepts to the current sprint. Gear-ups are held on the days immediately after each project's release. Attendance is mandatory.
                                        </li>
                                        <li className='mb-2'>
                                        For the most part, sprint gearups will alternate with mandatory discussion sections. Check the calendar for further details.
                                        </li>
                                        <li className='mb-2'>
                                        <a className='underline' href='https://docs.google.com/forms/d/e/1FAIpQLSf2281BB3EuzP5P9DoO8AgDTAuIixk5kuDknQPt3RwKgdfxoA/viewform?usp=sf_link'>Gearup Swap Form</a>
                                        </li>
                                    </div>
                                    }
        
                                    {props.title === 'CS0320 Manifesto' && <div>
                                        <blockquote>
                                            "Software engineering is about more than just programming. Good engineers often spend more
                                            time reading and reviewing code than writing it. If you're skeptical, read <b><a className="hyperlink" href="https://linux.slashdot.org/story/20/07/03/2133201/linus-torvalds-i-do-no-coding-any-more">this
                                                short statement</a></b> by Linus Torvalds, one of the world's most famous programmers.
                                            <br></br>
                                            <br></br>
                                            Linus isn’t on vacation. He's not taking it easy. And yet he
                                            spends most of his engineering time on reviewing other peoples' code. Let's stop pretending
                                            that "writing a lot of code" is the only metric that matters, and instead ask about what
                                            else should be important. Things like:
                                            <br></br>
                                            <br></br>
                                            - How do you know that a program works? What if it's a program you didn't write?
                                            <br></br>
                                            - How do you know that you're writing the right program in the first place?
                                            <br></br>
                                            - How can you design to maximize the possibility of re-use?
                                            <br></br>
                                            - How can you make your code safe from bugs (yours and others')?
                                            <br></br>
                                            - How can you write code that's easy to understand?
                                            <br></br>
                                            - How do people write software collaboratively in a distributed way?
                                            <br></br>
                                            - Which unusual algorithmic ideas, new technologies, and linguistic tools should you know
                                            about as an engineer today?
                                            <br></br>
                                            <br></br>
                                            This course is about all of that. You'll still write a lot of code, too, but we will
                                            embrace a more professional perspective. You're not just trying to pass the course's test
                                            suite;
                                            you’re trying to build software for real.
                                            "

                                        </blockquote>
                                        <p className='mt-3'>– cs0320 Manifesto via the <b><a className='quick-link' href="https://docs.google.com/document/d/1ejCvcbb-nJBkiQZlNDAEmxYf-H5lXQdVBZDkaWsu7so/edit?usp=sharing">Course
                                            Missive</a></b></p>
                                    </div>
                                    }
                                    {props.title === 'More Resources' && <div>
                                        <li className='underline'>
                                            <a  href='https://docs.google.com/document/d/1ejCvcbb-nJBkiQZlNDAEmxYf-H5lXQdVBZDkaWsu7so/edit?usp=sharing'>Missive</a>
                                        </li>
                                        <li className='underline'>
                                            <a href='https://docs.google.com/document/d/17aDeWqIe4OHaw4jw-ZydASAOcg7oU-JKtJma1bhTE2M/edit?usp=sharing'>Syllabus</a>
                               
                                        </li>
                                        <li className='underline'>
                                        <a href='https://www-oreilly-com.revproxy.brown.edu/library/view/effective-java/9780134686097/?ar'>Textbook</a>

                                        </li>
                                        <li className='underline'>
                                            <a href='https://docs.google.com/document/d/1hke8VdRwDEBI6FH5c3z0-h5Pr9nnPMZF2Ngfc-YqjiY/edit?usp=sharing'>Documentation and Style Guide</a>

                                        </li>
                                        <li className='underline'>
                                            <a href='https://docs.google.com/document/d/1Rwwenh6TXRbz5IEtLCTmkK88ZHaYjlOBf1NahO2q-wA/edit?usp=sharing'>Git Guide</a>

                                        </li>
                                        <li className='underline'>
                                            <a href='https://docs.google.com/document/d/1t7Fe1qL1n-57poLHckn0t1NuWFpU-bpzkPxjq5SrF7I/edit?usp=sharing'>Demo Recipe</a>

                                        </li>
                                        <li className='underline'>
                                            <a href='http://cs0320.github.io/notes/'>Lecture Notes with Exercises</a>

                                        </li>
        
                                        {/* https://docs.google.com/document/d/1tnlnhndoJsNlaeFGhnrgSLnshxiO48POYmQVhxW5Cdo/edit?usp=sharing */}
                                    </div>
                                    }
                                    {props.description && props.description.map(desc => {
                                        return (
                                            <div>
                                                <li className=' mb-3'>{desc}</li>
                                            </div>
                                        )
                                    })}
                                </ul></p>
                            </Disclosure.Panel>
                        </div>
                    </>
                )}
            </Disclosure>
        </div>
    );
}

export default DropDown;
