export default function Hero() {
    return (
        <section className="w-full">
            <div className="max-w-[1289px] mx-auto px-6 py-20 flex flex-col items-center text-center gap-6">

                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 border border-ink-100 rounded-[99px] px-[18px] py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.42a12 12 0 01.84 3.92 12 12 0 01-14 0 12 12 0 01.84-3.92L12 14z" />
                    </svg>
                    <span className="text-[18px] text-ink">17 Campus en France d'enseignement supérieur</span>
                </div>

                {/* Titre */}
                <h1 className="font-unbounded font-extrabold uppercase text-[60px] leading-[60px]">
                    <span className="text-ink">L'école des métiers du </span>
                    <span className="text-primary-500">Numérique</span>
                </h1>

                {/* Paragraphe */}
                <p className="text-lg text-ink/80 max-w-2xl leading-relaxed">
                    L'école forme les futurs cadres et experts du secteur digital. Nos cursus intègrent les compétences clés de l'ingénierie logicielle, de l'intelligence artificielle, du management de projet et du design d'expérience.
                </p>

                {/* Boutons CTA */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                    <a href="#" className="px-8 py-4 rounded-[32px] text-lg font-medium bg-ink text-white hover:bg-ink-600 transition">
                        Consulter les programmes de formation
                    </a>
                    <a href="#" className="px-8 py-4 rounded-[32px] text-lg font-medium border border-ink text-ink hover:bg-ink hover:text-white transition">
                        Prendre rendez-vous avec un conseiller
                    </a>
                </div>

            </div>
        </section>
    );
}