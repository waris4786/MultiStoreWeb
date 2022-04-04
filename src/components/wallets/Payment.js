import React from "react";
//component
import Header from "../header/Header";
//dependencies
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

//css
import "../wallets/payment.css";

export default function Payment() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="paymentTemplate">
        <div className="container">
          <div className="templateHeading">
            <span
              className="backIcon"
              onClick={() => {
                navigate("/wallet");
              }}
            >
              <ArrowBackIcon />
            </span>
            <h1 className="templateTitle">{t("loadMoneyToWallet")}</h1>
          </div>
          <div className="paymentCard">
            <p className="paymentCard-text">{t("topay")}</p>
            <div className="paymentCard-code">
              <QRCode value="hey" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
