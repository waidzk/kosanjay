import React, { useRef } from "react";
import propTypes from "prop-types";

export default function File(props) {
  const {
    value,
    placeholder,
    name,
    accept,
    prepend,
    append,
    outerClassName,
    inputClassName,
  } = props;

  const refInputFile = useRef(null);

  return (
    <div className={["form-control", outerClassName].join(" ")}>
      <label className="input-group">
        {prepend && <span>{prepend}</span>}
        <input
          accept={accept}
          ref={refInputFile}
          name={name}
          type="file"
          className={["input input-bordered hidden", inputClassName].join(" ")}
          value={value}
          onChange={props.onChange}
        />
        <input 
            onClick={() => refInputFile.current.click()}
            defaultValue={value}
            placeholder={placeholder}
            className={["input input-bordered", inputClassName].join(" ")}
        />
        {append && <span>{append}</span>}
      </label>
    </div>
  );
}

File.defaultProps = {
  placeholder: "Browse a file...",
};

File.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
