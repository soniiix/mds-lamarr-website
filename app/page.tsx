import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SideActions from "@/components/SideActions";
import SocialProof from "@/components/SocialProof";
import StudyPrograms from "@/components/StudyPrograms/StudyPrograms";

export default function Home() {
    return (
        <main className="h-400">
            <Header />
            <Hero />
            <SideActions />
            <StudyPrograms />
            <SocialProof />
        </main>
    );
}
