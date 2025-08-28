const AngstPage = () => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">
        Kroppens Rolle i Håndtering af Angst
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        Angst er en følelse, der opleves stærkt i kroppen. Hjertebanken, overfladisk vejrtrækning, muskelspændinger og svimmelhed er klassiske fysiske symptomer. Ved at arbejde med kroppen kan man direkte påvirke og dæmpe de signaler, der er med til at vedligeholde angsten.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mb-3">
        Fysioterapi som Støtte ved Angst
      </h2>
      <div className="space-y-4 text-gray-600">
        <p>
          Som fysioterapeuter kan vi tilbyde en kropslig tilgang, der supplerer traditionel behandling som f.eks. samtaleterapi. Vores fokus er at give dig konkrete redskaber til at skabe ro i dit nervesystem.
        </p>
        <p>
          <strong>Vores indsats kan bestå af:</strong>
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>
            <strong>Grounding og Kropsbevidsthed:</strong> Vi guider dig gennem øvelser, der hjælper dig med at <span className="italic">lande</span> i din krop og flytte fokus fra bekymrende tanker til fysiske fornemmelser.
          </li>
          <li>
            <strong>Regulering af Nervesystemet:</strong> Gennem beroligende berøring, blide stræk og specifikke vejrtrækningsøvelser kan vi hjælpe med at dæmpe kroppens <span className="italic">alarmberedskab</span>.
          </li>
          <li>
            <strong>Afspænding:</strong> Vi arbejder med at frigøre de kroniske muskelspændinger, som angsten ofte medfører, især i brystkasse, nakke og skuldre.
          </li>
          <li>
            <strong>Tryg Bevægelse:</strong> Vi hjælper dig med at genfinde glæden og trygheden ved at bevæge din krop på en måde, der føles rar og ikke-truende.
          </li>
        </ul>
        <p className="font-semibold text-gray-800 mt-4">
          Fysioterapi kan give dig en oplevelse af, at du selv kan påvirke din krops reaktioner og dermed få en følelse af kontrol og tryghed.
        </p>
      </div>
    </div>
  );
};

export default AngstPage;
