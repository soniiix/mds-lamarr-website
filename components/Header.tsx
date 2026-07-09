export default function Header() {
    return (
        <header className="w-full">
            <nav className="mx-auto px-6 lg:px-10 py-6 flex items-center justify-between gap-12">
                <a href="#" className="flex-shrink-0">
                    <img src="/lamarr-logo.png" alt="Lamarr" className="h-7 w-auto" />
                </a>

                <div className="hidden xl:flex items-center gap-8">
                    <a href="#" className="text-[18px] leading-6 tracking-normal font-normal text-primary-500">Accueil</a>
                    <a href="#" className="text-[18px] leading-6 tracking-normal font-normal text-ink hover:text-primary-500 transition">Formations</a>
                    <a href="#" className="text-[18px] leading-6 tracking-normal font-normal text-ink hover:text-primary-500 transition">Alternance</a>
                    <a href="#" className="text-[18px] leading-6 tracking-normal font-normal text-ink hover:text-primary-500 transition">Admissions</a>
                    <a href="#" className="text-[18px] leading-6 tracking-normal font-normal text-ink hover:text-primary-500 transition">À propos de l'école</a>
                    <a href="#" className="text-[18px] leading-6 tracking-normal font-normal text-ink hover:text-primary-500 transition">Contact</a>
                </div>

                <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                    <a href="#" className="px-4 py-2.5 rounded-[32px] text-[18px] leading-6 font-medium bg-primary-500 text-white hover:bg-primary-600 transition">
                        Portes ouvertes
                    </a>
                    <a href="#" className="px-4 py-2.5 rounded-[32px] text-[18px] leading-6 font-medium border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition">
                        Candidater
                    </a>
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