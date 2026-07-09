import Image from "next/image";

/**
 * Bande « photos » du footer : des polaroïds paysage suspendus à une ficelle.
 *
 * Chaque SVG (public/images/Footer1..5) est complet : étiquette colorée + cadre
 * + photo, déjà inclinés. On les place simplement le long de la courbe.
 *
 * NB : Footer2.svg n'a pas d'étiquette et contient encore un texte placeholder
 * (« 274 × Ajustement 215 ») — à ré-exporter proprement.
 */
const cards = [
    { src: "/images/Footer1.svg", width: 312, height: 320, alt: "Étudiants au campus", cx: 200, top: 50 },
    { src: "/images/Footer2.svg", width: 289, height: 234, alt: "Team spirit My Digital School", cx: 500, top: 100 },
    { src: "/images/Footer3.svg", width: 274, height: 283, alt: "Étudiants en cours", cx: 800, top: 120 },
    { src: "/images/Footer4.svg", width: 294, height: 302, alt: "Espace de travail", cx: 1100, top: 96 },
    { src: "/images/Footer5.svg", width: 311, height: 319, alt: "Groupe d'étudiants", cx: 1400, top: 50 },
];

const columns = [
    {
        title: "À propos de l'école",
        links: ["Nos campus", "Notre actualité", "Nos partenaires", "Nos évènements", "L'Alliance Eduservices"],
    },
    {
        title: "Nos formations",
        links: ["Bac +2", "Bac +3", "Bac +5", "Toutes les formations"],
    },
    {
        title: "Accès rapide",
        links: ["Vie Étudiante", "Processus d'admission", "Financer ses études", "Nos titres et diplômes", "Métiers et débouchés", "Recruter un Apprenti", "FAQ"],
    },
];

const legalLinks = ["Mentions légales", "Plan du site", "Gestion des cookies", "Politique de confidentialité"];

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Bande de photos suspendues */}
            <div className="w-full overflow-hidden bg-[#FAF7F2]">
                <div className="flex justify-center">
                    <div className="relative h-[440px] w-[1600px] shrink-0">

                        {/* Ficelle : une seule courbe lisse */}
                        <svg
                            className="absolute inset-0 z-0 h-full w-full"
                            viewBox="0 0 1600 440"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M -40 27 C 500 172, 1100 172, 1680 27"
                                stroke="#C9C2D6"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* Polaroïds */}
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
                                    alt={c.alt}
                                    className="h-auto w-full drop-shadow-[0_18px_30px_rgba(24,7,51,0.10)]"
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* Boîte du footer */}
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 pb-6">
                <div className="relative overflow-hidden rounded-[40px] bg-ink px-8 sm:px-14 py-12 sm:py-16">
                    {/* formes décoratives discrètes */}
                    <div className="pointer-events-none absolute -right-24 -top-16 h-80 w-80 rounded-full bg-white/[0.03]" />
                    <div className="pointer-events-none absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-white/[0.02]" />

                    <div className="relative z-10 flex flex-col gap-14 lg:flex-row lg:justify-between">
                        {/* Colonne logo + réseaux */}
                        <div className="flex flex-col gap-7">
                            <img src="/images/logoClair.svg" alt="Lamarr - L'humain au cœur du digital" className="h-9 w-auto" />
                            <img src="/images/network.svg" alt="Réseaux sociaux" className="h-7 w-auto" />
                        </div>

                        {/* Colonnes de liens */}
                        <div className="flex flex-col gap-10 sm:flex-row sm:gap-16 lg:gap-20">
                            {columns.map((col) => (
                                <div key={col.title} className="flex flex-col gap-4">
                                    <h3 className="font-unbounded text-lg font-bold text-white">{col.title}</h3>
                                    <ul className="flex flex-col gap-2.5">
                                        {col.links.map((link) => (
                                            <li key={link} className="flex items-center gap-2 text-white/90">
                                                <span className="text-white/50">•</span>
                                                <a href="#" className="underline underline-offset-4 decoration-white/40 transition hover:text-primary-500 hover:decoration-primary-500">
                                                    {link}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Barre copyright */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-[32px] bg-primary-500 px-8 py-4 text-center text-sm text-white">
                    <span className="font-medium font-unbounded">© 2026 Lamarr · Enseignement supérieur privé</span>
                    {legalLinks.map((link) => (
                        <a key={link} href="#" className="font-medium font-unbounded underline underline-offset-4 transition hover:text-ink/90 duration-300">
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
