import React from "react";

const Options = ({ options, selectedOption, onOptionChange }) => {
  return (
    <div className="options">
      {options.map((option, index) => (
        <div key={index} className="option">
          <input
            type="radio"
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={onOptionChange}
            className="option-input"
          />
          <label className="option-label">{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Options;
