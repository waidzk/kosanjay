import React, { useCallback, useEffect } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import PageDetailBreadcrumb from "parts/PageDetailBreadcrumb";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm_";
import Activities from "parts/Activities";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchPage } from "store/actions/page";

function DetailsPage_() {
  const page = useSelector((state) => state.page);
  const { id } = useParams();
  const dispatch = useDispatch();

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "/" },
    { pageTitle: "Kosan Details", pageHref: "" },
  ];

  const fnLoadPage = useCallback(async (id) => {
    if (!page[id]) {
      await dispatch(fetchPage(`/detail-page/${id}`, id));
    }
  }, []);

  useEffect(() => {
    window.title = "Details Page";
    window.scrollTo(0, 0);

    fnLoadPage(id);
  }, [id]);

  if (!page[id]) return null;

  return (
    <>
      <Header />
      <PageDetailBreadcrumb breadcrumb={breadcrumb} />
      <section className="flex justify-center m-0">
        <FeaturedImage />
        <section className="w-1/2 ml-5 mr-28 m-0">
          <PageDetailTitle />
          <PageDetailDescription data={page[id]} />
          <BookingForm />
        </section>
      </section>
      <Activities className="mt-0" data={page[id].activityId} />
      <Testimony data={page[id].testimonial} />
      <Footer />
    </>
  );
}

export default DetailsPage_;
