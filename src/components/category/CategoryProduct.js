import React, { useState, useEffect } from "react";

//components
import Header from "../header/Header";


//images
import Fashion1 from "../../assets/images/fashion1.jpg";
import Fashion2 from "../../assets/images/fashion2.jpg";
import Fashion3 from "../../assets/images/fashion3.jpg";
import Fashion4 from "../../assets/images/fashion4.jpg";
import Ipad from "../../assets/images/ipad.jpg";
import ts from "../../assets/images/ts.jpg";
import ts2 from "../../assets/images/ts2.jpg";
import ts3 from "../../assets/images/ts3.jpg";
import skrt from "../../assets/images/skrt.jpg";
import skrt2 from "../../assets/images/skrt2.jpg";
import jns from "../../assets/images/jns.jpg";
import jns2 from "../../assets/images/jns2.jpg";
import sr from "../../assets/images/saree.jpg";
import sr2 from "../../assets/images/saree2.jpg";

//dependencies
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Tab, Tabs } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export default function CategoryProduct() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setCategory(categoryData);
    setFilterCategory(categoryData);
  }, []);

  const featureCategory1 = [
    {
      image: Fashion1,
      name: t("fashion"),
      price: "15$",
      type: "shoes",
    },
    {
      image: Fashion2,
      name: t("shoes"),
      price: "15$",
    },
    {
      image: Fashion3,
      name: t("electronic"),
      price: "15$",
    },
    {
      image: Fashion4,
      name: t("beauty"),
      price: "15$",
    },
    {
      image: Fashion1,
      name: t("homeAndGarden"),
      price: "15$",
    },
    {
      image: Fashion4,
      name: t("pharm"),
      price: "15$",
    },
  ];

  const categoryData = [
    {
      image: ts,
      name: t("shoes"),
      price: "15$",
      type: "T-shirt",
    },
    {
      image: ts2,
      name: t("computer"),
      price: "15$",
      type: "T-shirt",
    },
    {
      image: jns,
      name: t("clothSale"),
      price: "15$",
      type: "Jeans",
    },
    {
      image: jns2,
      name: t("ipad"),
      price: "75$",
      type: "Jeans",
    },
    {
      image: sr,
      name: t("pierrerCardin"),
      price: "600$",
      type: "Saree",
    },
    {
      image: sr2,
      name: t("mobile"),
      price: "10$",
      type: "Saree",
    },
    {
      image: skrt2,
      name: t("shoes"),
      price: "15$",
      type: "Skirts",
    },
    {
      image: skrt,
      name: t("cloths"),
      price: "15$",
      type: "Skirts",
    },

    {
      image: jns2,
      name: t("beauty"),
      price: "15$",
      type: "Jeans",
    },
    {
      image: ts3,
      name: t("beauty"),
      price: "15$",
      type: "T-shirt",
    },

    {
      image: sr2,
      name: t("fashion"),
      price: "15$",
      type: "Saree",
    },
  ];

  const handleChange = (event, newValue) => {
    if (newValue === "T-shirt") {
      let artFilter = category.filter((x) => x.type === newValue);
      setFilterCategory(artFilter);
    } else if (newValue === "Jeans") {
      let artFilter = category.filter((x) => x.type === newValue);
      setFilterCategory(artFilter);
    } else if (newValue === "Skirts") {
      let artFilter = category.filter((x) => x.type === newValue);
      setFilterCategory(artFilter);
    } else if (newValue === "Saree") {
      let artFilter = category.filter((x) => x.type === newValue);
      setFilterCategory(artFilter);
    } else {
      setFilterCategory(categoryData);
    }
  };

  return (
    <div>
      <Header />
      <div className="pageTemplate">
        <div className="container">
          <div
            className="PageBgHeading"
            style={{ backgroundImage: `url(${Ipad})` }}
          >
            <h5 className="PageBgHeading-title">{t("categories")}</h5>
          </div>
          <div>
            <Tabs
              defaultSelectedIndex={1}
              className="categoriesSliderTabs"
              onChange={handleChange}
            >
              <Tab value="all" label="all"></Tab>
              <Tab value="T-shirt" label="T-shirt"></Tab>
              <Tab value="Jeans" label="Jeans"></Tab>
              <Tab value="Skirts" label="Skirts"></Tab>
              <Tab value="Saree" label="Saree"></Tab>
            </Tabs>
          </div>
          <ul className="product-Module">
            {filterCategory.length > 0 &&
              filterCategory.map((catItem) => {
                return (
                  <>
                    {" "}
                    <li
                      className="product-Module__list"
                      onClick={() => {
                        if (catItem.imagename === "booking") {
                          navigate("/company", {
                            state: { isBookingApp: true },
                          });
                        } else {
                          navigate("/categorydetails", {
                            state: { categoryDetails: catItem },
                          });
                        }
                      }}
                    >
                      <div className="product-box">
                        <div
                          className="product-box__img"
                          style={{ backgroundImage: `url(${catItem.image})` }}
                        ></div>
                        <div className="product-box__info">
                          <div className="product-box__infoTop">
                            <h6 className="product-box__brand">
                              {catItem.name}
                            </h6>
                            <span className="product-box__price">
                              {catItem.price}
                            </span>
                          </div>
                          <h5 className="product-box__name">
                            3 {t("boxSimple")}
                          </h5>
                        </div>
                      </div>
                    </li>
                  </>
                );
              })}
          </ul>
          <div className="categoryMainListModule">
            <h6 className="module-heading__title">
              {t(location.state.featureCategory.name)}
            </h6>
            <div className="categoryMainList">
              {featureCategory1.map((cat) => {
                return (
                  <>
                    <div
                      className="featuredcategory-box"
                      style={{ backgroundImage: `url(${cat.image})` }}
                    ></div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
