import { Fade } from "react-awesome-reveal";

const useCases = [
  {
    title: "Support et service client",
    description: "Réduction des temps d’attente, réponses instantanées, gestion 24/7 des appels entrants."
  },
  {
    title: "Acquisition et vente",
    description: "Qualification automatique des leads, prise de rendez-vous et suivi commercial sans effort humain."
  },
  {
    title: "Secrétariat et gestion d’appels",
    description: "Réception et gestion des appels, filtrage et orientation vers les bonnes équipes."
  },
  {
    title: "Automatisation des processus métier",
    description: "Intégration à des workflows existants, déclenchement d’actions sur ERP, CRM ou autres systèmes."
  },
  {
    title: "Service interne",
    description: "Organisation des agendas, notifications, rappels et coordination interne."
  },
];

export default function UseCases() {
    return (
<section className="min-h-screen py-24">
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-4">
        <Fade triggerOnce direction="up" duration={800}>
        <div className="flex items-center justify-center mb-4">
            <h3 className="py-1 px-4 border border-blue-950 tracking-tighter text-blue-950 rounded-full">
                Cas d’usage pour vos clients
            </h3>
        </div>
        </Fade>
        <Fade triggerOnce direction="up" duration={800}>
        <p className="text-4xl max-w-5xl mx-auto md:text-5xl text-black font-bold md:leading-14 mb-8 text-center">
            Les partenaires Mazia peuvent proposer des solutions adaptées à différents métiers et besoins :
        </p>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((item, i) => (
            <Fade key={i} direction="up" triggerOnce cascade={false} duration={700}>
              <div className="p-8 bg-white shadow-lg rounded-2xl border border-[#032CA6]/10 hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-black/70 text-lg">{item.description}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
