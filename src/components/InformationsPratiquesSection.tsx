const InformationsPratiquesSection = () => {
  return (
    <section className="section-padding bg-rp-blue/20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Informations pratiques</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 mt-1">•</span>
              <span>Une prise électrique doit être disponible à moins de 30 mètres.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">•</span>
              <span>Un supplément peut être appliqué en cas de salissures importantes (taches incrustées, poils d'animaux, etc.).</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">•</span>
              <span>Le gabarit du véhicule peut entraîner un ajustement tarifaire.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">•</span>
              <span>Frais de déplacement applicables selon la distance.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">•</span>
              <span>Tarifs exonérés de TVA selon l'article 293 B du CGI. Une facture détaillée est remise après chaque intervention.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">•</span>
              <span>Service mobile : intervention sur tout le sud Loire et ses environs, à votre domicile ou votre lieu de travail.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">•</span>
              <span>Produits écologiques : solutions respectueuses des matériaux et de l'environnement.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">•</span>
              <span>Résultat impeccable : intérieur propre, sain et rafraîchi.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">•</span>
              <span>Paiement simplifié : espèces, carte bancaire (sans contact), virement (factures).</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InformationsPratiquesSection;