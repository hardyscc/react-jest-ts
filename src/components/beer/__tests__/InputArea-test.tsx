import { mount, shallow } from "enzyme";
import React from "react";
import InputArea from "../InputArea";

describe("InputArea", () => {
  it("should contain an input and a button", () => {
    const addItemSpy = jest.fn();
    const wrapper = mount(<InputArea onSubmit={addItemSpy} />);
    expect(
      wrapper.containsAllMatchingElements([<input />, <button>Add</button>])
    ).toBeTruthy();
  });

  it("should accept input", () => {
    const addItemSpy = jest.fn();
    const wrapper = mount(<InputArea onSubmit={addItemSpy} />);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "Resin" } });
    expect(wrapper.state("text")).toEqual("Resin");
    expect(wrapper.find("input").prop("value")).toEqual("Resin");
  });

  it("should call onSubmit when Add is clicked", () => {
    const addItemSpy = jest.fn();
    const wrapper = shallow(<InputArea onSubmit={addItemSpy} />);
    const addButton = wrapper.find("form");

    wrapper.setState({ text: "" });
    addButton.simulate("submit");
    expect(addItemSpy).toHaveBeenCalledTimes(0);

    wrapper.setState({ text: "Octoberfest" });
    addButton.simulate("submit");
    expect(addItemSpy).toBeCalled();
    expect(addItemSpy).toBeCalledWith("Octoberfest");
  });
});
