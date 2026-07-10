import Image from "next/image";
import Link from "next/link";

/**
 * Bande « filières » : des polaroïds suspendus à une ficelle ondulée.
 *
 * Chaque image (public/images) est un SVG complet : étiquette colorée, cadre,
 * photo ET libellé sont déjà intégrés. On les place simplement le long de la ficelle.
 *
 * Ordre gauche → droite (couleurs d'étiquette) : vert, cyan, rose, violet, jaune.
 */
const cards = [
    { src: "/images/Hero4v3.svg", width: 312, height: 320, label: "Ingénierie Logicielle & Développement", cx: 200, top: 48 },
    { src: "/images/Hero5.svg", width: 294, height: 314, label: "Technologies Génératives & Data Science", cx: 500, top: 96 },
    { src: "/images/Hero1.svg", width: 274, height: 283, label: "Direction Stratégique & Innovation", cx: 800, top: 120 },
    { src: "/images/Hero2.svg", width: 294, height: 302, label: "Infrastructures & Cybersécurité", cx: 1100, top: 96 },
    { src: "/images/Hero3.svg", width: 273, height: 331, label: "UX/UI Design & Direction Artistique", cx: 1400, top: 52 },
];

export default function Hero() {
    return (
        <section className="w-full">
            <div className="max-w-[1289px] mx-auto px-6 pt-20 pb-2 flex flex-col items-center text-center gap-6">

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
                    <Link href="/en-construction" className="px-8 py-3 rounded-[32px] text-lg bg-ink text-white hover:bg-ink-600 transition">
                        Consulter les programmes de formation
                    </Link>
                    <Link href="/en-construction" className="px-8 py-3 rounded-[32px] text-lg border border-ink text-ink hover:bg-ink hover:text-white transition">
                        Prendre rendez-vous avec un conseiller
                    </Link>
                </div>

            </div>

            {/* Bande de filières */}
            <div className="w-full overflow-hidden bg-[#FAF7F2]">
                <div className="flex justify-center">
                    <div className="relative h-[470px] w-[1600px] shrink-0">

                        {/* Ficelle ondulée qui relie les étiquettes */}
                        <svg
                            className="absolute inset-0 z-0 h-full w-full"
                            viewBox="0 0 1600 470"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M -40 25 C 500 175, 1100 175, 1680 25"
                                stroke="#C9C2D6"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* Cartes — SVG complets (étiquette + photo + libellé déjà intégrés) */}
                        {cards.map((c) => (
                            <div
                                key={c.src}
                                className="absolute z-10 -translate-x-1/2"
                                style={{ left: c.cx, top: c.top, width: c.width }}
                            >
                                <Image
                                    src={c.src}
                                    width={c.width}
                                    height={c.height}
                                    alt={c.label}
                                    priority
                                    className="h-auto w-full drop-shadow-[0_18px_30px_rgba(24,7,51,0.10)]"
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}
