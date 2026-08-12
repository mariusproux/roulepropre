import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CGU = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pb-16 pt-28 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">
            Conditions Générales d'Utilisation
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Article 1 - Objet</h2>
              <p>
                Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation 
                du site internet <em>roulepropre.fr</em> ainsi que les services proposés par l'entreprise Roule Propre.
              </p>
              <p>
                Le site présente les services de nettoyage automobile et d'entretien de véhicules légers proposés par Roule Propre.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Article 2 - Acceptation des CGU</h2>
              <p>
                L'utilisation du site <em>roulepropre.fr</em> implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. 
                Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, sans préavis, 
                aussi les utilisateurs du site sont invités à les consulter de manière régulière.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Article 3 - Accès au site</h2>
              <p>
                Le site <em>roulepropre.fr</em> est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, intervention programmée de maintenance, 
                panne informatique ou de télécommunication.
              </p>
              <p>
                Roule Propre ne pourra être tenue responsable de dommages de toute nature, tant matériels qu'immatériels ou corporels, 
                qui pourraient résulter d'une indisponibilité du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Article 4 - Propriété intellectuelle</h2>
              <p>
                La structure générale du site <em>roulepropre.fr</em>, ainsi que les textes, graphiques, images, sons et vidéos la composant, 
                sont la propriété de l'éditeur ou de ses partenaires. Toute représentation totale ou partielle de ce site par quelque procédé 
                que ce soit, sans l'autorisation expresse de l'exploitant du site Internet constituerait une contrefaçon sanctionnée par 
                les articles L 335-2 et suivants du Code de la propriété intellectuelle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Article 5 - Responsabilité de l'utilisateur</h2>
              <p>
                L'utilisateur s'engage à utiliser le site de manière loyale et à ne pas porter atteinte à l'ordre public et aux bonnes mœurs. 
                Il s'interdit notamment de :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Utiliser le site à des fins illégales ou non autorisées</li>
                <li>Tenter d'accéder de manière non autorisée au site, aux serveurs ou aux réseaux</li>
                <li>Transmettre des virus ou tout autre code malveillant</li>
                <li>Violer les droits de propriété intellectuelle</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Article 6 - Limitation de responsabilité</h2>
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
                mais peut toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p>
                Roule Propre ne pourra être tenue responsable de dommages matériels liés à l'utilisation du site. 
                De plus, l'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus 
                et avec un navigateur de dernière génération mis-à-jour.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Article 7 - Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. 
                Les liens vers ces autres ressources vous font quitter le site <em>roulepropre.fr</em>.
              </p>
              <p>
                Il est possible de créer un lien vers les pages de ce site sans autorisation expresse de l'éditeur. 
                Aucune autorisation ou demande d'information préalable ne peut être exigée par l'éditeur à l'égard d'un site 
                qui souhaite établir un lien vers le site de l'éditeur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Article 8 - Collecte et protection des données</h2>
              <p>
                Conformément aux dispositions de la loi n° 78-17 du 6 janvier 1978 modifiée, l'utilisateur dispose d'un droit d'accès, 
                de modification et de suppression des informations collectées. Pour plus d'informations sur la collecte et le traitement 
                des données, consultez notre <Link to="/politique-de-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Article 9 - Droit applicable et juridiction compétente</h2>
              <p>
                La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, 
                seuls les tribunaux français dans le ressort de la Cour d'appel de Rennes sont compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Article 10 - Contact</h2>
              <p>
                Pour toute question relative aux présentes CGU, vous pouvez nous contacter à l'adresse : roule.propre44@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CGU;