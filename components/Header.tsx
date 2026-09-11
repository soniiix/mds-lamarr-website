"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/presentation", label: "Formations" },
    { href: "/en-construction", label: "Alternance" },
    { href: "/en-construction", label: "Admissions" },
    { href: "/en-construction", label: "À propos de l'école" },
    { href: "/en-construction", label: "Contact" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full">
            <nav className="mx-auto px-6 lg:px-10 pt-6 flex items-center justify-between min-[1450px]:justify-center gap-24">
                <Link href="/" className="flex-shrink-0">
                    <img src="/lamarr-logo.png" alt="Lamarr" className="h-7 w-auto" />
                </Link>

                <div className="hidden min-[1450px]:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <Link
                            key={`${item.label}-${index}`}
                            href={item.href}
                            className={`text-[18px] leading-6 tracking-normal font-normal transition ${index === 0 ? "text-primary-500" : "text-ink hover:text-primary-500"}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2.5 flex-shrink-0">
                    <div className="hidden min-[1450px]:flex items-center gap-2.5">
                        <Link href="/en-construction" className="px-4 py-2.5 rounded-[32px] text-[18px] leading-6 bg-primary-500 text-white hover:bg-primary-600 transition">
                            Portes ouvertes
                        </Link>
                        <Link href="/en-construction" className="px-4 py-2.5 rounded-[32px] text-[18px] leading-6 border border-primary-500 hover:bg-primary-500 hover:text-white transition duration-300">
                            Candidater
                        </Link>
                    </div>

                    <div className="flex min-[1450px]:hidden items-center gap-2.5">
                        <button
                            id="burger"
                            type="button"
                            className="text-ink"
                            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                            aria-expanded={isMenuOpen}
                            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 6l12 12M18 6L6 18" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`fixed inset-0 z-[60] bg-ink/20 transition-opacity duration-300 min-[1450px]:hidden ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
                aria-hidden="true"
                onClick={() => setIsMenuOpen(false)}
            />

            <div
                className={`fixed inset-y-0 right-0 z-[70] w-[min(88vw,380px)] bg-cream-50 px-8 pt-24 shadow-2xl transition-transform duration-300 min-[1450px]:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="absolute right-6 top-6 text-ink"
                    aria-label="Fermer le menu"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                    </svg>
                </button>

                <div className="flex flex-col gap-6">
                    {navItems.map((item, index) => (
                        <Link
                            key={`mobile-${item.label}-${index}`}
                            href={item.href}
                            className={`text-xl transition ${index === 0 ? "text-primary-500" : "text-ink hover:text-primary-500"}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <div className="mt-4 flex flex-col gap-3 border-t border-ink/10 pt-6">
                        <Link href="/en-construction" className="rounded-[32px] bg-primary-500 px-4 py-2.5 text-center text-base leading-6 text-white transition hover:bg-primary-600" onClick={() => setIsMenuOpen(false)}>
                            Portes ouvertes
                        </Link>
                        <Link href="/en-construction" className="rounded-[32px] border border-primary-500 px-4 py-2.5 text-center text-base leading-6 transition hover:bg-primary-500 hover:text-white" onClick={() => setIsMenuOpen(false)}>
                            Candidater
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}