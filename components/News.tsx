import Image from "next/image";

/**
 * Section « Actualités & vie de campus » (fond sombre).
 * Gauche : une grande carte en avant. Droite : 3 cartes horizontales.
 *
 * Assets (public/images) :
 *  - Article1.svg : image Sora (grande carte)
 *  - Article4.svg : image Data/IA
 *  - Article.svg  : carte Git DÉJÀ complète (image + badge + titre + lien)
 *  - Article2.svg : image soirée Toulouse
 */

const Badge = () => (
    <span className="inline-block w-fit rounded-md bg-primary-500 px-2.5 py-1 text-sm font-medium text-white">
        Actualités
    </span>
);

const ReadMore = () => (
    <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-500 transition hover:gap-2.5">
        Lire la suite
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    </a>
);

// Petites cartes construites en code (image + texte)
const smallCards = [
    { img: "/images/Article4.svg", w: 207, h: 173, title: "Prépare-toi aux métiers de la Data et de l'IA avec Lamarr" },
    { img: "/images/ArticleGit.png", w: 250, h: 200, title: "Pourquoi Git garde la mémoire de toutes les erreurs ?" },
    { img: "/images/Article2.svg", w: 207, h: 173, title: "Une soirée mémorable à Toulouse" },
];

export default function News() {
    return (
        <section className="w-full bg-ink">
            <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10">

                {/* Titre */}
                <h2 className="mb-10 font-unbounded text-[32px] font-extrabold leading-tight">
                    <span className="text-white">Actualités &amp; vie de </span>
                    <span className="text-primary-500">campus</span>
                </h2>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

                    {/* Grande carte */}
                    <article className="flex flex-col gap-4 rounded-[24px] bg-white p-5">
                        <div className="overflow-hidden rounded-[16px]">
                            <Image src="/images/Article1.svg" width={608} height={451} alt="Sora" className="h-auto w-full" />
                        </div>
                        <Badge />
                        <h3 className="text-2xl font-medium text-ink">Sora n'a pas survécu à son propre succès</h3>
                        <p className="text-base leading-[1.5] text-ink/60">
                            En septembre 2025, OpenAI lance Sora avec de grosses ambitions : révolutionner la création vidéo grâce à l'IA. À peine six mois plus tard, l…
                        </p>
                        <ReadMore />
                    </article>

                    {/* Colonne droite */}
                    <div className="flex flex-col gap-6">
                        {smallCards.map((card) => (
                            <article key={card.title} className="flex items-center gap-5 rounded-[24px] bg-white p-4">
                                <Image src={card.img} width={card.w} height={card.h} alt="" className="h-[150px] w-[180px] shrink-0 rounded-[14px] object-cover" />
                                <div className="flex flex-1 min-w-0 flex-col gap-3">
                                    <Badge />
                                    <h3 className="text-xl font-medium leading-snug text-ink">{card.title}</h3>
                                    <ReadMore />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
