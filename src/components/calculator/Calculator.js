import React, { Component } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import calculate from '../../logic/calculate';
import './calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.obj = {
      total: '',
      next: '',
      operation: '',
    };
    this.state = this.obj;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState((state) => calculate(state, e.target.textContent));
  };

  render() {
    const operandsAndOperators = [
      'AC',
      '+/-',
      '%',
      '/',
      '7',
      '8',
      '9',
      'x',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '0',
      '.',
      '=',
    ];
    console.log(this.state);
    return (
      <div className="main__container">
        <div className="calc__container">
          <Display display={this.state} />
          <Buttons
            operandsAndOperators={operandsAndOperators}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}
