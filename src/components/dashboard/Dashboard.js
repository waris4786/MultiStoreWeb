import React, { useState, useEffect } from "react";
//css
import "./dashboard.css";
//dependencies
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTranslation } from "react-i18next";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { useNavigate } from "react-router-dom";
import GrirlsShoes from "../../assets/images/girls.jpg";
import Computer from "../../assets/images/computer.jpg";
import Mobile from "../../assets/images/mobile.jpg";
import Cloths from "../../assets/images/cloths.jpg";
import ClothSale from "../../assets/images/clothSale.jpg";
import Ipad from "../../assets/images/ipad.jpg";
import FoxHomeImage from "../../assets/images/foxHome.jpg";
import CafeJoe from "../../assets/images/cafejoe.jpg";
import Shoes from "../../assets/images/shoes.jpg";
import brownhorse2 from "../../assets/images/brownhorse2.jpg";
import Shoes1 from "../../assets/images/shoes1.jpg";
import Art from "../../assets/images/art.jpg";
import ProductImage from "../../assets/images/product.jpg";

//component
import ChatBot from "../chat/ChatBot";
import Header from "../header/Header";

export default function Dashboard() {
  const [category, setCategory] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation();

 

  const vandorsData = [
    {
      image: FoxHomeImage,
      name: t("foxHome"),
      value: 0,
    },
    {
      image: CafeJoe,
      name: t("cafeJoe"),
      value: 1,
    },
    {
      image: FoxHomeImage,
      name: t("foxHome"),
      value: 0,
    },
    {
      image: CafeJoe,
      name: t("cafeJoe"),
      value: 1,
    },
    {
      image: FoxHomeImage,
      name: t("foxHome"),
      value: 0,
    },
    {
      image: CafeJoe,
      name: t("cafeJoe"),
      value: 1,
    },
    {
      image: FoxHomeImage,
      name: t("foxHome"),
      value: 0,
    },
    {
      image: CafeJoe,
      name: t("cafeJoe"),
      value: 1,
    },
  ];

  const cashBack = [
    {
      name: t("promo"),
      discount: "70%",
    },
    {
      name: t("cupons"),
      discount: "50%",
    },
    {
      name: t("cupons"),
      discount: "50%",
    },
  ];

  const categoryData = [
    {
      image: brownhorse2,
      imagename: "booking",
      name: t("booking"),
      price: "15$",
      type: "shoes",
    },
    {
      image: GrirlsShoes,
      name: t("shoes"),
      price: "15$",
      type: "shoes",
    },

    {
      image: Computer,
      name: t("computer"),
      price: "15$",
      type: "electronic",
    },

    {
      image: ClothSale,
      name: t("clothSale"),
      price: "15$",
      type: "cloths",
    },

    {
      image: Ipad,
      name: t("ipad"),
      price: "75$",
      type: "electronic",
    },
    {
      image: Shoes1,
      name: t("pierrerCardin"),
      price: "600$",
      type: "shoes",
    },

    {
      image: Mobile,
      name: t("mobile"),
      price: "10$",
      type: "electronic",
    },

    {
      image: Shoes,
      name: t("shoes"),
      price: "15$",
      type: "shoes",
    },

    {
      image: Cloths,
      name: t("cloths"),
      price: "15$",
      type: "cloths",
    },
  ];

  /**
   * Added category to cart
   */
  const handleFavChange = () => {
    // let temp = [{ name: "test" }];
    // dispatch({
    //   type: ADD_TO_CART,
    //   payload: temp,
    // });
  };

  useEffect(() => {
    setCategory(categoryData);
    setFilterCategory(categoryData);
  }, []);

  /**
   * handle tab change
   * @param {*} event
   * @param {*} newValue
   */
  const handleChange = (event, newValue) => {
    if (newValue === "shoes") {
      let artFilter = category.filter((x) => x.type === newValue);
      setFilterCategory(artFilter);
    } else if (newValue === "electronic") {
      let artFilter = category.filter((x) => x.type === newValue);
      setFilterCategory(artFilter);
    } else if (newValue === "cloths") {
      let artFilter = category.filter((x) => x.type === newValue);
      setFilterCategory(artFilter);
    } else {
      setFilterCategory(categoryData);
    }
  };

  return (
    <>
      <div className="dashboard-tamplate">
        <Header />
    
        <div className="container">
          <div className="block-slider">
            <div className="module-heading">
              <div
                className="balanceBox"
                style={{
                  backgroundImage: "url(" + Art + ")",
                }}
              >
                <div className="balanceBoxInner">
                  <p className="balanceBoxTitle">{t("yourBalance")}</p>
                  <h6 className="balanceBoxprice">$ 2000</h6>
                </div>
              </div>

              <div className="caseback-center">
                <ScrollingCarousel>
                  {cashBack.length > 0 &&
                    cashBack.map((item) => {
                      return (
                        <div
                          className="caseback-box"
                          style={{
                            backgroundImage: "url(" + Shoes1 + ")",
                          }}
                        >
                          <div className="caseback-boxInner">
                            <h4 className="casebackBox-Title">
                              {t("cashback")}
                            </h4>
                            <h5 className="casebackBox-subTitle">
                              {item.name}
                            </h5>
                            <h6 className="casebackBox-offer">
                              {t("upto")} <span>{item.discount}</span>
                            </h6>
                          </div>
                        </div>
                      );
                    })}
                </ScrollingCarousel>
              </div>

              <div className="row align-items-center">
                <div className="col-7">
                  <h6 className="module-heading__title">
                    {t("featuredVandors")}
                  </h6>
                </div>
                <div
                  className="col-5 text-right"
                  onClick={() => {
                    navigate("/allvandors");
                  }}
                >
                  <div className="module-heading__link">{t("allvandors")}</div>
                </div>
              </div>
            </div>
            <ScrollingCarousel>
              <ul className="categoryList">
                {vandorsData.length > 0 &&
                  vandorsData.map((item) => {
                    return (
                      <>
                        {" "}
                        <li
                          onClick={() => {
                            navigate("/vandordetails", {
                              state: { vandors: item },
                            });
                          }}
                          className="categoryList__block"
                        >
                          <div className="category-box text-center">
                            <div className="category-box__img">
                              <img
                                src={item.image}
                                className="img-fluid"
                                alt="My Awesome"
                              />
                            </div>
                            <h6 className="category-box__title">{item.name}</h6>
                          </div>
                        </li>
                      </>
                    );
                  })}
              </ul>
            </ScrollingCarousel>
          </div>
          <ScrollingCarousel>
            <Tabs
              defaultSelectedIndex={0}
              className="categoriesSliderTabs"
              onChange={handleChange}
            >
              <Tab value="all" label={t("all")}>
                All
              </Tab>
              <Tab value="shoes" label={t("shoes")}>
                Shoes
              </Tab>
              <Tab value="electronic" label={t("electronic")}>
                Art
              </Tab>
              <Tab value="cloths" label={t("cloths")}>
                Art
              </Tab>
            </Tabs>
          </ScrollingCarousel>

          <div className="product-block">
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
                          >
                            <div className="product-box__likeBtn">
                              <FavoriteBorderOutlinedIcon
                                onClick={() => handleFavChange()}
                              />
                            </div>
                            <div className="product-box__discount">
                              <span className="product-box__off">45%</span>
                            </div>
                          </div>
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
                              3 {t("boxSimple")}{" "}
                            </h5>
                          </div>
                        </div>
                      </li>
                    </>
                  );
                })}
            </ul>

            <div className="featured-product">
              <div className="module-heading">
                <div className="row align-items-center">
                  <div className="col-12">
                    <h6 className="module-heading__title">
                      {t("featuredCategories")}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="allCategory">
                <ScrollingCarousel>
                  <div
                    className="featuredProduct-box"
                    style={{ backgroundImage: `url(${ProductImage})` }}
                    onClick={() => {
                    navigate("/categorylist");
                  }}
                  >
                    <h5 className="featuredProduct-box__title">
                      {t("fashion")}
                    </h5>
                  </div>
                  <div
                    className="featuredProduct-box"
                    style={{ backgroundImage: `url(${ProductImage})` }}
                    onClick={() => {
                    navigate("/categorylist");
                  }}
                  >
                    <h5 className="featuredProduct-box__title">
                      {t("fashion")}
                    </h5>
                  </div>
                </ScrollingCarousel>
              </div>
            </div>
            <ChatBot />
          </div>
        </div>
      </div>
    </>
  );
}
