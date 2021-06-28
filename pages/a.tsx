import { PokemonRows } from "components/PokemonRows";
import { usePokemon } from "components/usePokemon";

export default function A() {
  const { pokemon, handleCatchClick } = usePokemon();
  return <PokemonRows pokemon={pokemon} onCatchClick={handleCatchClick} />;
}
