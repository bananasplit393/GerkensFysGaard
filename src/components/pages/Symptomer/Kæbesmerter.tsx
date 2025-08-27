// Fil: KaebesmerterPage.tsx
import React from 'react';

const KaebesmerterPage = () => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">
        Behandling af Kæbesmerter og -spændinger
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        Smerter, kliklyde, eller en følelse af træthed og spænding i kæben er almindelige problemer, der kan stamme fra kæbeleddet (TMJ) og de omkringliggende tyggemuskler. Ofte er tilstanden tæt forbundet med spændinger i nakken, stress og vaner som at skære tænder.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mb-3">
        Fysioterapeutisk Indsats ved Kæbeproblemer
      </h2>
      <div className="space-y-4 text-gray-600">
        <p>
          Fysioterapi er en effektiv og skånsom behandlingsform til kæberelaterede gener. Vi har specialiseret viden om kæbeleddets komplekse funktion og dets samspil med resten af kroppen.
        </p>
        <p>
          <strong>Behandlingen kan indeholde:</strong>
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>
            <strong>Grundig Analyse:</strong> Vi undersøger kæbeleddets bevægelighed, muskelfunktion og sammenhængen med din nakke og dit bid.
          </li>
          <li>
            <strong>Manuel Behandling:</strong> Vi anvender blide teknikker til at afspænde de overaktive tyggemuskler (både udvendigt og inde i munden) og forbedre bevægeligheden i selve kæbeleddet.
          </li>
          <li>
            <strong>Øvelser og Afspænding:</strong> Du vil blive guidet i specifikke øvelser for kæben samt afspændingsteknikker, der kan hjælpe dig med at bryde vaner som at bide tænderne sammen.
          </li>
          <li>
            <strong>Tværfagligt Samarbejde:</strong> Ved behov samarbejder vi tæt med din tandlæge for at sikre den mest optimale behandling.
          </li>
        </ul>
        <p className="font-semibold text-gray-800 mt-4">
          Vores mål er at genoprette normal funktion, reducere dine smerter og give dig en bedre forståelse for, hvordan du selv kan håndtere dine kæbespændinger.
        </p>
      </div>
    </div>
  );
};

export default KaebesmerterPage;
