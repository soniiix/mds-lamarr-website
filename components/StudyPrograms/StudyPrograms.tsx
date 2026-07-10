"use client";

import ProgramCard from "@/components/StudyPrograms/Program";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";

const programs = [
    {
        color: "bg-primary-200",
        title: <>Le Cycle Initial<br />(Post-Bac)</>,
        description:
            "Acquisition des fondamentaux techniques et méthodologiques. Un tronc commun rigoureux pour maîtriser les bases du code, des infrastructures, de la gestion de projet et du design avant de choisir une spécialisation.",
        tags: [
            "Niveau d'accès : Post-Bac (Durée : 2 ans)",
            "Cursus initial sous statut étudiant - Préparation aux choix de filières.",
        ],
        image: "/images/study-program-1.png",
    },
    {
        color: "bg-ia-100",
        title: <>Bachelor<br />Spécialisé</>,
        description:
            "Année de spécialisation métier et de certification professionnelle. Consolidation de l'expertise technique dans l'un de nos départements au choix, entièrement rythmée par l'immersion en entreprise.",
        tags: [
            "Bac+2 ou après le Cycle Initial (Durée : 1 ans)",
            "Formation accessible à 100% en alternance - Titre certifié RNCP de Niveau 6.",
        ],
        image: "/images/study-program-2.png",
    },
    {
        color: "bg-tech-200",
        title: <>Le Cycle Expertise<br />MBA</>,
        description:
            "Haute spécialisation et direction stratégique. Développez une expertise de pointe (Intelligence Artificielle, Cybersécurité avancée ou Direction Artistique) et apprenez à piloter des projets technologiques à l'échelle internationale.",
        tags: [
            "Bac+3 / Titulaires d'un Bachelor (Durée : 2 ans)",
            "Formation managériale en alternance - Titre certifié RNCP de Niveau 7.",
        ],
        image: "/images/study-program-3.png",
    },
];

export default function StudyPrograms() {
    return (
        <section id="formations" className="w-full py-16">

            {/* Titre */}
            <div className="max-w-[1289px] mx-auto px-6 text-center mb-4.25">
                <h2 className="font-unbounded font-extrabold text-3xl text-ink leading-[36px]">
                    Rechercher une <span className="text-primary-500">formation</span>
                </h2>
            </div>

            {/* Barre de recherche (inchangée) */}
            <div className="max-w-[1341px] mx-auto px-6 mb-14">
                <div className="bg-[#FCFBFA] rounded-[24px] border border-[#D1CBDD] p-5 flex flex-col lg:flex-row lg:items-center gap-4">
                    {["Niveau d'études visé", "Secteurs / Métiers", "Type de diplome", "Votre localisation"].map((label) => (
                        <div key={label} className="relative flex-1">
                            <select
                                defaultValue=""
                                className="w-full appearance-none bg-white !text-[#757678] border border-[#C8C9CC] rounded-[32px] pl-5 pr-10 py-3 text-ink/80 text-base cursor-pointer hover:outline-none hover:border-primary-500 transition duration-200 focus:outline-none focus:border-primary-500"
                            >
                                <option value="" disabled>{label}</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-ink/60 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    ))}
                    <button className="bg-primary-500 text-white px-6 py-4 rounded-full hover:bg-primary-600 transition whitespace-nowrap cursor-pointer">
                        Rechercher
                    </button>
                </div>
            </div>

            {/* Sous-titre */}
            <div className="max-w-[1293px] mx-auto mb-6">
                <h3 className="font-unbounded font-extrabold text-2xl md:text-3xl text-primary-500">
                    Programmes <span className="text-ink">et</span> Cursus Supérieurs
                </h3>
            </div>

            {/* Carrousel Swiper */}
            <Swiper
                modules={[FreeMode, Mousewheel]}
                slidesPerView="auto"
                spaceBetween={24}
                freeMode={true}
                grabCursor={true}
                mousewheel={{ forceToAxis: true }}
                slidesOffsetBefore={offsetBefore()}
                slidesOffsetAfter={24}
                className="!px-0"
            >
                {programs.map((p, i) => (
                    <SwiperSlide key={i} className="!w-[490px]">
                        <div className="flex flex-col gap-6">
                            <ProgramCard
                                color={p.color}
                                title={p.title}
                                description={p.description}
                                tags={p.tags}
                                image={p.image}
                            />
                            <Link
                                href="/presentation"
                                className={`${p.color} w-full text-center rounded-full px-6 py-3 text-base font-medium text-ink transition hover:opacity-90 cursor-pointer`}
                            >
                                Découvrir ce programme
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

function offsetBefore() {
    if (typeof window === "undefined") return 24;
    return Math.max((window.innerWidth - 1309) / 2, 24);
}
