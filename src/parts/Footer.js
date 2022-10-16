import React from "react";

import Button from "elements/Button";
import BrandIcon from "parts/iconText";

export default function Footer() {
  return (
    <footer className="w-full mt-5">
    <hr className="w-full" />
    <div className="mx-28 mt-5 p-5 font-poppins">
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-center w-1/2">
          <BrandIcon/>
          <span className="text-sm text-slate-400">Enjoy your stay~</span>
        </div>
        <div className="grid col-span-3 grid-cols-3">
          <div className="mr-5">
            <h6 className="text-md mb-4 font-semibold text-accent">For Beginners</h6>
            <ul className='text-slate-400'>
              <li>
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li>
                <Button type="link" href="/booking">
                  Book a Kosan
                </Button>
              </li>
              <li>
                <Button type="link" href="/payments">
                  Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="mr-5">
            <h6 className="text-md mb-4 font-semibold text-accent">Explore us</h6>
            <ul className='text-slate-400'>
              <li>
                <Button type="link" href="/register">
                  About
                </Button>
              </li>
              <li>
                <Button type="link" href="/booking">
                  Privacy Policy
                </Button>
              </li>
              <li>
                <Button type="link" href="/payments">
                Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="mr-5">
            <h6 className="text-md mb-4 font-semibold text-accent">Getting Touch</h6>
            <ul className='text-slate-400'>
              <li>
                <Button isExternal type="link" href="mailto:support@staycation.co.id">
                support@staycation.co.id
                </Button>
              </li>
              <li>
                <Button type="link" href="tel:+6281111222211">
                0811-1122-2211
                </Button>
              </li>
              <li>
                <span>
                Staycation Dy. Bandung
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
