import { calculateWinner } from "./index";

describe('The "calculateWinner()"', () => {
  it("should be a function", () => {
    expect(calculateWinner).toBeInstanceOf(Function);
  });
});
