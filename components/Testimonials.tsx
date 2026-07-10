import Image from "next/image";

/**
 * Section « Validé par le marché » : 4 témoignages d'étudiants.
 * Avatars : public/images/composant1..4 (anneau coloré ajouté en CSS).
 */
const testimonials = [
    {
        avatar: "/images/Container.svg",
        name: "Frida Pakou Ossacre",
        role: "Bachelor Informatique",
        color: "#be33ff",
        quote: "Nous collaborons beaucoup entre étudiants avec une entraide naturelle, créant une super ambiance. Chaque journée est différente : on échange, on confronte les idées et on progresse ensemble, ce qui me motive à m'impliquer pleinement.",
    },
    {
        avatar: "/images/Container2.svg",
        name: "Petruzzellis Maël",
        role: "MBA Direction Artistique Digitale",
        color: "#ea1958",
        quote: "C'est d'ailleurs grâce à MyDigitalSchool Nancy que j'ai pu réaliser ma première expérience en alternance en tant qu'apprenti responsable webmaster, webmarketing, développement digital de l'entreprise (Eco Est Energie) et par la suite avoir d'autres opportunités.",
    },
    {
        avatar: "/images/Container3.svg",
        name: "Camille Clavier",
        role: "UX DESIGN, MBA Lead UX/UI Designer",
        color: "#2ea86a",
        quote: "De plus, j'apprécie le fonctionnement par projets de l'école, qui permet de transformer les connaissances théoriques enseignées en compétences concrètes, utiles dans le monde de l'entreprise.",
    },
    {
        avatar: "/images/Container4.svg",
        name: "Florian Marchand",
        role: "MBA Direction Artistique Digitale",
        color: "#180733",
        quote: "J'ai fait quelques écoles de graphisme et c'est bien chez MyDigitalSchool que je m'y retrouve le plus. Principalement grâce à l'ambiance et le côté convivial qu'offre cette école.",
    },
];

export default function Testimonials() {
    return (
        <section className="w-full">
            <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-20">

                {/* Titre */}
                <h2 className="mb-10 font-unbounded text-[30px] font-extrabold leading-[36px]">
                    Validé par le <span className="text-primary-500">marché</span>
                </h2>

                {/* Cartes */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {testimonials.map((t) => (
                        <article key={t.name} className="flex h-full flex-col gap-6 rounded-2xl bg-white/60 p-6">
                            {/* Avatar (anneau coloré déjà intégré au SVG) */}
                            <Image
                                src={t.avatar}
                                width={110}
                                height={110}
                                alt={t.name}
                                className="h-[92px] w-[92px]"
                            />

                            {/* Citation */}
                            <p className="text-sm leading-[1.6] text-ink/80">“ {t.quote} ”</p>

                            {/* Auteur */}
                            <div className="mt-auto flex flex-col gap-1 border-t border-ink/10 pt-4">
                                <p className="font-bold uppercase" style={{ color: t.color }}>{t.name}</p>
                                <p className="text-xs leading-snug text-ink/60">{t.role}</p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Indicateur de pagination */}
                <div className="mt-8 flex justify-center">
                    <div className="flex h-1.5 w-40 overflow-hidden rounded-full">
                        <div className="w-1/2 bg-primary-500" />
                        <div className="w-1/2 bg-ink" />
                    </div>
                </div>

            </div>
        </section>
    );
}
