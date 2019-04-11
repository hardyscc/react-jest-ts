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
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} onChange={this.setText} />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }

  setText = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = () => {
    if (this.state.text) {
      this.props.onSubmit(this.state.text);
      this.setState({ text: "" });
    }
  };
}

export default InputArea;
