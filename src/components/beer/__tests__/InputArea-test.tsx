import { mount } from "enzyme";
import React from "react";
import InputArea from "../InputArea";

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

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

  it("should call onSubmit", async () => {
    const onSubmitSpy = jest.fn();
    const wrapper = mount(<InputArea onSubmit={onSubmitSpy} />);

    wrapper.find("input").simulate("change", {
      target: { name: "text", value: "Octoberfest" }
    });

    wrapper.find("form").simulate("submit");
    expect(wrapper.find('button[type="submit"]').props().disabled).toBeTruthy();

    await sleep(10);
    expect(onSubmitSpy).toBeCalled();
    expect(onSubmitSpy).toBeCalledWith("Octoberfest");
  });

  it("should not call onSubmit if text is empty", async () => {
    const onSubmitSpy = jest.fn();
    const wrapper = mount(<InputArea onSubmit={onSubmitSpy} />);

    wrapper.find("form").simulate("submit");

    await sleep(10);
    expect(onSubmitSpy).not.toBeCalled();
  });
});
