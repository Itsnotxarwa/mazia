import { ArrowUpRight, ArrowRight, ChevronDown } from "lucide-react";
import mazLogo from "./assets/image.png"
export default function Header() {

    return(
        <header className="sticky top-0 z-50 border-b border-black/10 backdrop-blur-xl bg-white/80">
            <div className="mx-auto px-4">
                <div className="flex justify-around items-center py-4">
                    <div>
                        <img src={mazLogo} alt="Logo" className="w-24" />
                    </div>

                    <div>
                        <nav>
                            <ul className="flex list-none items-center justify-center gap-6">
                                <li className="">
                                    <a href="" className="relative flex items-center justify-center gap-1 
                                    leading-6 font-medium text-lg">
                                        <span>Accueil</span>
                                        <ChevronDown size={24} />
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="relative flex items-center justify-center gap-1 
                                    leading-6 font-medium text-lg">
                                        <span>Fonctionnalités</span>
                                        <ChevronDown size={24} />
                                    </a>
                                </li>
                                <li className="">
                                    <a href="" className="relative flex items-center justify-center gap-1 
                                    leading-6 font-medium text-lg">
                                        <span>Cas d'usage</span>
                                        <ChevronDown size={24} />
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="
                                    leading-6 font-medium text-lg">
                                        <span>Tarifs</span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="" className="relative flex items-center justify-center gap-1 
                                    leading-6 font-medium text-lg">
                                        <span>Il nous ont fait confiane</span>
                                        <ChevronDown size={24} />
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="
                                    leading-6 font-medium text-lg">
                                        <span>Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                
                    <div className="flex items-center space-x-4">
                                <a 
                                className="group relative text-sm font-medium h-9 text-white whitespace-nowrap rounded-lg 
                                bg-[#032CA6] px-4 py-2 
                                transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                                >
                                    <ul className="h-6 relative overflow-hidden">
                                        <li className="flex items-center transform transition-transform duration-300 group-hover:-translate-y-full">
                                            Essayez Mazia gratuitement <ArrowUpRight size={18} />
                                        </li>
                                        <li className="flex items-center transform transition-transform duration-300 translate-y-0 group-hover:-translate-y-full">
                                            Essayez Mazia gratuitement <ArrowRight size={18} />
                                        </li>
                                    </ul>
                                </a>
                    </div>

                </div>
            </div>
        </header>
    )
}