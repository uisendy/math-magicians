import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, id }) => (
  <button
    id={id}
    className="calc__btn"
    type={value === '=' ? 'submit' : 'button'}
  >
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
