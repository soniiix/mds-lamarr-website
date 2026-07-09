import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SideActions from "@/components/SideActions";
import SocialProof from "@/components/SocialProof";
import StudyPrograms from "@/components/StudyPrograms/StudyPrograms";
import Territoire from "@/components/Territoire";
import News from "@/components/News";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="h-400">
            <Header />
            <Hero />
            <SideActions />
            <StudyPrograms />
            <Territoire />
            <News />
            <Faq />
            <Footer />
            <SocialProof />
            <Footer />
        </main>
    );
}
