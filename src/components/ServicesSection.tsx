import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const services = [{
  title: "Nettoyage Intérieur Complet",
  description: "Redonnez vie à l'habitacle de votre voiture avec notre nettoyage intérieur complet, incluant sièges, tableaux de bord et espaces difficiles d'accès.",
  icon: "🧹"
}, {
  title: "Nettoyage Extérieur Haut de Gamme",
  description: "Une brillance incomparable grâce à nos techniques avancées et produits premium pour une finition éclatante.",
  icon: "💦"
}, {
  title: "Formule Express",
  description: "Un nettoyage rapide mais efficace pour redonner de l'éclat à votre véhicule en un temps record.",
  icon: "⚡"
}, {
  title: "Décontamination et Lustrage",
  description: "Éliminez les contaminants invisibles et restaurez la brillance d'origine de votre peinture.",
  icon: "✨"
}, {
  title: "Service à Domicile / Bureau",
  description: "Nous venons à vous ! Profitez de nos services sans vous déplacer, où que vous soyez.",
  icon: "🏠"
}];
const ServicesSection = () => {
  return <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-gray-900">Nos Services </h2>
          <p className="text-gray-600 text-lg">Découvrez nos services de nettoyage automobile adaptés à tous les besoins et tous les véhicules</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => <Card key={index} className="card-hover bg-card-gradient border-none shadow-md overflow-hidden">
              <CardHeader className="pb-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;