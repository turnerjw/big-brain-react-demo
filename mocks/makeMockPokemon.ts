import { random } from "faker";
import { Pokemon } from "types/Pokemon";

export function makeMockPokemon(override: Partial<Pokemon>): Pokemon {
  return {
    name: random.word(),
    number: random.alphaNumeric(3),
    caught: false,
    colour: random.arrayElement(["green", "red", "blue", "yellow"]),
    ...override,
  };
}
