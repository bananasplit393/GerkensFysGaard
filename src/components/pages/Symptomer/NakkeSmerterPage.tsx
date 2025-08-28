const NakkesmerterPage = () => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">
        Hjælp til Nakkesmerter
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        Nakkesmerter, hold i nakken og stivhed er udbredte gener, ofte forårsaget af mange timer foran en skærm, uhensigtsmæssige sovestillinger eller stress. Smerterne kan være lokale i nakken, men kan også trække op i hovedet og forårsage hovedpine eller stråle ud i skuldre og arme.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mb-3">
        Fysioterapeutens Rolle ved Nakkesmerter
      </h2>
      <div className="space-y-4 text-gray-600">
        <p>
          Hos fysioterapeuten får du hjælp til at bryde den onde cirkel. Vi fokuserer på at genoprette normal funktion og bevægelighed i nakken.
        </p>
        <p>
          <strong>En typisk behandlingsplan inkluderer:</strong>
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>
            <strong>Analyse af Årsag:</strong> Vi finder frem til, om dine smerter skyldes muskelspændinger, ledlåsninger, en diskusproblematik eller noget helt fjerde.
          </li>
          <li>
            <strong>Manuelle Teknikker:</strong> Vi anvender blide mobiliseringsteknikker for at genoprette bevægeligheden i nakkens led og afspændende massage for at løsne op i de overspændte muskler.
          </li>
          <li>
            <strong>Specifikke Øvelser:</strong> Du lærer simple, men effektive øvelser for at styrke de dybe nakkemuskler og forbedre din holdning, hvilket er afgørende for en langvarig effekt.
          </li>
          <li>
            <strong>Ergonomisk Vejledning:</strong> Vi vejleder dig i, hvordan du bedst indretter din arbejdsplads og justerer dine daglige vaner for at skåne nakken.
          </li>
        </ul>
        <p className="font-semibold text-gray-800 mt-4">
          Vores mål er ikke kun at fjerne smerten her og nu, men at gøre din nakke stærk og modstandsdygtig over for fremtidige belastninger.
        </p>
      </div>
    </div>
  );
};

export default NakkesmerterPage;
