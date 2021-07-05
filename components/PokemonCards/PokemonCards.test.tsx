import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { makeMockPokemon } from "mocks/makeMockPokemon";
import { Pokemon } from "types/Pokemon";
import { PokemonCards } from "./index";

test("catch pokemon", () => {
  // Make an array of 3 pokemon:
  // - `caught` is false
  // - `number` is '001', '002', '003'
  // - `name` and `colour` don't matter for this test, so they are not specified
  const pokemon = Array.from<undefined, Pokemon>({ length: 3 }, (_, index) =>
    makeMockPokemon({ caught: false, number: `00${index + 1}` })
  );

  const handleCatchClickMock = jest.fn();

  render(
    <PokemonCards pokemon={pokemon} onCatchClick={handleCatchClickMock} />
  );

  // Click the first catch button
  userEvent.click(screen.getAllByText("Catch")[0]);

  // Expect the function to be called with the first pokemon's number
  expect(handleCatchClickMock).toBeCalledWith("001");
});
