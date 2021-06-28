import { Pokemon, pokemonData } from "data";
import { useState } from "react";

export interface UsePokemonResult {
  pokemon: Pokemon[];
  handleCatchClick: (idToCatch: string) => void;
}

export function usePokemon() {
  const [pokemon, setPokemon] = useState(pokemonData);

  const handleCatchClick = (idToCatch: string) => {
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

  return {
    pokemon,
    handleCatchClick,
  };
}
