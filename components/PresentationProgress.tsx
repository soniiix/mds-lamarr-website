"use client";

import { useEffect, useState } from "react";

type PresentationProgressProps = {
    sectionIds: string[];
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function PresentationProgress({ sectionIds }: PresentationProgressProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const sections = sectionIds
                .map((id) => document.getElementById(id))
                .filter((section): section is HTMLElement => Boolean(section));

            if (sections.length === 0) {
                return;
            }

            const firstSection = sections[0];
            const lastSection = sections[sections.length - 1];
            const start = firstSection.offsetTop - window.innerHeight * 0.2;
            const end = lastSection.offsetTop + lastSection.offsetHeight - window.innerHeight * 0.8;
            const range = Math.max(end - start, 1);
            const value = clamp((window.scrollY - start) / range, 0, 1);

            setProgress(value);
        };

        updateProgress();
        window.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, [sectionIds]);

    return (
        <div className="hidden lg:flex lg:items-stretch lg:justify-center">
            <div className="relative h-full min-h-full w-6">
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 rounded-full bg-ink/10" />
                <div
                    className="absolute left-1/2 top-0 w-px -translate-x-1/2 rounded-full bg-primary-500 transition-[height] duration-300 ease-out"
                    style={{ height: `${progress * 100}%` }}
                />
            </div>
        </div>
    );
}