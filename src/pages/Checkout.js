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

import ItemDetails from "json/itemDetails.json";

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

  render() {
    const { data } = this.state;
    const { checkout } = this.props;
    
    if(!checkout)
    return<div className="w-full h-screen flex flex-col justify-center items-center"> 
      <h1 className="text-xl text-accent mb-2">Pilih Kosan dulu</h1>
      <Button className="btn btn-primary text-accent" type="link" href="/">Back</Button>
    </div>
    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
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
            ItemDetails={ItemDetails}
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
                    href={`/properties/${ItemDetails._id}`}
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
                        onClick={nextStep}
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
})

export default connect(mapStateToProps)(Checkout);