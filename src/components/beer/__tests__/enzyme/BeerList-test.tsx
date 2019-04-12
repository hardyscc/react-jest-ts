import { shallow } from "enzyme";
import * as React from "react";
import BeerList from "../../BeerList";

describe("BeerList", () => {
  it("should render zero items", () => {
    const wrapper = shallow(<BeerList items={[]} />);
    expect(wrapper.find("li")).toHaveLength(0);
  });

  it("should render some items", () => {
    const items = ["Sam Adams", "Resin", "Octoberfest"];
    const wrapper = shallow(<BeerList items={items} />);
    expect(wrapper.find("li")).toHaveLength(3);
  });
});
