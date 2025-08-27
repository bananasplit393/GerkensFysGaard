const DepressionPage = () => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">
        Fysisk Aktivitet og Kropsterapi ved Depression
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        Depression kan føles som en tung dyne, der dræner for energi og efterlader kroppen træt og tung. Forskning viser dog entydigt, at fysisk aktivitet er et af de mest effektive redskaber til at lindre symptomer på depression. Bevægelse kan være svært at komme i gang med, og her kan en fysioterapeut være en vigtig støtte.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mb-3">
        Fysioterapeutens Bidrag i Behandlingen af Depression
      </h2>
      <div className="space-y-4 text-gray-600">
        <p>
          Vores rolle er at hjælpe dig i gang med bevægelse på en tryg, overskuelig og motiverende måde. Vi tager udgangspunkt i, hvor du er lige nu.
        </p>
        <p>
          <strong>Vi kan hjælpe med:</strong>
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>
            <strong>Tilpasset Træning:</strong> Vi skræddersyr et træningsprogram, der passer til dit energiniveau. Det kan starte med simple gåture eller blide øvelser, der langsomt bygger dig op.
          </li>
          <li>
            <strong>Kropsbevidsthed og Nærvær:</strong> Gennem kropslige øvelser kan vi hjælpe dig med at flytte opmærksomheden fra negative tankemønstre og over til nuet og kroppens fornemmelser.
          </li>
          <li>
            <strong>Frigørelse af Energi:</strong> Blid manuel behandling og stræk kan hjælpe med at løsne op for den fysiske fastlåsthed, som ofte følger med depression, og skabe en følelse af lethed.
          </li>
          <li>
            <strong>Motivation og Støtte:</strong> Vi fungerer som din sparringspartner, der støtter og motiverer dig til at holde fast i de gode vaner, selv på dage hvor det føles uoverskueligt.
          </li>
        </ul>
        <p className="font-semibold text-gray-800 mt-4">
          At tage små skridt mod en mere aktiv hverdag kan have en enorm positiv indflydelse på dit humør og din energi.
        </p>
      </div>
    </div>
  );
};

export default DepressionPage;
