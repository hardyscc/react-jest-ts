import { mount, shallow } from "enzyme";
import React from "react";
import BeerList from "../BeerList";
import BeerListContainer from "../BeerListContainer";
import InputArea from "../InputArea";

describe("BeerListContainer", () => {
  it("should render InputArea and BeerList", () => {
    const wrapper = shallow(<BeerListContainer />);
    expect(
      wrapper.containsAllMatchingElements([
        <InputArea />,
        <BeerList items={[]} />
      ])
    ).toBeTruthy();
  });

  it("should start with an empty list", () => {
    const wrapper = shallow(<BeerListContainer />);
    expect(wrapper.state("beers")).toEqual([]);
  });

  it("adds items to the list", () => {
    const wrapper = shallow(<BeerListContainer />);
    // @ts-ignore
    wrapper.instance().addItem("Sam Adams");
    expect(wrapper.state("beers")).toEqual(["Sam Adams"]);
  });

  it("passes addItem to InputArea", () => {
    const wrapper = shallow(<BeerListContainer />);
    const inputArea = wrapper.find(InputArea);
    // @ts-ignore
    const addItem = wrapper.instance().addItem;
    expect(inputArea.prop("onSubmit")).toEqual(addItem);
  });

  it("passes a bound addItem function to InputArea", () => {
    const wrapper = shallow(<BeerListContainer />);
    const inputArea = wrapper.find(InputArea);
    // @ts-ignore
    inputArea.prop("onSubmit")("Sam Adams");
    expect(wrapper.state("beers")).toEqual(["Sam Adams"]);
  });

  it("renders the items", () => {
    const wrapper = mount(<BeerListContainer />);
    // @ts-ignore
    wrapper.instance().addItem("Sam Adams");
    // @ts-ignore
    wrapper.instance().addItem("Resin");
    wrapper.update();
    expect(wrapper.find("li")).toHaveLength(2);
  });
});
