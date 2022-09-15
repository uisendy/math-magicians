import React from 'react';

const Button = ({ value, id, handleClick }) => (
  <button id={id} className="calc__btn" type="button" onClick={handleClick}>
    {value}
  </button>
);

export default Button;
