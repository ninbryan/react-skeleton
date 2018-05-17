import React from "react";
import pkg from "../package.json";
class App extends React.Component {
  state = {
    ...pkg,
    counter: 0
  };

  increment = () => this.setState({ counter: this.state.counter + 1 });

  decrement = () => this.setState({ counter: this.state.counter - 1 });

  render() {
    const { name, counter } = this.state;
    return (
      <>
        <h1>{name}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <div>{counter}</div>
      </>
    );
  }
}

console.log(App);
debugger;

export default App;
