"use client"

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Projects from './Projects'
import { useSectionInView } from '@/lib/hooks'

export default function Project() {

    const { ref } = useSectionInView('Projects', 0.5);

    // const { ref, inView } = useInView({
    //     threshold: 0.5,
    // });
    // const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

    // useEffect(() => {
    //     if (inView && Date.now() - timeOfLastClick > 1000) {
    //         setActiveSection("Projects")
    //     }
    // }, [inView, setActiveSection, timeOfLastClick])

    return (
        <section ref={ref} id="projects" className='scroll-mt-28 mb-28'>
            <SectionHeading>My Projects</SectionHeading>

            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Projects {...project} />
                        </React.Fragment>
                    ))
                }
            </div>

        </section>
    )
}

