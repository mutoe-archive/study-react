import React from "react";
import { shallow } from "enzyme";
import Game from "./Game";

describe("Game Component", () => {
  it("renders without crashing", () => {
    let app = shallow(<Game />);
    expect(app.find(".game")).toBeDefined();
  });
});
