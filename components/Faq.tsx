"use client";

import Link from "next/link";
import { useState } from "react";

const faqs = [
    {
        q: "Lamarr, c'est quoi exactement ?",
        a: "Lamarr est une école d'enseignement supérieur privé spécialisée dans les métiers du numérique, présente sur 17 campus en France.",
    },
    {
        q: "Alternance ou formation initiale : comment ça se passe à Lamarr ?",
        a: "Nos cursus sont proposés en formation initiale comme en alternance, selon le diplôme et le campus choisis.",
    },
    {
        q: "Concrètement, comment fonctionne l'alternance à Lamarr ?",
        a: "Tu alternes entre périodes en entreprise et cours à l'école, et nous t'accompagnons dans ta recherche d'entreprise.",
    },
    {
        q: "Comment candidater à Lamarr ?",
        a: "La candidature se fait en ligne : dépôt de dossier, puis entretien de motivation avec notre équipe admissions.",
    },
    {
        q: "Comment choisir mon campus Lamarr et financer mes études ?",
        a: "Chaque campus propose ses formations ; en alternance, les frais de scolarité sont pris en charge par l'entreprise. Nos conseillers t'aident à faire le bon choix.",
    },
];

export default function Faq() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="w-full">
            <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 pt-20 pb-10 lg:grid-cols-2 lg:gap-20 lg:px-10">

                {/* Colonne gauche */}
                <div className="flex max-w-[600px] flex-col gap-4.5">
                    <h2 className="font-unbounded text-[30px] font-extrabold leading-[36px] whitespace-nowrap">
                        On répond à vos <span className="text-primary-500">questions</span>
                    </h2>
                    <p className="text-lg leading-[24px] text-ink/80">
                        Le processus d'admission, le rythme d'alternance et le cadre pédagogique : trouvez les réponses factuelles aux questions les plus posées pour finaliser la construction de votre parcours.
                    </p>
                    <Link
                        href="/en-construction"
                        className="self-start rounded-[32px] bg-ink px-6 py-4 text-lg text-white transition hover:bg-ink-500"
                    >
                        Prendre contact
                    </Link>
                </div>

                {/* Colonne droite : accordéon */}
                <div className="flex flex-col">
                    {faqs.map((f, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={f.q} className="border-b border-ink/15">
                                <button
                                    type="button"
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-6 py-6 text-left cursor-pointer"
                                >
                                    <span className="text-lg text-ink/85">{f.q}</span>
                                    <svg
                                        className={`h-6 w-6 shrink-0 text-primary-500 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
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
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
                                >
                                    <p className="text-base leading-[1.5] text-ink/70">{f.a}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
