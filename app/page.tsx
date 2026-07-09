import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SideActions from "@/components/SideActions";

export default function Home() {
    return (
        <main className="h-400">
            <Header />
            <Hero />
            <SideActions />
        </main>
    );
}
