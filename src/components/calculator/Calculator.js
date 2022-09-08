import React, { Component } from 'react';
import Buttons from './Buttons';
import './calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const operandsAndOperators = [
      'AC',
      '+/-',
      '%',
      '/',
      '7',
      '8',
      '9',
      'X',
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
    return (
      <div className="main__container">
        <div className="calc__container">
          <div className="display__area">
            <p className="disp__result">0</p>
          </div>
          <div className="button__container">
            <Buttons operandsAndOperators={operandsAndOperators} />
          </div>
        </div>
      </div>
    );
  }
}
