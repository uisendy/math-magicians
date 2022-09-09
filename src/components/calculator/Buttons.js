import React from 'react';
import Button from './Button';

const Buttons = ({ calcBtn, handleClick }) => (
  <div className="button__container">
    <div className="calc-keys">
      {calcBtn.map((calcKeys, index) => (
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
