const HovedpinePage = () => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">
        Fysioterapi mod Hovedpine
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        Mange mennesker lider af tilbagevendende hovedpine uden at vide, at årsagen ofte findes i spændinger og låsninger i nakke, skuldre og kæbe. Især spændingshovedpine og nakkehovedpine er tilstande, hvor fysioterapi kan have en markant positiv effekt.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mb-3">
        Sådan Kan Fysioterapi Lette Din Hovedpine
      </h2>
      <div className="space-y-4 text-gray-600">
        <p>
          En fysioterapeut kan hjælpe med at identificere de fysiske ubalancer, der bidrager til din hovedpine. Behandlingen er rettet mod at afhjælpe den underliggende årsag.
        </p>
        <p>
          <strong>Vores indsats omfatter:</strong>
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>
            <strong>Udelukkelse af Årsager:</strong> Vi foretager en grundig undersøgelse af din nakke, dine skuldre og din kropsholdning for at finde de spændingsmønstre, der udløser hovedpinen.
          </li>
          <li>
            <strong>Afspænding og Mobilisering:</strong> Gennem manuel behandling løsner vi op for spændte muskler i nakke og skuldre og forbedrer bevægeligheden i de øverste nakkeled, som ofte er involveret i hovedpine.
          </li>
          <li>
            <strong>Holdningskorrektion:</strong> Vi arbejder aktivt med din kropsholdning og giver dig øvelser, der kan modvirke den faldne holdning, mange udvikler foran computeren.
          </li>
          <li>
            <strong>Vejledning om Triggere:</strong> Vi hjælper dig med at blive bevidst om, hvad der kan udløse din hovedpine i hverdagen, f.eks. stress, arbejdsstillinger eller søvnmønstre.
          </li>
        </ul>
        <p className="font-semibold text-gray-800 mt-4">
          Ved at behandle årsagen frem for kun symptomet, kan vi hjælpe dig med at opnå en varig reduktion i både hyppighed og intensitet af din hovedpine.
        </p>
      </div>
    </div>
  );
};

export default HovedpinePage;
