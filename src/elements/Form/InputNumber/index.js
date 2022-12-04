import React from "react";

import propTypes from "prop-types";

export default function Number(props) {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } = props;

  const onChange = (e) => {
    let value = String(e.target.value);

    if (+value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
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
        <span className="label-text text-slate-300">How many night(s)?</span>
      </label>
      <label className="input-group">
        <button className="btn btn-square bg-red-600 border-none" onClick={minus}>
          -
        </button>
        <input
          min={min}
          max={max}
          name={name}
          readOnly
          pattern="[0-9]*"
          placeholder={placeholder ? placeholder : "0"}
          value={`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`}
          onChange={onChange}
          className="input input-bordered w-24"
        />
        <button className="btn btn-square bg-blue-600 border-none" onClick={plus}>
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
  isSuffixPlural: propTypes.bool,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
