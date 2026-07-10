import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full">
            <nav className="mx-auto px-6 lg:px-10 pt-6 flex items-center justify-center gap-24">
                <Link href="/" className="flex-shrink-0">
                    <img src="/lamarr-logo.png" alt="Lamarr" className="h-7 w-auto" />
                </Link>

                <div className="hidden xl:flex items-center gap-8">
                    <Link href="/" className="text-[18px] leading-6 tracking-normal font-normal text-primary-500">Accueil</Link>
                    <Link href="presentation" className="text-[18px] leading-6 tracking-normal font-normal text-ink hover:text-primary-500 transition">Formations</Link>
                    <Link href="#" className="text-[18px] leading-6 tracking-normal font-normal text-ink hover:text-primary-500 transition">Alternance</Link>
                    <Link href="#" className="text-[18px] leading-6 tracking-normal font-normal text-ink hover:text-primary-500 transition">Admissions</Link>
                    <Link href="#" className="text-[18px] leading-6 tracking-normal font-normal text-ink hover:text-primary-500 transition">À propos de l'école</Link>
                    <Link href="#" className="text-[18px] leading-6 tracking-normal font-normal text-ink hover:text-primary-500 transition">Contact</Link>
                </div>

                <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
                    <Link href="#" className="px-4 py-2.5 rounded-[32px] text-[18px] leading-6 bg-primary-500 text-white hover:bg-primary-600 transition">
                        Portes ouvertes
                    </Link>
                    <Link href="#" className="px-4 py-2.5 rounded-[32px] text-[18px] leading-6 border border-primary-500 hover:bg-primary-500 hover:text-white transition duration-300">
                        Candidater
                    </Link>
                </div>

                <button id="burger" className="xl:hidden text-ink" aria-label="Menu">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>
        </header>
    );
}