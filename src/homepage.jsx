import Footer from "./Footer";
import Header from "./Header";
import UsageExamples from "./homeComponents/UsageExamples";
import BenefitsSection from "./homeComponents/BenefitsSection";
import FeaturesSection from "./homeComponents/FeaturesSection";
import HeroSection from "./homeComponents/heroSection";
import { Slide } from "react-awesome-reveal";

export default function Homepage() {
    return(
        <div className="min-h-screen bg-white text-black overflow-hidden">
            <Header />
            <HeroSection />
            <BenefitsSection />
            <Slide triggerOnce direction="up" duration={1000} delay={200}>
            <FeaturesSection />
            </Slide>
            <UsageExamples />
            <Footer />
        </div>
    )
}