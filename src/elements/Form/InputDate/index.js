import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";

import { DateRange } from "react-date-range";

import "./index.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import formatDate from "utils/formatDate";
import iconCalendar from "assets/images/icons/ic_calendar.svg";

export default function Date(props) {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name: name,
      },
    };
    props.onChange(target);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const refDate = useRef(null);
  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  return (
    <div ref={refDate} className={["form-control", props.outerClassName].join(" ")}>
      <label className="label">
        <span className="label-text text-slate-300">Pick date</span>
      </label>
      <label className="input-group">
        <span className="bg-blue-900">
          <img src={iconCalendar} alt="icon calendar" className="w-32" />
        </span>
        <input
          readOnly
          type="text"
          className="input input-bordered w-64"
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
        />
      </label>

      {isShowed && (
        <DateRange
          className="shadow-md absolute z-10 date-range-wrapper"
          editableDateInputs={true}
          onChange={datePickerChange}
          moveRangeOnFirstSelection={false}
          onRangeFocusChange={check}
          ranges={[value]}
        />
      )}
    </div>
  );
}

Date.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
