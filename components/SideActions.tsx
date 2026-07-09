import Link from "next/link";

export default function SideActions() {
    return (
        < div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1" >

            {/* Télécharger */}
            <Link
                href="docs/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Télécharger la brochure"
                className="group flex items-center justify-center w-14 h-14 bg-primary-500 text-white rounded-tl-2xl pl-1 hover:bg-primary-600 transition"
                title="Télécharger la brochure"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
            </Link>

            {/* Portes ouvertes */}
            <Link
                href="#"
                aria-label="Portes ouvertes"
                className="flex items-center justify-center w-14 h-14 bg-primary-500 text-white rounded-tl-2xl pl-1 hover:bg-primary-600 transition"
                title="Portes ouvertes"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </Link>

            {/* Candidater */}
            <Link
                href="#"
                aria-label="Candidater"
                className="flex items-center justify-center w-14 h-14 bg-primary-500 text-white rounded-tl-2xl pl-1 hover:bg-primary-600 transition"
                title="Candidater"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            </Link>
        </div >
    );
}   