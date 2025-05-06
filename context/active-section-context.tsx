"use client"

import React, { useState, createContext, useContext } from 'react'
import type { SectionName } from '@/lib/type';


type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: {
    children: React.ReactNode;
}) {

    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
    }}>
        {children}
    </ActiveSectionContext.Provider>
}

//custom hook
export function useActiveSectionContext() {

    const context = useContext(ActiveSectionContext)

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActionSectionContextProvider"
        )
    }

    return context;
}