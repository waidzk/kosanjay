import React, { Component } from "react";

import Breadcrumb from "elements/Breadcrumb";

export default class Example extends Component {
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: ""},
      { pageTitle: "Kosan Details", pageHref: "" }
  ];

    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <Breadcrumb data={breadcrumb} />
      </div>
    );
  }
}
