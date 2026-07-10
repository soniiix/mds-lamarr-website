import Image from "next/image";
import Link from "next/link";

/**
 * Section « Un réseau ancré sur le territoire ».
 * Gauche : panneau rose (plein-bord à gauche) + carte de France (fraance.svg,
 * fond transparent) posée par-dessus et débordant légèrement du panneau.
 * Droite : titre + paragraphe + bouton.
 */
export default function Territoire() {
    return (
        <section className="relative mb-16 w-full overflow-hidden bg-[#FAF7F2] lg:mb-12">

            {/* Panneau rose pleine hauteur (déborde du bord gauche) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[38%] h-180 mt-12 rounded-r-[60px] bg-[#FF6B8B]" />

            <div className="relative ml-10 z-10 mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">

                {/* Carte — chevauche la limite rose / crème */}
                <div className="flex justify-end">
                    <Image
                        src="/images/fraance.svg"
                        width={693}
                        height={693}
                        alt="Carte des campus Lamarr en France"
                        className="w-full max-w-[620px]"
                    />
                </div>

                {/* Texte */}
                <div className="flex max-w-[640px] flex-col gap-4.5">
                    <h2 className="font-unbounded text-[46px] font-extrabold leading-[1.1] lg:text-3xl whitespace-nowrap">
                        Un réseau ancré sur le <span className="text-primary-500">territoire</span>
                    </h2>
                    <p className="text-lg leading-[1.5] text-ink/80">
                        L'école déploie ses campus au cœur des grandes métropoles numériques françaises, garantissant une proximité immédiate avec les bassins d'emploi régionaux et les écosystèmes d'innovation locaux.
                    </p>
                    <Link
                        href="#"
                        className="mt-2 self-start rounded-[32px] bg-ink px-6 py-4 text-lg text-white transition hover:bg-ink-600"
                    >
                        Prendre contact
                    </Link>
                </div>

            </div>
        </section>
    );
}
