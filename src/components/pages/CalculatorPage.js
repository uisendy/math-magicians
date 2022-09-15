import React from 'react';
import Calculator from '../calculator/Calculator';
import Header from '../Header';
import NavBar from '../NavBar';
import style from './calculatorPage.module.css';

const CalculatorPage = () => (
  <div>
    <NavBar />
    <div className={style.calc__container}>
      <Header title="Lets do some Maths" />
      <Calculator />
    </div>
  </div>
);

export default CalculatorPage;
