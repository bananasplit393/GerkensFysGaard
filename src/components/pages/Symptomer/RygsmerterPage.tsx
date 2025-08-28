const RygsmerterPage = () => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">
        Behandling af Rygsmerter
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        Rygsmerter er en af de mest almindelige lidelser i befolkningen og kan variere fra en let, murrende ømhed til en skarp og invaliderende smerte. Uanset årsagen – om det skyldes en akut skade, dårlig holdning, overbelastning eller slid – er det en tilstand, der i høj grad påvirker livskvaliteten.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mb-3">
        Hvordan en Fysioterapeut Kan Hjælpe
      </h2>
      <div className="space-y-4 text-gray-600">
        <p>
          En fysioterapeut er ekspert i at diagnosticere og behandle problemer i bevægeapparatet, og ryggen er et af vores kerneområder. Vores tilgang er ikke kun at lindre dine symptomer, men at finde og behandle den grundlæggende årsag til dine smerter.
        </p>
        <p>
          <strong>Vores behandling kan bestå af:</strong>
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>
            <strong>Grundig Undersøgelse:</strong> Vi starter med en dybdegående samtale og undersøgelse for at identificere præcis, hvor smerten kommer fra, og hvad der udløser den.
          </li>
          <li>
            <strong>Manuel Behandling:</strong> Gennem teknikker som ledmobilisering, massage og udspænding arbejder vi på at løsne spændte muskler, forbedre bevægeligheden i ryggens led og reducere smerten.
          </li>
          <li>
            <strong>Målrettet Træning:</strong> Du vil blive instrueret i specifikke øvelser, der styrker den dybe ryg- og mavemuskulatur (core-muskulaturen), hvilket skaber stabilitet og forebygger fremtidige problemer.
          </li>
          <li>
            <strong>Vejledning og Ergonomi:</strong> Vi giver dig konkrete råd til, hvordan du kan forbedre din kropsholdning og dine arbejdsstillinger, så du undgår at overbelaste ryggen i hverdagen.
          </li>
        </ul>
        <p className="font-semibold text-gray-800 mt-4">
          Målet er at give dig redskaberne til at tage kontrol over dine rygsmerter, så du kan vende tilbage til en aktiv og smertefri hverdag.
        </p>
      </div>
    </div>
  );
};

export default RygsmerterPage;
