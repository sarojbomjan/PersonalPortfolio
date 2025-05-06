"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About");

  // const { ref, inView } = useInView({
  //     threshold: 0.75,
  // });
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  // useEffect(() => {
  //     if (inView && Date.now() - timeOfLastClick > 1000) {
  //         setActiveSection("About")
  //     }
  // }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm currently pursuing my{" "}
        <span className="font-medium">
          BSc (Hons) in Software Engineering & Computer Science
        </span>{" "}
        at Patan College for Professional Studies (PCPS), where I'm developing a
        strong foundation in system design and software development principles.
        My technical journey began with web development, which sparked my
        passion for designing web and developing app for problem solving. What
        excites me most about programming is the{" "}
        <span className="italic">problem-solving process</span> - I{" "}
        <span className="underline">thrive</span> on architecting elegant
        solutions to complex challenges. My core expertise lies in{" "}
        <span className="font-medium">modern web development</span>, with a
        focus on{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I'm also proficient with TypeScript and enjoy working with relational
        databases through Prisma.
      </p>

      <p>
        I'm particularly interested in fullstack web development. Currently
        seeking a{" "}
        <span className="font-medium">full-time web development position</span>{" "}
        where I can apply my technical skills while continuing to grow as a
        professional developer.
      </p>
    </motion.section>
  );
}
