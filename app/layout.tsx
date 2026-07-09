import type { Metadata } from "next";
import { Outfit, Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
    variable: "--font-unbounded",
    subsets: ["latin"],
});

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Lamarr - L'école des métiers du numérique",
    description: "L'école des métiers du numérique",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="fr"
            className={`${unbounded.variable} ${outfit.variable} h-full antialiased`}
        >
            <body className="min-h-full w-full flex flex-col text-ink bg-[#FAF7F2] selection:text-white selection:bg-primary-500">{children}</body>
        </html>
    );
}
