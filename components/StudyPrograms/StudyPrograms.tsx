import ProgramCard from "@/components/StudyPrograms/Program";

export default function StudyPrograms() {
    return (
        <section id="formations" className="w-full py-16">

            {/* Titre */}
            <div className="max-w-[1289px] mx-auto px-6 text-center mb-4.25">
                <h2 className="font-unbounded font-extrabold text-3xl text-ink leading-[36px]">
                    Rechercher une <span className="text-primary-500">formation</span>
                </h2>
            </div>

            {/* Barre de recherche */}
            <div className="max-w-[1341px] mx-auto px-6 mb-14">
                <div className="bg-[#FCFBFA] rounded-[24px] shadow-sm border border-[#D1CBDD] p-5 flex flex-col lg:flex-row items-stretch lg:items-center gap-3">

                    {/* Selects */}
                    {["Niveau d'études visé", "Secteurs / Métiers", "Type de diplome", "Votre localisation"].map((label) => (
                        <div key={label} className="relative flex-1">
                            <select
                                defaultValue=""
                                className="w-full appearance-none bg-white text-[#757678] border border-[#C8C9CC] rounded-full pl-5 pr-10 py-3 text-ink/80 text-base cursor-pointer focus:outline-none focus:border-primary-500"
                            >
                                <option value="" disabled>{label}</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-ink/60 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    ))}

                    {/* Bouton rechercher */}
                    <button className="bg-primary-500 text-white px-6 py-4 rounded-full hover:bg-primary-600 transition whitespace-nowrap cursor-pointer">
                        Rechercher
                    </button>
                </div>
            </div>

            {/* Sous-titre */}
            <div className="max-w-[1289px] mx-auto px-6 mb-8">
                <h3 className="font-unbounded font-extrabold text-2xl md:text-3xl text-primary-500">
                    Programmes <span className="text-ink">et</span> Cursus Supérieurs
                </h3>
            </div>

            {/* Carrousel de cartes */}
            <div className="max-w-[1289px] mx-auto pl-6">
                <div className="flex gap-6 overflow-x-auto pb-6 pr-6 snap-x snap-mandatory scrollbar-hide">

                    {/* Carte 1 — rose */}
                    <ProgramCard
                        color="bg-primary-500"
                        title={<>Le Cycle Initial<br />(Post-Bac)</>}
                        description="Acquisition des fondamentaux techniques et méthodologiques. Un tronc commun rigoureux pour maîtriser les bases du code, des infrastructures, de la gestion de projet et du design avant de choisir une spécialisation."
                        tags={[
                            "Niveau d'accès : Post-Bac (Durée : 2 ans)",
                            "Cursus initial sous statut étudiant — Préparation aux choix de filières.",
                        ]}
                        image="/formations/cycle-initial.jpg"
                    />

                    {/* Carte 2 — violet (IA) */}
                    <ProgramCard
                        color="bg-ia-100"
                        title={<>Bachelor<br />Spécialisé</>}
                        description="Année de spécialisation métier et de certification professionnelle. Consolidation de l'expertise technique dans l'un de nos départements au choix, entièrement rythmée par l'immersion en entreprise."
                        tags={[
                            "Bac+2 ou après le Cycle Initial (Durée : 1 ans)",
                            "Formation accessible à 100% en alternance — Titre certifié RNCP de Niveau 6.",
                        ]}
                        image="/formations/bachelor.jpg"
                    />

                    {/* Carte 3 — vert (Tech) */}
                    <ProgramCard
                        color="bg-tech-200"
                        title={<>Le Cycle Expertise<br />MBA</>}
                        description="Haute spécialisation et direction stratégique. Développez une expertise de pointe (Intelligence Artificielle, Cybersécurité avancée ou Direction Artistique) et apprenez à piloter des projets technologiques à l'échelle internationale."
                        tags={[
                            "Bac+3 / Titulaires d'un Bachelor (Durée : 2 ans)",
                            "Formation managériale en alternance — Titre certifié RNCP de Niveau 7.",
                        ]}
                        image="/formations/mba.jpg"
                    />

                </div>
            </div>
        </section>
    );
}