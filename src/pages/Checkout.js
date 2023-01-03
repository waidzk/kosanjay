import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";
import Button from "elements/Button";

import Stepper from "elements/Stepper";
import Numbering from "elements/Stepper/Numbering";
import MainContent from "elements/Stepper/MainContent";
import Meta from "elements/Stepper/Meta";
import Controller from "elements/Stepper/Controller";

import BookingInformation from "parts/Checkout/BookingInformation";
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";

import { submitBooking } from "store/actions/checkout";

class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  _Submit = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;

    const payload = new FormData();
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("email", data.email);
    payload.append("phoneNumber", data.phone);
    payload.append("image", data.proofPayment[0]);
    payload.append("bankFrom", data.bankName);
    payload.append("accountHolder", data.bankHolder);
    payload.append("idItem", checkout._id);
    payload.append("duration", checkout.duration);
    payload.append("bookingStartDate", checkout.date.startDate);
    payload.append("bookingEndDate", checkout.date.endDate);
    // payload.append("bankId", checkout.bankId);

    this.props.submitBooking(payload).then(() => {
      nextStep();
    });
  };

  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;
    if (!checkout)
      return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <h1 className="text-xl text-accent mb-2">Pilih Kosan dulu</h1>
          <Button
            className="btn btn-primary text-accent"
            type="button"
            onClick={() => this.props.history.goBack()}
          >
            Back
          </Button>
        </div>
      );
    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: (
          <Payment
            data={data}
            ItemDetails={page[checkout._id]}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };

    return (
      <>
        <Header isCentered />

        <Stepper steps={steps} initialStep="">
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering data={steps} current={CurrentStep} />

              <Meta data={steps} current={CurrentStep} />

              <MainContent data={steps} current={CurrentStep} />

              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Button
                        className="btn mb-3"
                        type="button"
                        isPrimary
                        isBlock
                        hasShadow
                        onClick={nextStep}
                      >
                        Continue to Book
                      </Button>
                    )}
                  <Button
                    className="btn btn-outline btn-primary"
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${checkout._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "payment" && (
                //fade
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" && (
                      //fade
                      <Button
                        className="btn mb-3"
                        type="button"
                        isPrimary
                        isBlock
                        hasShadow
                        onClick={() => this._Submit(nextStep)}
                      >
                        Continue to Book
                      </Button>
                    )}
                  <Button
                    className="btn btn-outline btn-primary"
                    type="button"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                </Controller>
              )}

              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn btn-outline btn-primary"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href="/"
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page,
});

export default connect(mapStateToProps, { submitBooking })(Checkout);
