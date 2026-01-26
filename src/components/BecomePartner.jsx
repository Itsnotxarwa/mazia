import Header from "../Header";
import BenefitsForPartners from "./becomePartnerComponents/benefitsForPartners";
import Hero from "./becomePartnerComponents/hero";
import PartnerProfile from "./becomePartnerComponents/partnerProfile";

export default function BecomePartner() {
    return(
        <div>
            <Header />
            <Hero />
            <BenefitsForPartners />
            <PartnerProfile />
        </div>
    )
}