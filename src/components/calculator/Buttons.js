import React from 'react';
import Button from './Button';

const Buttons = ({ operandsAndOperators, handleClick }) => (
  <div className="button__container">
    <div className="calc-keys">
      {operandsAndOperators.map((calcKeys, index) => (
        <Button
          value={calcKeys}
          id={index}
          key={calcKeys}
          handleClick={handleClick}
        />
      ))}
    </div>
  </div>
);

export default Buttons;
