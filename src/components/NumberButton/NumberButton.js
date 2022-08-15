import React from 'react';
import PropTypes from 'prop-types';
import './NumberButton.css';
import { buttonClicked } from '../../features/number/numberSlice';
import { useDispatch } from 'react-redux';


const NumberButton = ({ label, ishighlighted, isSelected }) => {
  const dispatch = useDispatch();
  let style = ""

  if (ishighlighted) {
    style += "highlighted"
  }

  if (isSelected) {
    style += " selected"
  }

  return (
    <button
      className={`NumberButton ${style}`}
      onClick={() => dispatch(buttonClicked(label))}
    >
      {label}
    </button>
  )
};

NumberButton.propTypes = {
  label: PropTypes.number.isRequired,
  ishighlighted: PropTypes.bool,
  isSelected: PropTypes.bool
};

export default NumberButton;
