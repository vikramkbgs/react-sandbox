import React from 'react';
import './Style/Calculator.css'

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  add(previous) {
    this.setState({
      value: previous + 2,
    });
    console.log(previous);
  }
  sqaure(previous) {
    this.setState({
      value: previous * previous,
    });
    console.log(previous);
  }
  double(previous) {
    this.setState({
      value: previous * 2,
    });
    console.log(previous);
  }

  divide(previous) {
    this.setState({
      value: previous / 2,
    });
    console.log(previous);
  }
  substrat(previous) {
    this.setState({
      value: previous - 2,
    });
    console.log(previous);
  }

  render() {
    return (
      <div className="Calculator-box">
        <h2>Calculator 2S</h2>
        <hr />
        <div className="Calculator-display">{this.state.value}</div>
        <div className="Calculator-button">
          <button onClick={() => this.add(this.state.value)}>add2!</button>
          <button onClick={() => this.sqaure(this.state.value)}>Square!</button>
          <button onClick={() => this.double(this.state.value)}>Double!</button>
          <button onClick={() => this.divide(this.state.value)}>Divide!</button>
          <button onClick={() => this.substrat(this.state.value)}>Substract!</button>
        </div>
      </div>
    );
  }
}

export default Calculator;