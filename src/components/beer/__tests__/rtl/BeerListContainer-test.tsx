import React from "react";
import { fireEvent, render, wait } from "react-testing-library";
import BeerListContainer from "../../BeerListContainer";

describe("react-testing-library - BeerListContainer", () => {
  it("add beer", async () => {
    const { getByText, getByLabelText, queryByText, container } = render(
      <BeerListContainer />
    );

    const inputText = getByLabelText(/name/i);
    const addButton = getByText(/add/i);

    fireEvent.change(inputText, {
      target: { name: "name", value: "Octoberfest" }
    });
    fireEvent.click(addButton);

    await wait(() => expect(queryByText("Octoberfest")).not.toBeNull());
    expect(container).toMatchSnapshot();

    fireEvent.change(inputText, {
      target: { name: "name", value: "Killingbear" }
    });
    fireEvent.click(addButton);

    await wait(() => expect(queryByText("Killingbear")).not.toBeNull());
    expect(container).toMatchSnapshot();
  });
});
