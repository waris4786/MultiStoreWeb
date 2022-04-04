import React, { useState, useEffect } from "react";

//components
import Header from "../header/Header";

//images
import Shoes from "../../assets/images/shoes.jpg";
import GrirlsShoes from "../../assets/images/girls.jpg";
import Computer from "../../assets/images/computer.jpg";
import Mobile from "../../assets/images/mobile.jpg";
import Cloths from "../../assets/images/cloths.jpg";
import Fashoin from "../../assets/images/fashion.jpg";
import Beauty from "../../assets/images/beauty_.jpg";
import Bt2 from "../../assets/images/bt2.jpg";
import Bt3 from "../../assets/images/bt3.jpg";
import FN2 from "../../assets/images/fn2.jpg";
import FN3 from "../../assets/images/fn3.jpg";
import Homegarden from "../../assets/images/homegarden.jpg";
import Pharm from "../../assets/images/pharmacy.jpg";
import Ipad from "../../assets/images/ipad.jpg";
import Shoes1 from "../../assets/images/shoes1.jpg";
import ClothSale from "../../assets/images/clothSale.jpg";

//dependencies
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";



function CategoryList() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);
  const [filterCategory, setFilterCategory] = useState([]);

  const featureCategory = [
    {
      image: Fashoin,
      name: t("fashion"),
      price: "15$",
      type: "shoes",
    },
    {
      image: GrirlsShoes,
      name: t("shoes"),
      price: "15$",
    },
    {
      image: Mobile,
      name: t("electronic"),
      price: "15$",
    },
    {
      image: Beauty,
      name: t("beauty"),
      price: "15$",
    },
    {
      image: Homegarden,
      name: t("homeAndGarden"),
      price: "15$",
    },
    {
      image: Pharm,
      name: t("pharm"),
      price: "15$",
    },
  ];

  useEffect(() => {
    setCategory(categoryData);
    setFilterCategory(categoryData);
  }, []);

  /**
   * handle tab change
   * @param {*} event
   * @param {*} newValue
   */

  const categoryData = [
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
    {
      image: Beauty,
      name: t("beauty"),
      price: "15$",
      type: "beauty",
    },
    {
      image: Bt2,
      name: t("beauty"),
      price: "15$",
      type: "beauty",
    },
    {
      image: Bt3,
      name: t("beauty"),
      price: "15$",
      type: "beauty",
    },
    {
      image: FN2,
      name: t("fashion"),
      price: "15$",
      type: "fashion",
    },
    {
      image: FN3,
      name: t("fashion"),
      price: "15$",
      type: "fashion",
    },
    {
      image: Homegarden,
      name: t("homeAndGarden"),
      price: "15$",
      type: "homeandGarden",
    },
    {
      image: Pharm,
      name: t("pharm"),
      price: "15$",
      type: "pharm",
    },
  ];

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
          <div className="categoryMainListModule">
            <h6 className="module-heading__title">{t("featuredCategories")}</h6>
            <div className="categoryMainList">
              {featureCategory.map((cat,index) => {
                return (
                  <>
                    <div
                    key={index}
                      onClick={() => {
                        navigate("/categoryproduct", {
                          state: { featureCategory: cat },
                        });
                      }}
                      className="featuredcategory-box"
                      style={{ backgroundImage: `url(${cat.image})` }}
                    >
                      <h5 
                      key={index}
                      className="featuredcategory__title">{cat.name}</h5>
                    </div>
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
export default CategoryList;
