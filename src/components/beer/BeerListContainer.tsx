import React from "react";
import BeerList from "./BeerList";
import InputArea from "./InputArea";

interface IProps {
  title?: string;
}

interface IState {
  beers: string[];
}

class BeerListContainer extends React.Component<IProps, IState> {
  static defaultProps: Partial<IProps> = {
    title: "Beer List"
  };

  state: IState = {
    beers: []
  };

  render() {
    return (
      <React.Fragment>
        <InputArea onSubmit={this.addItem} />
        <BeerList items={this.state.beers} />
      </React.Fragment>
    );
  }

  addItem = (name: string) => {
    this.setState({
      beers: [...this.state.beers, name]
    });
  };
}

export default BeerListContainer;
