import { pokemonData } from "data";
import { useState } from "react";

export function PokemonCards(): JSX.Element {
  const [pokemon, setPokemon] = useState(pokemonData);

  const onCaughtClick = (idToCatch: string) => {
    setPokemon((current) =>
      current.map((p) => {
        if (p.number === idToCatch) {
          return { ...p, caught: true };
        } else {
          return p;
        }
      })
    );
  };

  return (
    <div className="flex space-x-5 p-5 overflow-scroll border-black border-l-2 border-r-2">
      {pokemon.map((p) => {
        return (
          <div
            className={`flex flex-col flex-none h-60 w-60 space-y-2 justify-evenly items-center p-5 rounded-3xl bg-gradient-to-r from-${p.colour}-200 to-${p.colour}-300 shadow-md`}
          >
            <h4 className="text-xl font-bold">{p.name}</h4>
            <h4 className="text-l font-bold">
              {p.caught ? "(Caught)" : undefined}
            </h4>
            <h4 className="text-l font-bold">#{p.number}</h4>
            <button
              className={`px-4 py-2 rounded-md bg-${p.colour}-700 text-white`}
              onClick={() => onCaughtClick(p.number)}
            >
              Catch
            </button>
          </div>
        );
      })}
    </div>
  );
}
