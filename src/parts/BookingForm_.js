import React, { useState } from "react";

import InputNumber from "elements/Form/InputNumber";
import InputDate from "elements/Form/InputDate";
import Button from "elements/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { checkoutBooking } from "store/actions/checkout";

function BookingForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  const page = useSelector((state) => state.page);
  const { id } = useParams();

  const itemDetails = page?.[id] || [];

  function updateData(event) {
    let startDate, endDate, duration;
    if (event.target.name === "duration") {
      startDate = new Date(data.date.startDate);
      endDate = new Date(data.date.startDate);
      endDate.setDate(startDate.getDate() + +event.target.value);
      endDate = new Date(endDate);

      duration = endDate.getDate() - startDate.getDate();
    } else if (event.target.name === "date") {
      startDate = new Date(event.target.value.startDate);
      endDate = new Date(event.target.value.endDate);
      duration = new Date(endDate - startDate).getDate();
    }

    setData((prev) => ({
      ...prev,
      date: {
        ...prev.date,
        startDate,
        endDate,
      },
      duration,
    }));
  }

  function startBooking() {
    dispatch(
      checkoutBooking({
        _id: itemDetails._id,
        duration: data.duration,
        date: {
          startDate: data.date.startDate,
          endDate: data.date.endDate,
        },
      })
    );
    navigate("/checkout");
  }

  return (
    <section className="border m-0 border-black p-5 rounded-md">
      <h2 className="text-lg">
        Start from{" "}
        <span className="text-green-300">IDR.{itemDetails.price}</span>/{" "}
        {itemDetails.unit}
      </h2>
      <div className="flex p-2">
        <InputNumber
          max={30}
          suffix={" night"}
          isSuffixPlural
          onChange={updateData}
          name="duration"
          value={data.duration}
          outerClassName="m-2"
        />
        <InputDate
          outerClassName="m-2"
          onChange={updateData}
          name="date"
          value={data.date}
        />
      </div>
      <span className="text-accent">
        TOTAL : IDR.{itemDetails.price * data.duration}{" "}
        <span className="text-slate-300">per</span> {data.duration}{" "}
        {itemDetails.unit}
      </span>
      <Button
        className="btn text-white"
        hasShadow
        isPrimary
        isBlock
        onClick={startBooking}
      >
        Continue to Book
      </Button>
    </section>
  );
}

export default BookingForm;
