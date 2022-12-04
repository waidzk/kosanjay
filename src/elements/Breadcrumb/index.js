import React from "react";

import propTypes from "prop-types";
import Button from "elements/Button";

export default function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumb" className="breadcrumbs text-sm">
        <ul>
          {props.data.map((item, index) => {
            return (
              <li
                key={`breadcrumb-${index}`}
                className={`breadcrumb-item${
                  index === props.data.length - 1 ? " active" : ""
                }`}
              >
                {index === props.data.length - 1 ? (
                  item.pageTitle
                ) : (
                  <Button type="link" href={item.pageHref}>
                    {item.pageTitle}
                  </Button>
                )}
              </li>
            );
          })}
        </ul>
    </nav>
  );
}

Breadcrumb.propTypes = {
  data: propTypes.array,
};
