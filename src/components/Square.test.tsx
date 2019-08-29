import React from "react";
import Square from "./Square";
import { shallow } from "enzyme";

describe("Square Component", () => {
  it("should ", () => {
    let wrapper = shallow(<Square></Square>);
    expect(wrapper.find("button").length).toBe(1);
  });
});
