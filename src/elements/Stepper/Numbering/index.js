import React from "react";

import propTypes from "prop-types";

export default function Numbering({ style, className, data, current }) {
  const KeysOfData = Object.keys(data);
  const indexStep = KeysOfData.indexOf(current);

  return (
    <div className="flex justify-center">
      <ul className={["steps", className].join(" ")} style={style}>
        {KeysOfData.map((list, index) => {
          let isActive = list === current ? "step-primary" : "";
          let isDone = index < indexStep  ? "step-success" : "";
          if (index + 1 === KeysOfData.length) {
            isActive = "";
            return null;
          }

          return (
            <li
              key={`list-${index}`}
              className={["step", isActive, isDone].join(" ")}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}

Numbering.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
};
