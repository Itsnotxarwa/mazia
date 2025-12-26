import {  PhoneIncoming, PhoneOutgoing, FileText, ChevronRight } from "lucide-react";

const features = [
    {
        title: "Appels entrants",
        description: "Support client, informations, prise de rendez-vous",
        icon: PhoneIncoming
    },
    {
        title: "Appels sortants",
        description: "Qualification de prospects, relances, notifications automatiques",
        icon: PhoneOutgoing
    },
    {
        title: "Transcriptions et rapports",
        description: "Chaque interaction est enregistrée et analysée pour améliorer vos proessus",
        icon: FileText
    },
    {
        title: "Personnalisation",
        description: "Scripts et flux adaptables à votre activité et à vos clients",
        icon: ChevronRight 
    }
]
export default features;
