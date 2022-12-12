import { Button } from "bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";

export function CounterApp({ value }) {
  const [valueCounter, setValueCounter] = useState(value);

  const handleAdd = () => {
    setValueCounter(valueCounter + 1);
  };
  const handleSubstract = () => {
    setValueCounter(valueCounter - 1);
  };
  const handleReset = () => {
    setValueCounter(0);
  };

  return (
    <div className="CounterApp">
      <h1>CounterApp</h1>
      <h2>{valueCounter}</h2>
      <button className="button button--add" onClick={() => handleAdd()}>
        +1
      </button>
      <button
        className="button button--substract"
        onClick={() => handleSubstract()}
      >
        -1
      </button>
      <button className="button button--reset" onClick={() => handleReset()}>
        Reset
      </button>
    </div>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
