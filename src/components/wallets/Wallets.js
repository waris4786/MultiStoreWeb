import React, { useState } from "react";
//component
import Header from "../header/Header";
//dependencies
import { TextField, Button } from "@material-ui/core";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import StoreIcon from "@mui/icons-material/Store";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
//css
import "../wallets/wallets.css";

export default function Wallets() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div>
      {console.log("Csll")}
      <Header />
      <div className="walletTamplate">
        <div className="container">
          <div className="walletIcons">
            <div
              className="walletIconsBox"
              onClick={() => {
                navigate("/payment");
              }}
            >
              <PaymentIcon />
              <h6 className="walletIconsBox-title">
                {t("paymentForPurchase")}
              </h6>
            </div>
            <div
              className="walletIconsBox"
              onClick={() => {
                navigate("/loadmoney");
              }}
            >
              <LocalAtmIcon />
              <h6 className="walletIconsBox-title">{t("loadMoney")}</h6>
            </div>
            <div
              className="walletIconsBox"
              onClick={() => {
                navigate("/creaditcard");
              }}
            >
              <CreditScoreIcon />
              <h6 className="walletIconsBox-title">{t("creaditCardOorder")}</h6>
            </div>
            <div
              className="walletIconsBox"
              onClick={() => {
                navigate("/shops");
              }}
            >
              <StoreIcon />
              <h6 className="walletIconsBox-title">{t("shop")}</h6>
            </div>
          </div>

          <div className="walletBtns">
            <Button
              className="blueBtn"
              onClick={() => {
                navigate("/paymenthistory");
              }}
            >
              {t("paymentHistory")}
            </Button>
          </div>

          <div className="moneyBlock">
            <div className="moneyBlock-heading">
              <h2 className="moneyBlock-title">{t("moneyBalances")}</h2>
              <h3 className="moneyBlock-price">67.50</h3>
            </div>
            <div className="walletBtns">
              <Button onClick={() => setShow(true)} className="blueBtn">
                {t("moneyTransfer")}
              </Button>
            </div>
          </div>

          <div>
            {show ? (
              <div className="ContactUsModule">
                <h6 className="ContactUsModule-title"> {t("sendMoney")}</h6>
                <TextField
                  required
                  id="Amount creadits"
                  className="inputStyle"
                  name="Amount creadits"
                  label={t("amountCreadits")}
                  fullWidth
                  margin="dense"
                />
                <TextField
                  required
                  id="User"
                  name="User"
                  label={t("user")}
                  type="email"
                  className="inputStyle"
                  fullWidth
                  margin="dense"
                />
                <TextField
                  required
                  id="Transfer purpose"
                  name="Transfer purpose"
                  label={t("transferPurpose")}
                  type="Phone"
                  className="inputStyle"
                  fullWidth
                  margin="dense"
                />
                <div className="formBtn">
                  <Button onClick={() => setShow(false)} className="blueBtn">
                    {t("cancel")}
                  </Button>
                  <Button className="blueBtn"> {t("send")}</Button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
