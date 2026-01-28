import Header from "../Header";
import WhyBecomePartner from "./becomePartnerComponents/whyBecomePartner";
import Hero from "./becomePartnerComponents/hero";
import HowItWorks from "./becomePartnerComponents/HowItWorks";
import PartnerProfile from "./becomePartnerComponents/partnerProfile";
import UseCases from "./becomePartnerComponents/useCases";
import BenefitsForPartners from "./becomePartnerComponents/BenefitsForPartners";
import Footer from "../Footer"

export default function BecomePartner() {
    return(
        <div>
            <Header />
            <Hero />
            <WhyBecomePartner />
            <PartnerProfile />
            <HowItWorks />
            <UseCases />
            <BenefitsForPartners />
            <Footer />
        </div>
    )
}