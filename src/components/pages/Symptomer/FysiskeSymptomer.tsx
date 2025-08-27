// Fil: FysiskeSymptomerPage.tsx
import React from 'react';

const FysiskeSymptomerPage = () => {
  return (
    <div className="p-6 md:p-8 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">
        Forståelse og Behandling af Fysiske Symptomer
      </h1>
      <p className="mb-6 text-lg text-gray-700">
        Kroppen kan reagere på mange måder, som ikke altid har en klar medicinsk forklaring. Symptomer som vedvarende træthed, diffuse smerter, svimmelhed eller maveproblemer kan være kroppens måde at signalere en overbelastning eller ubalance på – både fysisk og psykisk.
      </p>

      <h2 className="text-2xl font-semibold text-teal-600 mb-3">
        Fysioterapeutens Tilgang til Uforklarlige Symptomer
      </h2>
      <div className="space-y-4 text-gray-600">
        <p>
          Som fysioterapeuter ser vi på kroppen som en helhed. Vi er uddannet til at forstå samspillet mellem nervesystemet, muskler, led og den generelle trivsel. Vores mål er at hjælpe dig med at forstå din krops signaler og genoprette balancen.
        </p>
        <p>
          <strong>Vores behandling fokuserer på:</strong>
        </p>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li>
            <strong>Grundig Udredning:</strong> Vi lytter til din historie og laver en dybdegående undersøgelse for at udelukke specifikke skader og forstå dine symptomers mønster.
          </li>
          <li>
            <strong>Beroligelse af Nervesystemet:</strong> Mange diffuse symptomer stammer fra et overaktivt nervesystem. Vi anvender afspændingsteknikker, blid manuel behandling og vejrtrækningsøvelser for at skabe ro.
          </li>
          <li>
            <strong>Genopbygning af Tryghed ved Bevægelse:</strong> Vi hjælper dig med gradvist at genoptage fysisk aktivitet på en måde, der føles tryg og overskuelig, så du genvinder tilliden til din krop.
          </li>
          <li>
            <strong>Kropsbevidsthed:</strong> Vi giver dig redskaber til bedre at kunne mærke og tolke din krops signaler, så du kan reagere hensigtsmæssigt, før symptomerne eskalerer.
          </li>
        </ul>
        <p className="font-semibold text-gray-800 mt-4">
          Vi hjælper dig med at bygge bro mellem krop og sind, så du kan opnå en hverdag med færre smerter og mere overskud.
        </p>
      </div>
    </div>
  );
};

export default FysiskeSymptomerPage;
