import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">
            Mentions Légales
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Informations sur l'entreprise</h2>
              <div className="space-y-2">
                <p><strong>Dénomination sociale :</strong> Roule Propre</p>
                <p><strong>Propriétaire :</strong> Monsieur Arthur Godin</p>
                <p><strong>Forme juridique :</strong> Entrepreneur Individuel</p>
                <p><strong>Adresse du siège social :</strong><br />
                36 Avenue de Nantes Le Clos des Vignes A24<br />
                44140 Aigrefeuille-sur-Maine<br />
                France</p>
                <p><strong>SIREN :</strong> 983 910 043</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Contact</h2>
              <div className="space-y-2">
                <p><strong>Email :</strong> [adresse email]</p>
                <p><strong>Téléphone :</strong> [numéro de téléphone]</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Hébergement du site</h2>
              <p>[Nom de l'hébergeur + coordonnées]</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Responsabilité</h2>
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, 
                mais peut toutefois contenir des inexactitudes ou des omissions. Si vous constatez une lacune, erreur ou ce qui parait être un 
                dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse [adresse email], en décrivant le problème de la façon 
                la plus précise possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Droit applicable</h2>
              <p>
                Tout litige en relation avec l'utilisation du site <em>roule-propre.fr</em> est soumis au droit français. 
                Il est fait attribution exclusive de juridiction aux tribunaux compétents de Nantes.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;