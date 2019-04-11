import { mount } from "enzyme";
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
    input.simulate("change", { target: { name: "text", value: "Resin" } });
    expect(wrapper.find("input").props().value).toEqual("Resin");
  });

  it("should call onSubmit", () => {
    const addItemSpy = jest.fn();
    const wrapper = mount(<InputArea onSubmit={addItemSpy} />);

    expect(wrapper.find("#submitting")).toHaveLength(0);
    wrapper.find("input").simulate("change", {
      target: { name: "text", value: "Octoberfest" }
    });

    wrapper.find("form").simulate("submit");
    expect(wrapper.find("#submitting")).toHaveLength(1);
    expect(wrapper.find('button[type="submit"]').props().disabled).toBe(true);

    //expect(addItemSpy).toHaveBeenCalled();
    //expect(addItemSpy).toBeCalledWith("Octoberfest");
  });

  // it("should not call onSubmit if text is empty", () => {
  //   const addItemSpy = jest.fn();
  //   const wrapper = mount(<InputArea onSubmit={addItemSpy} />);
  //   const form = wrapper.find("form");

  //   wrapper.setState({ text: "" });
  //   form.simulate("submit");
  //   expect(addItemSpy).toBeCalledTimes(0);
  // });
});
