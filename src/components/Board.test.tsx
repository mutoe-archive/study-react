import React from "react";
import Board from "./Board";
import { mount } from "enzyme";

describe("Board Component", () => {
  it("should can be rendered", () => {
    const squares = Array(9).fill(null);
    const fn = jest.fn();
    const wrapper = mount(<Board squares={squares} onClick={fn}></Board>);
    expect(wrapper.find("button").length).toBe(9);
  });
});
