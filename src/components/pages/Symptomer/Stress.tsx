// Fil: StressPage.tsx
import React from 'react';

const StressPage = () => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">
        Fysioterapi som Redskab mod Stress
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        Stress er ikke kun en mental tilstand; den manifesterer sig i høj grad fysisk i kroppen. Vedvarende stress kan føre til muskelspændinger, hovedpine, søvnproblemer og en generel følelse af uro. Kroppen og sindet er uløseligt forbundne, og fysisk velvære kan have en direkte positiv effekt på mental balance.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mb-3">
        Hvordan Fysioterapi Kan Hjælpe med at Håndtere Stress
      </h2>
      <div className="space-y-4 text-gray-600">
        <p>
          En fysioterapeut kan hjælpe dig med at genfinde kontakten til din krop og bryde den onde cirkel, som stress skaber. Vores fokus er at berolige nervesystemet og lindre de fysiske symptomer.
        </p>
        <p>
          <strong>Vores tilgang omfatter:</strong>
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>
            <strong>Kropsbevidsthed:</strong> Vi hjælper dig med at mærke din krop igen og blive bevidst om de spændingsmønstre, stressen skaber.
          </li>
          <li>
            <strong>Afspændingsteknikker:</strong> Gennem blid manuel behandling, massage og stræk arbejder vi på at frigøre de spændinger, der har sat sig fast i f.eks. nakke, skuldre og kæbe.
          </li>
          <li>
            <strong>Vejrtrækningsøvelser:</strong> Du lærer simple og effektive vejrtrækningsteknikker, der kan aktivere det parasympatiske (beroligende) nervesystem og skabe ro her og nu.
          </li>
          <li>
            <strong>Skånsom Bevægelse:</strong> Vi guider dig i blide bevægelser og øvelser, der kan frigøre endorfiner (kroppens eget lykkehormon) og forbedre dit generelle velvære.
          </li>
        </ul>
        <p className="font-semibold text-gray-800 mt-4">
          Fysioterapi kan være et trygt rum, hvor du får en pause fra tankemylder og en mulighed for at give din krop den ro og omsorg, den har brug for.
        </p>
      </div>
    </div>
  );
};

export default StressPage;
