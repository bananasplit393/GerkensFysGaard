// Fil: PsykiskeSymptomerPage.tsx
import React from 'react';

const PsykiskeSymptomerPage = () => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">
        Den Kropslige Indgang til Psykisk Velvære
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        Psykiske symptomer som tankemylder, indre uro, nedtrykthed eller koncentrationsbesvær er tæt forbundet med kroppens tilstand. Et stresset sind fører ofte til en anspændt krop – og omvendt. Ved at arbejde med kroppen kan vi skabe en positiv forandring, der forplanter sig til dit mentale velvære.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mb-3">
        Hvordan Fysioterapi Kan Støtte Din Psykiske Balance
      </h2>
      <div className="space-y-4 text-gray-600">
        <p>
          Fysioterapi kan fungere som et anker i en turbulent tid. Vi tilbyder et trygt rum, hvor fokus flyttes fra hovedet og ned i kroppen. Vores tilgang er ikke at behandle den psykiske diagnose, men at lindre de kropslige symptomer, der følger med.
        </p>
        <p>
          <strong>Vores redskaber inkluderer:</strong>
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>
            <strong>Kropslig Forankring (Grounding):</strong> Gennem simple øvelser hjælper vi dig med at finde ro og nærvær i nuet, hvilket kan dæmpe tankemylder og uro.
          </li>
          <li>
            <strong>Afspænding og Berøring:</strong> Rolig, manuel behandling kan virke beroligende på nervesystemet og frigøre de spændinger, som psykisk pres ofte skaber.
          </li>
          <li>
            <strong>Vejrtrækningen som Redskab:</strong> Vi lærer dig at bruge din vejrtrækning aktivt til at regulere dit stressniveau og skabe en følelse af kontrol.
          </li>
          <li>
            <strong>Glæden ved Bevægelse:</strong> Vi hjælper dig med at finde eller genfinde en form for bevægelse, der giver dig energi og glæde, hvilket er essentielt for den mentale sundhed.
          </li>
        </ul>
        <p className="font-semibold text-gray-800 mt-4">
          Ved at skabe ro i kroppen kan vi hjælpe med at skabe mere plads og klarhed i sindet.
        </p>
      </div>
    </div>
  );
};

export default PsykiskeSymptomerPage;
