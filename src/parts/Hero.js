import React from "react";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import IconImmigrant from "assets/images/icons/icon-immigrant.png";
import IconLocation from "assets/images/icons/icon-location.png";
import IconKosan from "assets/images/icons/icon-kosan.png";

import Button from "elements/Button";

import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 12,
      behavior: "smooth",
    });
  }

  return (
    <section className="mx-28 mt-5 p-4 font-poppins">
      <div className="flex">
        <div className="flex flex-col w-1/2">
          <h1 className="text-4xl text-accent font-bold mb-2 leading-relaxed">
            Get Your Kosan, <br />
            Quickly and Pricisely
          </h1>
          <p className="text-sm text-slate-400 w-[422px] mb-6">
            We provide what you need to enjoy your stay. It's time to get your
            boarding house quickly and right for you.
          </p>
          <Button
            className="btn px-2 text-white w-48 shadow-md shadow-[#ffc800]"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Get your kosan now
          </Button>
          <div className="flex mt-20">
            <div className="mr-auto">
              <img
                width="36"
                height="36"
                src={IconImmigrant}
                alt={`${props.data.immigrants}`}
              />
              <h6 className="font-semibold text-accent">
                {formatNumber(props.data.immigrants)}{" "}
                <span className="text-slate-400 font-light">immigrants</span>
              </h6>
            </div>
            <div className="mr-auto">
              <img
                width="36"
                height="36"
                src={IconKosan}
                alt={`${props.data.kosan}`}
              />
              <h6 className="font-semibold text-accent">
                {formatNumber(props.data.kosan)}{" "}
                <span className="text-slate-400 font-light">kosan</span>
              </h6>
            </div>
            <div className="mr-auto">
              <img
                width="36"
                height="36"
                src={IconLocation}
                alt={`${props.data.location}`}
              />
              <h6 className="font-semibold text-accent">
                {formatNumber(props.data.location)}{" "}
                <span className="text-slate-400 font-light">location</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src={ImageHero}
            alt="Bed with a books"
            className="absolute z-20 w-[24rem] mr-10 mb-10"
          />
          <img
            src={ImageHeroFrame}
            alt="Bed with a books frame"
            className="absolute z-10 w-[24rem] ml-10 mt-10"
          />
        </div>
      </div>
    </section>
  );
}
