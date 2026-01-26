import ImageOne from "../assets/image1.jpg";
import ImageTwo from "../assets/image2.jpg";
import ShakeHands from "../assets/shakehands.jpg";

export default function PartnerProfile() {
    const profils = [
        {
            image: ImageOne,
            title: "Fournisseurs technologiques ",
            description: " intégrateurs, éditeurs de logiciels, sociétés de services IT qui souhaitent enrichir leur catalogue avec une solution IA avancée."
        },
        {
            image: ImageTwo,
            title: "Consultants et experts métiers",
            description: "coachs, formateurs, agences spécialisées en optimisation commerciale et support client. "
        },
        {
            image: ShakeHands,
            title: "Professionnels indépendants",
            description: "offrant des services B2B et désireux de proposer une valeur ajoutée innovante à leurs clients existants. "
        }
    ]
    return(
        <section className="min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <h3 className="text-4xl font-bold text-center text-blue-900">
                    Cette opportunité s’adresse à différents profils de partenaires : 
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 h-60">
                    {profils.map((item,i) => (
                        <div
                        key={i}
                        className="flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-2xl
                        hover:shadow-2xl transition-all duration-300 relative group border border-[#032ca6]/5">
                            <div className="absolute inset-0 bg-linear-to-br from-[#032ca6]/5 to-white backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100"></div>
                            <div className="relative flex justify-center items-center z-10">
                                <div className="w-20 h-20 bg-[#032ca6]/10 rounded-full absolute z-0 "></div>
                                <img src={item.image} className="w-40 relative z-10" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold tracking-tight text-blue-900 text-center px-6">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-center px-6 mt-6">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}