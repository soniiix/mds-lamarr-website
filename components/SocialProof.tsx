export default function SocialProof() {
    return (
        <section className="w-full py-16 lg:pt-20 lg:pb-12">
            <div className="mx-auto max-w-[1289px] px-6">

                {/* Grille bento : 12 colonnes */}
                <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">

                    {/* Carte 92% — en haut, décalée à droite et vers le bas */}
                    <div className="rounded-[32px] bg-ink p-8 text-white lg:col-span-4 lg:col-start-2 lg:row-start-1 lg:mt-20">
                        <p className="mb-2.5 font-unbounded text-6xl font-extrabold leading-none lg:text-7xl">92%</p>
                        <p className="text-lg leading-[24px] text-[#FAF7F2]">
                            Taux d'insertion professionnelle constaté dans les 6 mois suivant l'obtention du diplôme
                        </p>
                    </div>

                    {/* Bloc texte — en haut à droite */}
                    <div className="flex flex-col gap-5 lg:col-span-6 lg:col-start-7 lg:row-start-1">
                        <h2 className="font-unbounded text-3xl font-extrabold lg:whitespace-nowrap">
                            L'immersion par <span className="text-primary-500">l'alternance</span>
                        </h2>
                        <p className="text-lg leading-[24px] text-ink">
                            L'ensemble de nos cursus de Bachelor et de MBA intègre une approche pragmatique de la formation. En plaçant l'apprentissage collaboratif et l'immersion en entreprise au centre de notre pédagogie, nous garantissons une transition fluide vers le marché de l'emploi et une maîtrise directe des cycles de production.
                        </p>
                        <a
                            href="#formations"
                            className="w-fit rounded-full bg-ink px-6 py-4 text-white transition duration-200 hover:bg-ink-600"
                        >
                            Consulter les programmes de formation
                        </a>
                    </div>

                    {/* Carte 100% — rangée du bas, tout à gauche */}
                    <div className="rounded-[32px] bg-ink p-8 text-white lg:col-span-4 lg:col-start-1 lg:row-start-2">
                        <p className="mb-2.5 font-unbounded text-6xl font-extrabold leading-none lg:text-7xl">100%</p>
                        <p className="text-lg leading-[24px] text-[#FAF7F2]">
                            Des parcours de spécialisation accessibles sous contrat d'apprentissage ou de professionnalisation.
                        </p>
                    </div>

                    {/* Carte 500+ — rangée du bas, à droite de 100% */}
                    <div className="rounded-[32px] bg-primary-500 p-8 text-white lg:col-span-4 lg:col-start-5 lg:row-start-2">
                        <p className="mb-2.5 font-unbounded text-6xl font-extrabold leading-none lg:text-7xl">500+</p>
                        <p className="text-lg leading-[24px] text-[#FAF7F2]">
                            Entreprises partenaires (structures technologiques, agences et grands groupes) en relation directe avec notre cellule de placement.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
