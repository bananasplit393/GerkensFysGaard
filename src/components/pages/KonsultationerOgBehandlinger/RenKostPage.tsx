const RenKostPage = () => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">
        RenKost – Optimer Din Sundhed Gennem Maden
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        "Du bliver, hvad du spiser." Dette gamle ordsprog er mere relevant end nogensinde. Den mad, vi indtager, er byggestenene for vores krop og har en direkte indflydelse på vores energiniveau, immunforsvar, humør og generelle helbred. RenKost er et vejledningsforløb, der fokuserer på ren, naturlig og anti-inflammatorisk mad.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mb-3">
        Principperne bag RenKost
      </h2>
      <div className="space-y-4 text-gray-600">
        <p>
          Formålet med RenKost er at nære kroppen optimalt og reducere den inflammationstilstand, som mange moderne livsstilssygdomme er forbundet med. Vi tager udgangspunkt i dine behov og skaber en plan, der er både realistisk og inspirerende.
        </p>
        <p>
          <strong>Et forløb i RenKost kan hjælpe dig med at:</strong>
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>
            <strong>Få Mere Energi:</strong> Ved at spise mad, der stabiliserer dit blodsukker og giver dig vedvarende energi hele dagen.
          </li>
          <li>
            <strong>Reducere Inflammation:</strong> Lindring af symptomer relateret til inflammatoriske tilstande som gigt, hudproblemer og fordøjelsesbesvær.
          </li>
          <li>
            <strong>Styrke Dit Immunforsvar:</strong> Giv din krop de næringsstoffer, den skal bruge for at modstå sygdom.
          </li>
          <li>
            <strong>Opnå en Sund Vægt:</strong> Lær at spise på en måde, der mætter og nærer, uden at du behøver at tælle kalorier.
          </li>
        </ul>
        <p className="font-semibold text-gray-800 mt-4">
          RenKost handler ikke om restriktive kure, men om at skabe en sund, nydelsesfuld og langtidsholdbar relation til mad.
        </p>
      </div>
    </div>
  );
};

export default RenKostPage;
