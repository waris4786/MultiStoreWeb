import React from "react";
//component
import Header from "../header/Header";
//dependencies
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

//css
import "../wallets/loadmoney.css";


export default function LoadMoney() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="loadMoneyTemplate">
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
          <div className="loadMoneyCard">
            <h1 className="loadMoneyCard-price">0.00</h1>
            <ArrowDownwardIcon />
            <h2 className="loadMoneyCard-text">
              {t("newBalanceAfterTransfers")}
            </h2>
            <h1 className="loadMoneyCard-price">0.00</h1>
            <div className="loadMoneyCard-btn">
              <Button className="blueBtn">{t("loadMoney")}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
