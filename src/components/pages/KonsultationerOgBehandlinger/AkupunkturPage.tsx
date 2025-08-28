const AkupunkturPage = () => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">
        Akupunktur – En Helhedsorienteret Tilgang til Smerte og Balance
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        Akupunktur er en flere tusind år gammel behandlingsform med rødder i traditionel kinesisk medicin. Ved at indsætte tynde, sterile nåle i specifikke punkter på kroppen, stimuleres kroppens egen helingsproces, smertedæmpende stoffer frigøres, og balancen i nervesystemet genoprettes.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mb-3">
        Hvordan Virker Akupunktur?
      </h2>
      <div className="space-y-4 text-gray-600">
        <p>
          Moderne forskning har vist, at akupunktur virker ved at påvirke kroppens nervesystem og stimulere frigørelsen af endorfiner og andre signalstoffer. Dette kan have en markant effekt på en lang række tilstande.
        </p>
        <p>
          <strong>Akupunktur anvendes ofte til at behandle:</strong>
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>
            <strong>Smerter i Bevægeapparatet:</strong> F.eks. ryg- og nakkesmerter, spændingshovedpine, slidgigt og sportsskader.
          </li>
          <li>
            <strong>Stress og Uro:</strong> Behandlingen kan have en dybt beroligende effekt på nervesystemet.
          </li>
          <li>
            <strong>Funktionelle Lidelser:</strong> F.eks. fordøjelsesproblemer, søvnbesvær og menstruationssmerter.
          </li>
          <li>
            <strong>Allergi:</strong> Kan hjælpe med at dæmpe symptomer som f.eks. høfeber.
          </li>
        </ul>
        <p className="font-semibold text-gray-800 mt-4">
          Behandlingen tilpasses altid individuelt og bruges ofte som et effektivt supplement til andre fysioterapeutiske behandlinger for at opnå de bedste resultater.
        </p>
      </div>
    </div>
  );
};

export default AkupunkturPage;
