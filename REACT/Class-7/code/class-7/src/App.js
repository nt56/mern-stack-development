import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Luffy",
      email: "luffy@gmail.com",
      count: 0,
      color: "red",
    };
  }

  handleChangeColor = () => {
    this.setState({ color: "yellow" });
  };

  handleIncrementCout = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrementCout = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleChangeInfo = () => {
    this.setState({ name: "Zoro", email: "zoro@gmail.com" });
  };

  render() {
    return (
      <>
        <h1 style={{ color: this.state.color }}>
          Event Handling In Class Components
        </h1>

        <div>
          <h2>Name : {this.state.name}</h2>
          <h2>Email : {this.state.email}</h2>
        </div>

        <div>
          <h2>Count : {this.state.count}</h2>
        </div>

        <button onClick={() => this.handleIncrementCout()}>
          Increment Count
        </button>
        <button onClick={() => this.handleDecrementCout()}>
          Decrement Count
        </button>
        <button onClick={() => this.handleChangeColor()}>Change Color</button>
        <button onClick={() => this.handleChangeInfo()}>Update Info</button>
      </>
    );
  }
}

export default App;
