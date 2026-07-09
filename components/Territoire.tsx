import Image from "next/image";

/**
 * Section « Un réseau ancré sur le territoire ».
 * Gauche : panneau rose (plein-bord à gauche) + carte de France (fraance.svg,
 * fond transparent) posée par-dessus et débordant légèrement du panneau.
 * Droite : titre + paragraphe + bouton.
 */
export default function Territoire() {
    return (
        <section className="relative mb-16 w-full overflow-hidden bg-[#FAF7F2] lg:mb-24">

            {/* Panneau rose pleine hauteur (déborde du bord gauche) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[38%] rounded-r-[60px] bg-[#e87d90]" />
            {/* Grand cercle décoratif clair, en haut à droite */}
            <div className="pointer-events-none absolute right-[3%] top-[6%] h-[440px] w-[440px] rounded-full bg-[#f9e3e8]" />

            <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">

                {/* Carte — chevauche la limite rose / crème */}
                <div className="flex justify-center">
                    <Image
                        src="/images/fraance.svg"
                        width={693}
                        height={693}
                        alt="Carte des campus Lamarr en France"
                        className="w-full max-w-[620px]"
                    />
                </div>

                {/* Texte */}
                <div className="flex max-w-[640px] flex-col gap-6">
                    <h2 className="font-unbounded text-[46px] font-extrabold leading-[1.1] lg:text-[54px]">
                        <span className="text-ink">Un réseau ancré sur le </span>
                        <span className="text-primary-500">territoire</span>
                    </h2>
                    <p className="text-lg leading-[1.5] text-ink/80">
                        L'école déploie ses campus au cœur des grandes métropoles numériques françaises, garantissant une proximité immédiate avec les bassins d'emploi régionaux et les écosystèmes d'innovation locaux.
                    </p>
                    <a
                        href="#"
                        className="mt-2 self-start rounded-[32px] bg-ink px-8 py-4 text-lg text-white transition hover:bg-ink-600"
                    >
                        Prendre contact
                    </a>
                </div>

            </div>
        </section>
    );
}
