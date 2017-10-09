import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Input = ({type="text", name, placeholder, value, onChange,...other}) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(name, e.target.value)}
    { ...other }
  />
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;