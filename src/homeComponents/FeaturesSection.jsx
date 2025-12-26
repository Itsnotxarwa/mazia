import BgImage from "../assets/bg.png";
import LogoSahpe from "../assets/image2.png";
import features from "../data/Features";


export default function FeaturesSection() {

    return(
        <section className="relative py-24 min-h-screen overflow-hidden">
            <img
            src={BgImage}
            className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="space-y-6">
                        <img src={LogoSahpe} className="w-14" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white md:leading-14">
                            Fonctionnalités 
                            <br />
                            clés de Mazia
                        </h2>
                    </div>
                    <div className="space-y-4">
                        <p className="text-white/80 text-sm leading-relaxed max-w-sm">Mazia combine l’intelligence vocale, la compréhension du langage naturel et des flux conversationnels optimisés pour gérer tous vos appels.</p>
                        <div className="flex justify-start">
                        <a href="/demo" className="group flex items-center justify-center gap-2 bg-[#032CA6] hover:bg-[#032CA6]/80 text-white px-6 py-2 font-medium transition-all text-sm cursor-pointer">
                            Essayez Mazia gratuitement
                        </a>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-24">
                    {features.map((item,i) => {
                        const Icon = item.icon;
                        return(
                            <div
                            key={i}
                            className="bg-[#032CA6] flex flex-col justify-center h-60 rounded-lg text-white 
                            px-4 space-y-4">
                                <div className="flex justify-center">
                                    <Icon size={44} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg text-center">{item.title}</h3>
                                    <p className="text-center text-white/80 mt-2">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}