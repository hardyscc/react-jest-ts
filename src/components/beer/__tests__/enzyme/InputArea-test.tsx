import { mount } from "enzyme";
import React from "react";
import InputArea from "../../InputArea";

describe("InputArea", () => {
  it("should contain an input and a button", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = mount(<InputArea onSubmit={onSubmitSpy} />);
    expect(
      wrapper.containsAllMatchingElements([<input />, <button>Add</button>])
    ).toBeTruthy();
  });

  it("should accept input", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = mount(<InputArea onSubmit={onSubmitSpy} />);
    wrapper
      .find("input")
      .simulate("change", { target: { name: "name", value: "Resin" } });
    expect(wrapper.find("input").props().value).toEqual("Resin");
  });

  it("should call onSubmit", done => {
    const onSubmitSpy = jest.fn();
    const wrapper = mount(<InputArea onSubmit={onSubmitSpy} />);
    wrapper.find("input").simulate("change", {
      target: { name: "name", value: "Octoberfest" }
    });
    wrapper.find("form").simulate("submit");
    expect(wrapper.find('button[type="submit"]').props().disabled).toBeTruthy();
    setImmediate(() => {
      expect(onSubmitSpy).toBeCalled();
      expect(onSubmitSpy).toBeCalledWith("Octoberfest");
      done();
    });
  });

  it("should not call onSubmit if text is empty", done => {
    const onSubmitSpy = jest.fn();
    const wrapper = mount(<InputArea onSubmit={onSubmitSpy} />);
    wrapper.find("form").simulate("submit");
    setImmediate(() => {
      expect(onSubmitSpy).not.toBeCalled();
      done();
    });
  });
});
