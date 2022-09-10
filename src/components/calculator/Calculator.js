import React, { useState } from 'react';
import Display from './Display';
import Buttons from './Buttons';
import calculate from '../../logic/calculate';
import './calculator.css';
import calcBtn from '../../logic/calculatorButtons';

const Calculator = () => {
  const [displayObj, setDisplayObj] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const handleClick = (e) => {
    setDisplayObj(() => calculate(displayObj, e.target.textContent));
  };

  return (
    <div className="main__container">
      <div className="calc__container">
        <Display displayObj={displayObj} />
        <Buttons calcBtn={calcBtn} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
