import { Pokemon, pokemonData } from "data";
import { useState } from "react";

export interface PokemonRowsProps {
  pokemon: Pokemon[];
  onCatchClick: (idToCatch: string) => void;
}

export function PokemonRows({
  onCatchClick,
  pokemon,
}: PokemonRowsProps): JSX.Element {
  const handleCatchClick = (idToCatch: string) => {
    onCatchClick(idToCatch);
  };

  return (
    <div className="space-y-5 h-96 py-5 px-40 overflow-scroll border-black border-t-2 border-b-2">
      {pokemon.map((p) => {
        return (
          <div
            className={`flex justify-between items-center p-5 rounded-3xl bg-gradient-to-r from-${p.colour}-200 to-${p.colour}-300 shadow-md`}
          >
            <h4 className="text-xl font-bold">#{p.number}</h4>
            <h4 className="text-xl font-bold">
              {p.name}
              {p.caught ? " (Caught)" : undefined}
            </h4>
            <button
              className={`px-4 py-2 rounded-md bg-${p.colour}-700 text-white`}
              onClick={() => handleCatchClick(p.number)}
            >
              Catch
            </button>
          </div>
        );
      })}
    </div>
  );
}
