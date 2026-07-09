
export default function Hero() {
    return (
        <section className="w-full">
            <div className="max-w-[1289px] mx-auto px-6 py-20 flex flex-col items-center text-center gap-6">

                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 border border-[#D1CBDD] rounded-full px-[18px] py-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-ink">
                        <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/>
                    </svg>
                    <span className="text-[18px] text-ink">17 Campus en France d'enseignement supérieur</span>
                </div>

                {/* Titre */}
                <h1 className="font-unbounded font-extrabold uppercase text-[60px] leading-[60px]">
                    <span className="text-ink">L'école des métiers du </span>
                    <span className="text-primary-500">Numérique</span>
                </h1>

                {/* Paragraphe */}
                <p className="text-lg text-ink max-w-[981px] leading-[24px]">
                    L'école forme les futurs cadres et experts du secteur digital. Nos cursus intègrent les compétences clés de l'ingénierie logicielle, de l'intelligence artificielle, du management de projet et du design d'expérience.
                </p>

                {/* Boutons CTA */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                    <a href="#" className="px-8 py-4 rounded-[32px] text-lg bg-ink text-white hover:bg-ink-600 transition">
                        Consulter les programmes de formation
                    </a>
                    <a href="#" className="px-8 py-4 rounded-[32px] text-lg border border-ink text-ink hover:bg-ink hover:text-white transition">
                        Prendre rendez-vous avec un conseiller
                    </a>
                </div>

            </div>
        </section>
    );
}