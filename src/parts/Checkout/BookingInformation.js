import React from "react";

import InputText from "elements/Form/InputText";

export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;

  return (
    <section className="flex justify-center items-center w-full m-0">
      <div className="w-1/2 flex justify-end p-5">
      <div className="w-96">
        <img src={`${process.env.REACT_APP_HOST}/${ItemDetails.imageId[0].imageUrl}`} alt={ItemDetails.name} className="w-96"/>
        <div className="flex justify-between pt-2">
          <div className="flex flex-col text-accent">
            <span className="font-semibold">{ItemDetails.name}</span>
            <span className="text-slate-400">
              {ItemDetails.city}, {ItemDetails.country}
            </span>
          </div>
          <div className="text-accent">
            <span className="font-semibold">
              IDR.{+checkout.duration * ItemDetails.price}{" "}
              <span className="font-normal text-slate-400">per</span>{" "}
              {checkout.duration} {ItemDetails.unit}
              {+checkout.duration > 1 ? "s" : ""}
            </span>
          </div>
        </div>
        </div>
      </div>
      
      <div className="w-1/2 p-5">
        <label htmlFor="firstName">First Name</label>
        <InputText
          id="firstName"
          name="firstName"
          value={data.firstName}
          onChange={props.onChange}
        />

        <label htmlFor="lastName">Last Name</label>
        <InputText
          id="lastName"
          name="lastName"
          value={data.lastName}
          onChange={props.onChange}
        />

        <label htmlFor="email">Email</label>
        <InputText
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={props.onChange}
        />

        <label htmlFor="phone">Phone Number</label>
        <InputText
          id="phone"
          name="phone"
          type="tel"
          value={data.phone}
          onChange={props.onChange}
        />
      </div>
    </section>
  );
}
