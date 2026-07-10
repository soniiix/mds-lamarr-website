import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideActions from "@/components/SideActions";
import Accordion from "@/components/Accordion";

const navItems = [
    { label: "Présentation", href: "#presentation" },
    { label: "Admission", href: "#admission" },
    { label: "Programme", href: "#programme" },
    { label: "Débouchés & poursuites d'études", href: "#debouches" },
    { label: "Où suivre cette formation ?", href: "#ou-suivre" },
    { label: "FAQ", href: "#faq" },
];

const atouts = [
    "Alternance sur les deux années",
    "Une pédagogie orientée projet",
    "Des formateurs issus du monde professionnels",
    "Un diplôme professionnalisant",
];

const admissionItems = [
    { q: "Modalités d'admission", a: "L'admission se fait sur dossier puis entretien de motivation, sans concours écrit." },
    { q: "Financement & prise en charge", a: "En alternance, les frais de formation sont pris en charge par l'entreprise d'accueil et l'OPCO." },
    { q: "Infos pratiques complémentaires", a: "Rentrée en septembre, places limitées : contacte l'équipe admissions pour les prochaines sessions." },
];

const programmeItems = [
    { q: "Une formation professionnalisante sur 2 ans", a: "Deux années rythmées par des projets concrets et une immersion progressive en entreprise." },
    { q: "UX research & conception centrée utilisateur", a: "Recherche utilisateur, personas, parcours et tests d'utilisabilité pour concevoir des produits pertinents." },
    { q: "UI design & interfaces digitales", a: "Design d'interfaces, design systems et prototypage sur Figma." },
    { q: "Ergonomie, accessibilité & expérience utilisateur", a: "Principes d'ergonomie, accessibilité (RGAA/WCAG) et optimisation de l'expérience." },
    { q: "Gestion de projet UX/UI", a: "Cadrage, méthodes agiles et pilotage de projets UX/UI en équipe." },
];

const metiers = ["UX Writer", "UX Researcher", "UX/UI Manager", "Lead UX Designer", "Concepteur Graphique", "Product Designer"];

const campuses = ["Angers", "Annecy", "Bordeaux", "Caen", "Grenoble", "Lille", "Lyon", "Melun", "Montpellier", "Nancy"];

const faqItems = [
    { q: "Quelles compétences vais-je développer pendant le MBA Lead UX/UI Designer ?", a: "UX research, UI design, prototypage, ergonomie et gestion de projet digital." },
    { q: "Quels types d'entreprises recrutent des alternants en UX/UI ?", a: "Agences digitales, studios de design, startups et directions produit de grands groupes." },
    { q: "La formation est-elle reconnue par l'État ?", a: "Oui, elle prépare à un titre RNCP de niveau 7 reconnu par l'État." },
];

// Petite puce ronde avec check
const Check = () => (
    <svg className="mt-0.5 h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" opacity="0.5" />
        <path d="M8.5 12.5l2.5 2.5 4.5-5" />
    </svg>
);

