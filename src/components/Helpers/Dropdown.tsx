import React from 'react';
import logo from './logo.svg';
import { Disclosure } from '@headlessui/react';
import { title } from 'process';


function DropDown(props: { title: string, description: string[] }) {
    return (
        <div>
            <Disclosure>
                {({ open }) => (
                    <>
                        <div className="border-b border-violet-500">
                            <Disclosure.Button className="text-violet-500 py-4 font-bold text-xl md:text-2xl w-full text-left focus:underline flex justify-between items-center hover-fade">
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

                                <p className="mt-1 mb-3"><ul className="list-outside pl-8 list-disc text-violet-950">
                                {props.title === 'How to: Collab Section' && 
                                    <div>
                                        <li className='mb-2'>
                                        Arrive at your assigned collab section at the proper time every other week — use the <a className='underline hover:text-violet-500'>swap form</a> if you can't make it.
                                        </li>
                                        <li className='mb-2'>
                                        Fill out the <a className='underline hover:text-violet-500'>Debugging Partner Form</a> for each student you help
                                        </li>
                                        <li className='mb-2'>
                                        Remember, you only need to spend 20 minutes per student + go through one iteration of the Debugging Recipe
                                        </li>
                                        <li className='mb-2'>
                                        If you're the one with a bug, make sure to sign up for "Debugging Partner Queue" on <a className='underline hover:text-violet-500'>hours.cs.brown.edu</a>
                                        </li>
                                        <li className='mb-2'>
                                        Make sure you have a concrete question! If you have a question about getting started, design, or prototyping, please attend starter hours instead.
                                        </li>
                                    </div>
                                    }
                                    {props.title === 'How to: Starter Hours' && 
                                    <div>
                                        <li className='mb-2'>
                                        Starter hours are for questions about getting started, design, or prototyping. We intend for these hours to be a more collaborative space between students and TAs, but not a place for debugging code.
                                    </li>
                                    <li className='mb-2'>
                                    We can assist with setup issues but our main goal is to help you get past any blockers that stop you from getting started. If you have a concrete question or bug, please attend one of the collab sections.
                                    </li>
                                    </div>
                                    }
                                    {props.title === 'CS0320 Manifesto' && <div>
                                        <blockquote>
                                            "Software engineering is about more than just programming. Good engineers often spend more
                                            time reading and reviewing code than writing it. If you're skeptical, read <b><a href="https://linux.slashdot.org/story/20/07/03/2133201/linus-torvalds-i-do-no-coding-any-more">this
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
                                        <p className='mt-3'>– cs0320 Manifesto via the <b><a href="https://docs.google.com/document/d/1_Um0PYcEFVkCpKW4gLQSaUkxVM-qPn4pRUHe-4D-wWQ/edit?usp=drive_link">Course
                                            Missive</a></b></p>
                                    </div>
                                    }
                                    {props.title === 'More Resources' && <div>
                                        <li className='underline hover:text-violet-500'>
                                            <a  href='https://docs.google.com/document/d/1_Um0PYcEFVkCpKW4gLQSaUkxVM-qPn4pRUHe-4D-wWQ/edit?usp=drive_link'>Missive</a>
                                        </li>
                                        <li className='underline hover:text-violet-500'>
                                            <a href='https://docs.google.com/document/d/1vR9JL6DTHpBPrRuBPUgjwpVSbkJmuignlzd2ECuLMqo/edit?usp=drive_link'>Syllabus</a>
                                            <a href='https://www-oreilly-com.revproxy.brown.edu/library/view/effective-java/9780134686097/?ar'>Textbook</a>

                                        </li>
                                        <li className='underline hover:text-violet-500'>
                                            <a href='https://docs.google.com/document/d/1SP1MVjcp2AtXI5D36FFgZzInVYhIUcp_ZoRyWFsDfxA/edit#heading=h.vdqfoknrw69p'>Setup Guide</a>

                                        </li>
                                        <li className='underline hover:text-violet-500'>
                                            <a href='https://docs.google.com/document/d/1vElPm6CZSzbKtNYNYKocE6gHuzY0fLhy2R9fxakfgI0/edit'>Documentation and Style Guide</a>

                                        </li>
                                        <li className='underline hover:text-violet-500'>
                                            <a href='https://docs.google.com/forms/d/e/1FAIpQLSccc2O9xFprtni4m5TAtRfE6DoI7F-F3ffLJwjee40VnDvTAQ/viewform?usp=sf_link'>Collab Section Swap Form</a>

                                        </li>
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
