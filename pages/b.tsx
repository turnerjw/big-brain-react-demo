import { PokemonCards } from "components/PokemonCards";
import { usePokemon } from "components/usePokemon";

export default function B() {
  const { pokemon, handleCatchClick } = usePokemon();
  return <PokemonCards pokemon={pokemon} onCatchClick={handleCatchClick} />;
}
