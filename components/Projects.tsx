"use client";

import { projectsData } from "@/lib/data";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Projects({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[22rem] sm:pr-8 sm:group-even:pl-8">
        {/* Content Container */}
        <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>

          {/*Description Container */}
          <div className="mt-2 flex-1 overflow-y-auto">
            <p className="line-clamp-4 leading-relaxed text-gray-700 transition-all hover:line-clamp-none dark:text-white/70">
              {description}
            </p>
          </div>

          {/* Tags */}
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="hidden sm:absolute sm:right-0 sm:top-0 sm:block sm:h-full sm:w-[50%] sm:group-even:left-0 sm:group-even:right-auto">
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            width={800}
            height={800}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-left-top transition-transform duration-300 group-hover:scale-105"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
            }}
          />
        </div>

        {/* <div className="hidden sm:absolute sm:right-0 sm:top-0 sm:block sm:h-full sm:w-[50%] sm:group-even:left-0 sm:group-even:right-auto">
          <div className="relative h-full w-full">
            <Image
              src={imageUrl}
              alt={title}
              quality={95}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              style={{
                objectPosition: "left top", // Align to top-left
              }}
            />
          </div>
        </div> */}

        {/* For mobile view */}
        <div className="relative w-full sm:hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={600}
            className="h-auto w-full"
          />
        </div>
        {/* <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
        /> */}
      </section>
    </motion.div>
  );
}
