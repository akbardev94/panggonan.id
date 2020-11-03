import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "elements/Form";

import logoBni from "assets/image/img/logo-bni.png";
import logoBankJatim from "assets/image/img/logo-bankjatim.png";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">

          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran:</p>
              <p>Tax: {tax}%</p>
              <p>Sub total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBni} alt="Bank Nasional Indonesia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Nasional Indonesia</dd>
                    <dd>030 869 493 2</dd>
                    <dd>Anas Maulana Akbar</dd>
                  </dl>
                </div>
              </div>
              
              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoBankJatim} alt="Bank Jawa Timur" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Jawa Timur</dd>
                    <dd>004 671 120 3</dd>
                    <dd>Anas Maulana Akbar</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
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
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
