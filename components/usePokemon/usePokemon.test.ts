import { act, renderHook } from "@testing-library/react-hooks";
import { usePokemon } from "./index";

test("catch pokemon", () => {
  const { result } = renderHook(() => usePokemon());

  // Result contains data for Bulbasaur and caught is false
  expect(result.current.pokemon).toEqual(
    expect.arrayContaining([
      { name: "Bulbasaur", number: "001", colour: "green", caught: false },
    ])
  );

  // Catch Bulbasaur (number '001')
  act(() => result.current.handleCatchClick("001"));

  // Result contains data for Bulbasaur and caught is true
  expect(result.current.pokemon).toEqual(
    expect.arrayContaining([
      { name: "Bulbasaur", number: "001", colour: "green", caught: true },
    ])
  );
});
