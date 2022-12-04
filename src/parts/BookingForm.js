import React, { Component } from "react";

import propTypes from "prop-types";

import InputNumber from "elements/Form/InputNumber";
import InputDate from "elements/Form/InputDate";
import Button from "elements/Button";

export default class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state);
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;
    return (
      <section className="border m-0 border-black p-5 rounded-md">
        <h2 className="text-lg">Start from <span className="text-green-300">IDR.{itemDetails.price}</span>/ {itemDetails.unit}</h2>
        <div className="flex p-2">
          <InputNumber
            max={30}
            suffix={" night"}
            isSuffixPlural
            onChange={this.updateData}
            name="duration"
            value={data.duration}
            outerClassName="m-2"
          />
          <InputDate outerClassName="m-2" onChange={this.updateData} name="date" value={data.date} />
        </div>
        <span className="text-accent">TOTAL : IDR.{itemDetails.price * data.duration} <span className="text-slate-300">per</span> {data.duration} {itemDetails.unit}</span>
        <Button className="btn text-white" hasShadow isPrimary isBlock>Continue to Book</Button>
      </section>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};
