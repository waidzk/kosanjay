import React from "react";

import { InputText, InputFile } from "elements/Form";

import logoBca from "assets/images/logo-bca.jpg";
import logoBni from "assets/images/logo-bni.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;
  return (
    <section className="flex justify-center items-center">
      <div className="w-1/2">
        <p>Transfer Pembayaran : </p>
        <p>Tax: {tax}%</p>
        <p>Sub Total: IDR.{subTotal}</p>
        <p class="text-xl font-bold">Total: IDR.{grandTotal}</p>
        <div className="flex items-center">
          <img src={logoBca} alt="BCA" />
          <div className="">
            <p>Bank Central Asia</p>
            <p>228 11921224 12324</p>
            <p>Kosan Jaya Indonesia</p>
          </div>
        </div>
        <div className="flex items-center">
          <img src={logoBni} alt="BNI" />
          <div className="">
            <p>Bank Negara Indonesia</p>
            <p>212 112224 13325</p>
            <p>Kosan Jaya Indonesia</p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <label htmlFor="proofPayment">Upload Bukti Transfer</label>
        <InputFile
          accept="image/*"
          id="proofPayment"
          name="proofPayment"
          value={data.proofPayment}
          onChange={props.onChange}
        />

        <label htmlFor="bankName">Asal Bank</label>
        <InputText
          id="bankName"
          name="bankName"
          type="text"
          value={data.bankName}
          onChange={props.onChange}
        />

        <label htmlFor="bankHolder">Nama Pengirim</label>
        <InputText
          id="bankHolder"
          name="bankHolder"
          type="text"
          value={data.bankHolder}
          onChange={props.onChange}
        />
      </div>
    </section>
  );
}
