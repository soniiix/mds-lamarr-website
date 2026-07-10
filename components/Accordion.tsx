"use client";

import { useState } from "react";

export type AccordionItem = { q: string; a?: string };

/**
 * Accordéon réutilisable.
 *  - variant "card" : cartes blanches arrondies (sections Admission / Programme)
 *  - variant "line" : simples lignes séparées (FAQ bas de page)
 */
export default function Accordion({
    items,
    variant = "card",
}: {
    items: AccordionItem[];
    variant?: "card" | "line";
}) {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <div className={variant === "card" ? "flex flex-col gap-3" : "flex flex-col"}>
            {items.map((item, i) => {
                const isOpen = open === i;
                return (
                    <div
                        key={item.q}
                        className={variant === "card" ? "rounded-xl bg-white" : "border-b border-primary-500/40"}
                    >
                        <button
                            type="button"
                            onClick={() => setOpen(isOpen ? null : i)}
                            aria-expanded={isOpen}
                            className={`flex w-full items-center justify-between gap-4 text-left cursor-pointer ${variant === "card" ? "px-5 py-4" : "py-5"}`}
                        >
                            <span className="text-ink">{item.q}</span>
                            <svg
                                className={`h-5 w-5 shrink-0 text-primary-500 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                aria-hidden="true"
                            >
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                        </button>
                        {item.a && (
                            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
                                <p className={`text-sm leading-[1.5] text-ink/70 ${variant === "card" ? "px-5 pb-4" : "pb-5"}`}>
                                    {item.a}
                                </p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
