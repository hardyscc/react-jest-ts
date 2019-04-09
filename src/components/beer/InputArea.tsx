import React from "react";

interface IProps {
  onSubmit: (name: string) => void;
}

interface IState {
  text: string;
}

class InputArea extends React.Component<IProps, IState> {
  state: IState = {
    text: ""
  };

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.setText} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }

  setText = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: event.target.value });
  };

  handleClick = () => {
    if (this.state.text) {
      this.props.onSubmit(this.state.text);
      this.setState({ text: "" });
    }
  };
}

export default InputArea;
