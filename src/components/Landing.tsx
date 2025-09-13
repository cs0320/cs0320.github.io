import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import React, { useState, useLayoutEffect } from "react"; // add this
import "../App.css";
import Calendar from "./Calendar";
import CourseInfo from "./CourseInfo";
import Lectures from "./Lectures";
import Projects from "./Projects";
import Staff from "./Staff";

interface LandingProps {
  animationEnabled: boolean;
}

function Landing({ animationEnabled }: LandingProps) {
  const { scrollY } = useScroll();
  const prefersReduced = useReducedMotion();
  // If animation is disabled, act as if prefersReduced is true
  const effectiveReduced = prefersReduced || !animationEnabled;
  const factor = effectiveReduced ? 0 : -0.27;
  const rawY = useTransform(scrollY, (v) => v * factor);
  const y = useSpring(rawY, { stiffness: 140, damping: 22, mass: 0.8 });

  const [imgHeight, setImgHeight] = useState<number>(
    typeof window !== "undefined" ? window.innerHeight * 2 : 2000
  );

  useLayoutEffect(() => {
    const update = () => {
      const vh = window.innerHeight;
      const doc = document;
      const pageH = Math.max(
        doc.body.scrollHeight,
        doc.documentElement.scrollHeight,
        doc.body.offsetHeight,
        doc.documentElement.offsetHeight,
        doc.body.clientHeight,
        doc.documentElement.clientHeight
      );
      const maxScroll = Math.max(0, pageH - vh);
      const needed = Math.ceil(vh + Math.abs(factor) * maxScroll) + 25;
      setImgHeight(needed);
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(document.body);

    window.addEventListener("resize", update);
    window.addEventListener("load", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      window.removeEventListener("load", update);
    };
  }, [factor]);

  return (
    <section className="landing relative overflow-hidden px-2 py-32 md:px-0 font-mono">
      {/* Animated background if enabled, static otherwise */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 [will-change:transform] [backface-visibility:hidden]"
      >
        <motion.img
          src={effectiveReduced ? "/background.png" : "/background.gif"}
          alt=""
          draggable={false}
          className="w-full object-cover object-top select-none"
          style={{ y, height: imgHeight }}
          loading="eager"
          decoding="async"
        />
      </motion.div>

      <div className="relative z-10 container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3 px-8">
          {/* <h1 className="text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500">
            If you are waitlisted for the course,{" "}
            <em>you must keep it in your cart</em> as a "prospective student" or
            you will receive no updates!
          </h1> */}
          <div className="w-full md:w-1/2 md:px-3 lg:px-8">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block typing-demo">cs0320.</span>
                <span className="software-title">
                  Introduction to Software Engineering
                </span>
              </h1>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto">
              {/* <div className="text-xl-x">
                <em>
                  This site is being updated for Fall 2025. Information may not
                  be current.
                </em>
              </div> */}
              <div className="image-container-1">
                <img src="/hot-choco.png" alt="" className="scatter-image" />
                <img src="/fire.png" alt="" className="scatter-image" />
                <img src="/honey-jar.png" alt="" className="scatter-image" />
                <img src="/cheesecake.png" alt="" className="scatter-image" />
                <img src="/apple.png" alt="" className="scatter-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CourseInfo />
      <Projects />
      <Lectures />
      <Calendar />
      <Staff />
    </section>
  );
}

export default Landing;
