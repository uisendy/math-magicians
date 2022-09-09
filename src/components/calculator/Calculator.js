import React, { Component } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import calculate from '../../logic/calculate';
import './calculator.css';
import calcBtn from '../../logic/calculatorButtons';

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
    return (
      <div className="main__container">
        <div className="calc__container">
          <Display display={this.state} />
          <Buttons calcBtn={calcBtn} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