export default function PresentationPage() {
    return (
        <>
            <Header />

            {/* Bannière */}
            <div className="w-full bg-primary-500 px-6 py-10 text-center">
                <h1 className="font-unbounded text-3xl font-extrabold text-white md:text-4xl">
                    MBA UX/UI Design &amp; Product Design
                </h1>
            </div>

            <main className="w-full bg-[#FAF7F2]">
                <div className="mx-auto max-w-[1200px] px-6 py-12 lg:py-16">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">

                        {/* Sidebar */}
                        <aside className="flex flex-col gap-6 lg:sticky lg:top-6 lg:self-start">
                            <nav className="flex flex-col gap-2">
                                {navItems.map((item, i) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className={`rounded-lg px-4 py-3 text-sm transition ${
                                            i === 0
                                                ? "bg-ink text-white"
                                                : "bg-primary-500/10 text-ink hover:bg-primary-500/20"
                                        }`}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                            <div className="flex flex-col gap-3">
                                <a href="#" className="rounded-full bg-ink px-6 py-3 text-center text-white transition hover:bg-ink-600">Candidater</a>
                                <a href="#" className="rounded-full bg-primary-500 px-6 py-3 text-center text-white transition hover:bg-primary-600">Télécharger la brochure</a>
                                <a href="#" className="rounded-full border border-ink px-6 py-3 text-center text-ink transition hover:bg-ink hover:text-white">Portes ouvertes</a>
                            </div>
                        </aside>

                        {/* Contenu */}
                        <div className="flex flex-col gap-16">

                            {/* Présentation */}
                            <section id="presentation" className="flex scroll-mt-24 flex-col gap-6">
                                <h2 className="text-center font-unbounded text-2xl font-extrabold text-primary-500">Présentation</h2>

                                <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
                                    <div className="flex flex-col gap-4 rounded-2xl bg-ink p-6 text-white">
                                        <p className="text-sm leading-relaxed text-white/90">
                                            Le MBA Lead UX/UI Designer (Bac+5) t'apporte en 2 ans un socle solide en expérience utilisateur, design d'interface, ergonomie, conception centrée utilisateur et pilotage de projets UX/UI. À travers des projets concrets et une immersion en entreprise, tu développes une expertise avancée pour concevoir des interfaces digitales efficaces.
                                        </p>
                                        <a href="#" className="rounded-full bg-primary-500 py-3 text-center text-sm text-white transition hover:bg-primary-600">Télécharger la brochure</a>
                                        <a href="#" className="rounded-full border border-white/30 py-3 text-center text-sm text-white transition hover:bg-white/10">Portes ouvertes</a>
                                    </div>
                                    <div className="flex flex-col justify-center gap-4 rounded-2xl bg-primary-500 p-6 text-white">
                                        <div className="flex items-start gap-3 text-sm"><Check />Pré-requis : Bac + 3</div>
                                        <div className="flex items-start gap-3 text-sm"><Check />Alternance possible</div>
                                    </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-[2fr_3fr]">
                                    <div className="flex flex-col justify-center gap-4 rounded-2xl bg-primary-500 p-6 text-white">
                                        {atouts.map((a) => (
                                            <div key={a} className="flex items-start gap-3 text-sm">
                                                <Check />
                                                {a}
                                            </div>
                                        ))}
                                    </div>
                                    <Image src="/images/presentation.svg" width={681} height={438} alt="Étudiants en atelier UX/UI" className="h-full w-full rounded-2xl object-cover" />
                                </div>
                            </section>

                            {/* Admission */}
                            <section id="admission" className="flex scroll-mt-24 flex-col gap-5">
                                <h2 className="font-unbounded text-2xl font-extrabold text-ink">Admission</h2>
                                <p className="text-ink/70">
                                    Intègre le MBA Lead UX/UI Designer en toute simplicité. Découvre les conditions d'admission, le calendrier d'inscription et les solutions pour financer ta formation.
                                </p>
                                <Accordion items={admissionItems} />
                            </section>

                            {/* Programme */}
                            <section id="programme" className="flex scroll-mt-24 flex-col gap-6">
                                <div className="flex flex-col gap-5 rounded-3xl bg-primary-500 p-6 text-white md:p-10">
                                    <h2 className="font-unbounded text-2xl font-extrabold">Programme</h2>
                                    <p className="text-white/90">
                                        Une formation professionnalisante sur 2 ans, mêlant UX research, UI design, conception d'interfaces, ergonomie et pilotage de projets UX/UI, avec une forte mise en pratique.
                                    </p>
                                    <Accordion items={programmeItems} />
                                </div>
                                <Image src="/images/programme.svg" width={1051} height={763} alt="Conception d'interface sur papier" className="w-full rounded-3xl" />
                            </section>

                            {/* Débouchés */}
                            <section id="debouches" className="scroll-mt-24">
                                <div className="flex flex-col gap-5 rounded-3xl bg-primary-500 p-6 text-white md:p-10">
                                    <h2 className="font-unbounded text-2xl font-extrabold">Débouchés &amp; poursuites d'études</h2>
                                    <p className="text-white/90">
                                        À l'issue de la formation, tu peux accéder à des postes tels que UX designer, UI designer, Product designer, Lead UX/UI, Designer d'interfaces digitales ou Consultant UX.
                                    </p>
                                    <p className="font-semibold">Métiers accessibles après ce MBA :</p>
                                    <div className="flex flex-wrap gap-3">
                                        {metiers.map((m) => (
                                            <span key={m} className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-ink">{m}</span>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Où suivre */}
                            <section id="ou-suivre" className="flex scroll-mt-24 flex-col items-center gap-6 text-center">
                                <div className="flex w-full flex-col items-center gap-4">
                                    <h2 className="font-unbounded text-2xl font-extrabold text-ink">Où suivre cette formation ?</h2>
                                    <p className="text-ink/70">Le MBA Lead UX/UI Designer est proposé sur plusieurs campus MyDigitalSchool.</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {campuses.map((c) => (
                                            <span key={c} className="rounded-md border border-ink/15 px-3 py-1.5 text-sm text-ink">{c}</span>
                                        ))}
                                    </div>
                                </div>
                                <Image src="/images/fraance.svg" width={693} height={693} alt="Carte des campus MyDigitalSchool en France" className="w-full max-w-[460px]" />
                            </section>

                            {/* FAQ */}
                            <section id="faq" className="flex scroll-mt-24 flex-col gap-5">
                                <h2 className="font-unbounded text-2xl font-extrabold leading-tight text-ink">
                                    Tu te poses la question ?<br />On a la réponse !
                                </h2>
                                <p className="text-ink/70">Trouve des réponses à tes questions ou contacte-nous : nous sommes là pour t'aider.</p>
                                <Accordion items={faqItems} variant="line" />
                            </section>

                        </div>
                    </div>
                </div>
            </main>

            <SideActions />
            <Footer />
        </>
    );
}
