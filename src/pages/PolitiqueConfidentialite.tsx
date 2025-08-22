import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">
            Politique de Confidentialité
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introduction</h2>
              <p>
                La présente Politique de Confidentialité décrit la façon dont Roule Propre collecte, utilise et protège vos informations 
                personnelles lorsque vous utilisez notre site web <em>roule-propre.fr</em>.
              </p>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, 
                nous nous engageons à protéger la confidentialité de vos données personnelles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données est :
              </p>
              <div className="pl-4">
                <p><strong>Roule Propre</strong><br />
                Monsieur Arthur Godin<br />
                36 Avenue de Nantes Le Clos des Vignes A24<br />
                44140 Aigrefeuille-sur-Maine, France<br />
                Email : [adresse email]</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Données collectées</h2>
              <p>Nous pouvons collecter les types de données suivants :</p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-primary">3.1 Données fournies directement</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale</li>
                <li>Informations relatives à votre demande de service</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-primary">3.2 Données collectées automatiquement</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Adresse IP</li>
                <li>Type de navigateur et version</li>
                <li>Pages visitées et temps passé sur le site</li>
                <li>Données de géolocalisation (si autorisée)</li>
                <li>Cookies et technologies similaires</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Finalités du traitement</h2>
              <p>Vos données personnelles sont utilisées pour :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Traiter vos demandes et répondre à vos questions</li>
                <li>Fournir nos services de nettoyage automobile</li>
                <li>Gérer la relation client et le suivi des prestations</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Respecter nos obligations légales</li>
                <li>Analyser l'utilisation du site (via [Google Analytics / autre service])</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Base légale du traitement</h2>
              <p>Le traitement de vos données personnelles repose sur :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Exécution d'un contrat :</strong> pour fournir les services demandés</li>
                <li><strong>Consentement :</strong> pour l'utilisation de cookies non essentiels et communications marketing</li>
                <li><strong>Intérêt légitime :</strong> pour l'amélioration de nos services et la sécurité du site</li>
                <li><strong>Obligation légale :</strong> pour respecter nos obligations comptables et fiscales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Conservation des données</h2>
              <p>Nous conservons vos données personnelles :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Données client :</strong> pendant la durée de la relation commerciale et 3 ans après</li>
                <li><strong>Données de prospect :</strong> 3 ans à compter du dernier contact</li>
                <li><strong>Données comptables :</strong> 10 ans conformément aux obligations légales</li>
                <li><strong>Cookies :</strong> selon les durées définies dans notre politique cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. Partage des données</h2>
              <p>
                Vos données personnelles ne sont pas vendues, louées ou échangées à des tiers. Elles peuvent être partagées uniquement :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Avec nos prestataires techniques (hébergement, maintenance)</li>
                <li>En cas d'obligation légale ou de demande des autorités compétentes</li>
                <li>Avec votre consentement explicite</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">8. Transferts internationaux</h2>
              <p>
                Certains de nos prestataires peuvent être situés en dehors de l'Union Européenne. Dans ce cas, 
                nous nous assurons que des garanties appropriées sont mises en place pour protéger vos données conformément au RGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">9. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit de retrait du consentement :</strong> retirer votre consentement à tout moment</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à l'adresse : [adresse email]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">10. Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers 
                stockés sur votre appareil qui nous permettent de :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mémoriser vos préférences</li>
                <li>Analyser l'utilisation du site ([Google Analytics / autre service])</li>
                <li>Assurer le bon fonctionnement du site</li>
              </ul>
              <p className="mt-4">
                Vous pouvez gérer vos préférences de cookies en modifiant les paramètres de votre navigateur ou via notre bandeau de cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">11. Sécurité</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles 
                contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">12. Réclamations</h2>
              <p>
                Si vous estimez que le traitement de vos données personnelles constitue une violation de la réglementation, 
                vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
              </p>
              <p className="pl-4">
                CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07<br />
                Téléphone : 01 53 73 22 22<br />
                Site web : <a href="https://www.cnil.fr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">13. Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette Politique de Confidentialité. 
                Toute modification sera publiée sur cette page avec une date de mise à jour.
              </p>
              <p className="mt-4">
                <strong>Dernière mise à jour :</strong> [Date de mise à jour]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">14. Contact</h2>
              <p>
                Pour toute question concernant cette Politique de Confidentialité ou vos données personnelles, 
                contactez-nous à l'adresse : [adresse email]
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;