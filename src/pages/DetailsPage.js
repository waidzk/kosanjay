import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailBreadcrumb from "parts/PageDetailBreadcrumb";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailTitle from "parts/PageDetailTitle";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import itemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Kosan Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailBreadcrumb breadcrumb={breadcrumb}></PageDetailBreadcrumb>
        <section className="flex justify-center m-0">
          <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>
          <section className="w-1/2 ml-5 mr-28 m-0">
            <PageDetailTitle data={itemDetails}></PageDetailTitle>
            <PageDetailDescription data={itemDetails}></PageDetailDescription>
            <BookingForm itemDetails={itemDetails}></BookingForm>
          </section>
        </section>
        <Categories className="mt-0" data={itemDetails.categories}></Categories>
        <Testimony data={itemDetails.testimonial}></Testimony>
        <Footer></Footer>
      </>
    );
  }
}
