import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, Droplets, Lightbulb, CircleDot, Truck } from "lucide-react";
const services = [{
  title: "Nettoyage Intérieur Complet",
  description: "Redonnez vie à l'habitacle de votre voiture avec l'aspiration complète de l'habitacle et du coffre, le nettoyage du tableau de bord, des vitreries intérieures et des espaces difficiles d'accès. En plus nous éliminons également les odeurs désagréables.",
  icon: Wind
}, {
  title: "Nettoyage intérieur",
  description: "Aspiration et Shampouinage des sièges, moquettes ou tapis. Éliminez les contaminants visibles ou non sur vos sièges, moquettes ou tapis et remettez-les comme neufs. Que ce soit des sièges tissu, cuir ou alcantara, tout en utilisant les produits adaptés à la surface.",
  icon: Droplets
}, {
  title: "Restauration de phares",
  description: "Vos phares sont ternis, ou opaques ? Ne les changez plus nous les restaurons, vous les retrouverez comme neufs. Ce service vous permettra de retrouver de la visibilité, mais aussi de passer le contrôle technique plus facilement.",
  icon: Lightbulb
}, {
  title: "Nettoyage Jantes",
  description: "Avec cette formule, les jantes alu de votre automobile seront propres.",
  icon: CircleDot
}, {
  title: "Services Mobile",
  description: "Nous venons à vous ! Profitez de nos services sans vous déplacer, où que vous soyez. Sur votre lieu de vie ou votre lieu de travail, que vous soyez particuliers ou professionnels nous sommes là.",
  icon: Truck
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
                <div className="mb-4 flex justify-center">
                  <service.icon className="w-6 h-6" strokeWidth={1.5} style={{ color: '#1E88E5' }} />
                </div>
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