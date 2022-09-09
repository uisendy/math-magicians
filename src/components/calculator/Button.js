import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, id, handleClick }) => (
  <button id={id} className="calc__btn" type="button" onClick={handleClick}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
