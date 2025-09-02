
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

        {/* Additional Information Section 1 */}
        <h2 className="text-2xl font-semibold text-teal-600 mt-8 mb-3">
          Angst og Livsstil
        </h2>
        <p>
          Livsstilsfaktorer som søvn, kost og motion har stor betydning for, hvordan kroppen håndterer angst. Vi tilbyder vejledning i, hvordan du kan optimere din hverdag for at støtte din mentale sundhed. Små ændringer i daglige rutiner kan have stor effekt på dit velbefindende.
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>
            <strong>Søvn:</strong> Vi hjælper dig med at etablere gode søvnvaner, da kroppen restituerer og nervesystemet balanceres under søvn.
          </li>
          <li>
            <strong>Kost:</strong> En balanceret kost kan stabilisere blodsukkeret og mindske fysiske symptomer på angst.
          </li>
          <li>
            <strong>Motion:</strong> Regelmæssig bevægelse frigiver endorfiner og reducerer stresshormoner.
          </li>
        </ul>

        {/* Additional Information Section 2 */}
        <h2 className="text-2xl font-semibold text-teal-600 mt-8 mb-3">
          Angst og Vejrtrækning
        </h2>
        <p>
          Vejrtrækningen spiller en central rolle i kroppens stressrespons. Mange med angst oplever overfladisk eller hurtig vejrtrækning, hvilket kan forstærke ubehaget. Vi lærer dig teknikker til dyb og rolig vejrtrækning, som kan aktivere det parasympatiske nervesystem og skabe ro.
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>
            <strong>Diafragmatisk vejrtrækning:</strong> Træn at trække vejret helt ned i maven for at berolige kroppen.
          </li>
          <li>
            <strong>Rytmisk vejrtrækning:</strong> Find en rolig rytme, der kan hjælpe dig med at regulere angstniveauet.
          </li>
          <li>
            <strong>Vejrtrækningsøvelser:</strong> Vi giver dig konkrete øvelser, du kan bruge i hverdagen.
          </li>
        </ul>

        {/* Additional Information Section 3 */}
        <h2 className="text-2xl font-semibold text-teal-600 mt-8 mb-3">
          Angst og Socialt Liv
        </h2>
        <p>
          Angst kan påvirke sociale relationer og gøre det svært at deltage i fællesskaber. Vi arbejder med at styrke din selvtillid og kropslige tryghed, så du kan være mere til stede i sociale sammenhænge.
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>
            <strong>Assertivitetstræning:</strong> Lær at sætte grænser og udtrykke dine behov på en tryg måde.
          </li>
          <li>
            <strong>Kropssprog:</strong> Bliv bevidst om, hvordan din kropsholdning kan påvirke din følelse af selvtillid.
          </li>
          <li>
            <strong>Afspænding i sociale situationer:</strong> Få teknikker til at slappe af, når du er sammen med andre.
          </li>
        </ul>

        <p className="font-semibold text-gray-800 mt-6">
          Vores mål er at give dig en bred vifte af redskaber, så du kan håndtere angst både fysisk, mentalt og socialt. Kontakt os for en uforpligtende samtale om, hvordan vi kan støtte dig.
        </p>
      </div>
    </div>
  );
};

export default AngstPage;
