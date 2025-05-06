import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import agewell from "@/public/agewell.png";
import jatramaps from "@/public/jatramaps.png";
import nepazuru from "@/public/nepazuru.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Studying Bsc.(Hons)SE&CS",
    location: "Kupondole, Lalitpur",
    description:
      "I am currently studying Studying Bsc.(Hons)SE&CS at Patan College For Professional Studies (PCPS)",
    icon: React.createElement(LuGraduationCap),
    date: "2024-Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Kalimati, Kathmandu",
    description: "I am aspiring to be a full-stack developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "AgeWell",
    description:
      "This a complete responsive android application built with flutter for university assignment.",
    tags: ["FLutter", "Firebase"],
    imageUrl: agewell,
  },
  {
    title: "JatraMaps: Explore, Connect, Celebrate",
    description:
      "This project was done as a freelance.JatraMaps is your ultimate guide to discovering and experiencing the vibrant Jatras of Nepal.",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    imageUrl: jatramaps,
  },
  {
    title: "NePazuru - A Customizable Puzzle Game",
    description:
      "This was a group project with my friends.NePazuru is an interactive and customizable puzzle game where users can upload images to create their own puzzles, browse default categories, track leaderboard rankings, and view their puzzle history. The game provides a seamless and engaging experience with user authentication and additional customization features.",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "TailwindCSS",
      "Firebase",
      "Node.js",
      "Express",
    ],
    imageUrl: nepazuru,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
