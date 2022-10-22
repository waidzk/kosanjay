import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";

import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

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
    <div className={["form-control", props.outerClassName].join(" ")}>
      <label className="input-group input-group-md">
        <span>
          <img src={iconCalendar} alt="icon calendar" />
        </span>
        <input
          readOnly
          type="text"
          placeholder={placeholder}
          value={displayDate}
          className="input input-bordered input-md"
          onClick={() => setIsShowed(!isShowed)}
        />
        {isShowed && (
            <div className="date-range-wrapper">
                <DateRange 
                    editableDateInputs={true}
                    onChange={datePickerChange}
                    moveRangeOnFirstSelection={false}
                    onRangeFocusChange={check}
                    ranges={[value]}
                />
            </div>
        )}
      </label>
    </div>
  );
}

Date.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
