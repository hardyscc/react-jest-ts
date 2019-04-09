import { mount, shallow } from "enzyme";
import React from "react";
import BeerListContainer from "../BeerListContainer";
import InputArea from "../InputArea";

describe("BeerListContainer", () => {
  it("should render InputArea and BeerList", () => {
    const wrapper = shallow(<BeerListContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should start with an empty list", () => {
    const wrapper = shallow(<BeerListContainer />);
    expect(wrapper.state("beers")).toEqual([]);
  });

  it("adds items to the list", () => {
    const wrapper = shallow(<BeerListContainer />);
    const container = wrapper.instance() as BeerListContainer;
    container.addItem("Sam Adams");
    expect(wrapper.state("beers")).toEqual(["Sam Adams"]);
  });

  it("passes addItem to InputArea", () => {
    const wrapper = shallow(<BeerListContainer />);
    const inputArea = wrapper.find(InputArea);
    const container = wrapper.instance() as BeerListContainer;
    expect(inputArea.prop("onSubmit")).toEqual(container.addItem);
  });

  it("passes a bound addItem function to InputArea", () => {
    const wrapper = shallow(<BeerListContainer />);
    const inputArea = wrapper.find(InputArea);
    inputArea.prop("onSubmit")("Sam Adams");
    expect(wrapper.state("beers")).toEqual(["Sam Adams"]);
  });

  it("renders the items", () => {
    const wrapper = mount(<BeerListContainer />);
    const container = wrapper.instance() as BeerListContainer;
    container.addItem("Sam Adams");
    container.addItem("Resin");
    wrapper.update();
    expect(wrapper.find("li")).toHaveLength(2);
  });
});
