import Link from "next/link";

export default function UnderConstruction() {
    return (
        <main className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-16 text-center">

            <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 border border-ink-100 rounded-[99px] px-[18px] py-2 mb-1">
                    <img src="/lamarr-favicon.png" alt="Lamarr" className="h-5 w-auto mt-0.5" />
                    <span className="text-[18px] text-ink">Page en construction</span>
                </div>

                {/* Titre */}
                <h1 className="font-unbounded font-extrabold uppercase text-4xl md:text-5xl lg:text-6xl leading-[1.05] whitespace-nowrap">
                    <span className="text-ink">Bientôt </span>
                    <span className="text-primary-500">disponible</span>
                </h1>

                {/* Paragraphe */}
                <p className="text-lg text-ink/80 max-w-2xl leading-relaxed">
                    Cette page est en cours de construction. Nos équipes travaillent
                    activement pour vous offrir la meilleure expérience. Revenez très
                    prochainement pour la découvrir.
                </p>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                    <Link
                        href="/"
                        className="bg-ink text-white px-8 py-3.5 rounded-full hover:bg-ink/95 transition"
                    >
                        Retour à l'accueil
                    </Link>
                </div>

            </div>
        </main>
    );
}
