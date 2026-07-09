export default function SocialProof() {
    return (
        <section className="w-full py-16 lg:py-24">
            <div className="max-w-[1289px] mx-auto px-6">

                {/* Grille bento : 12 colonnes */}
                <div className="grid grid-cols-1 lg:grid-cols-16 gap-6 items-start">

                    {/* Carte 92% — décalée à droite (démarre col 2), en haut */}
                    <div className="lg:col-start-2 mt-15 lg:col-span-6 bg-ink text-white rounded-[32px] p-8">
                        <p className="font-unbounded font-extrabold text-6xl lg:text-7xl leading-none mb-2.5">
                            92%
                        </p>
                        <p className="text-[#FAF7F2] text-lg leading-[24px] max-w-sm">
                            Taux d'insertion professionnelle constaté dans les 6 mois suivant
                            l'obtention du diplôme
                        </p>
                    </div>

                    {/* Bloc texte droite — commence en haut (row 1), plus haut que 92% */}
                    <div className="lg:col-start-9 lg:col-span-5 lg:row-start-1 flex flex-col gap-4.5">
                        <h2 className="font-unbounded font-extrabold text-3xl lg:text-4xl whitespace-nowrap">
                            L'immersion par <span className="text-primary-500">l'alternance</span>
                        </h2>
                        <p className="text-ink text-lg leading-[24px] w-full">
                            L'ensemble de nos cursus de Bachelor et de MBA intègre une approche pragmatique de la formation. En plaçant l'apprentissage collaboratif et l'immersion en entreprise au centre de notre pédagogie, nous
                            garantissons une transition fluide vers le marché de l'emploi et une
                            maîtrise directe des cycles de production.
                        </p>
                        <a
                            href="#formations"
                            className="inline-block bg-ink text-white px-6 py-4 rounded-full w-fit hover:bg-ink/95 transition duration-200"
                        >
                            Consulter les programmes de formation
                        </a>
                    </div>

                    {/* Carte 100% — tout à gauche, rangée du bas */}
                    <div className="lg:col-start-1 lg:col-span-4 lg:row-start-2 bg-ink text-white rounded-[32px] p-8">
                        <p className="font-unbounded font-extrabold text-5xl lg:text-7xl leading-none mb-2.5">
                            100%
                        </p>
                        <p className="text-[#FAF7F2] text-lg leading-[24px]">
                            Des parcours de spécialisation accessibles sous contrat
                            d'apprentissage ou de professionnalisation.
                        </p>
                    </div>

                    {/* Carte 500+ — à droite de 100%, rangée du bas, décalée */}
                    <div className="lg:col-start-5 lg:col-span-4 lg:row-start-2 bg-primary-500 text-white rounded-[32px] p-8">
                        <p className="font-unbounded font-extrabold text-5xl lg:text-7xl leading-none mb-2.5">
                            500+
                        </p>
                        <p className="text-[#FAF7F2] text-lg leading-[24px]">
                            Entreprises partenaires (structures technologiques, agences et
                            grands groupes) en relation directe avec notre cellule de placement.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
