import Header from "../Header";
import BenefitsForPartners from "./becomePartnerComponents/benefitsForPartners";
import Hero from "./becomePartnerComponents/hero";
import HowItWorks from "./becomePartnerComponents/HowItWorks";
import PartnerProfile from "./becomePartnerComponents/partnerProfile";
import UseCases from "./becomePartnerComponents/useCases";

export default function BecomePartner() {
    return(
        <div>
            <Header />
            <Hero />
            <BenefitsForPartners />
            <PartnerProfile />
            <HowItWorks />
            <UseCases />
        </div>
    )
}