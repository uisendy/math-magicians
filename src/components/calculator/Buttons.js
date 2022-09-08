import React from 'react';
import Button from './Button';

const Buttons = ({ operandsAndOperators }) => (
  <div className="calc-keys">
    {operandsAndOperators.map((calcKeys, index) => (
      <Button value={calcKeys} id={index} key={calcKeys} />
    ))}
  </div>
);

export default Buttons;
