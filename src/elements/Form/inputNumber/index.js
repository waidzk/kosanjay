import React, { useState } from "react";

import propTypes from "prop-types";

export default function Number(props) {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } = props;

  const [inputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  const onChange = (e) => {
    let value = String(e.target.value);
    if (prefix) value = value.replace(prefix);
    if (suffix) value = value.replace(suffix);

    const patternNumeric = new RegExp("[0-9]*");
    const isNumeric = patternNumeric.test(value);

    if (isNumeric && +value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
      setInputValue(`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`);
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["form-control", props.outerClassName].join(" ")}>
      <label className="label">
        <span className="label-text">Enter amount</span>
      </label>
      <label className="input-group">
        <button className="btn btn-square" onClick={minus}>
          -
        </button>
        <input
          min={min}
          max={max}
          name={name}
          pattern="[0-9]*"
          placeholder={placeholder ? placeholder : "0"}
          value={String(inputValue)}
          onChange={onChange}
          className="input input-bordered"
        />
        <button className="btn btn-square" onClick={plus}>
          +
        </button>
      </label>
    </div>
  );
}

Number.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  isSuffixplural: propTypes.bool,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
