import React, { useState } from "react";
import refurb from "../laptop/refurb";
import newitems from "../laptop/newitems";
import "./Home.css";
const Home = () => {
  const [cond, setCond] = useState("");
  const [budget, setBudget] = useState(0);
  const [brand, setBrand] = useState("");

  const filterLaptops = (laptop) => {
    // Check condition
    if (laptop.condition.toLowerCase() !== cond.toLowerCase() && cond !== "") {
      return false;
    }

    // Check brand
    if (brand && laptop.brand.toLowerCase() !== brand.toLowerCase()) {
      return false;
    }

    // Check budget
    if (budget) {
      const laptopBudget = parseFloat(laptop.budget); // Convert laptop budget to a number

      if (budget === "3" && laptopBudget >= 30000) {
        return true;
      } else if (
        budget === "2" &&
        laptopBudget >= 20000 &&
        laptopBudget < 30000
      ) {
        return true;
      } else if (budget === "1" && laptopBudget < 20000) {
        return true;
      } else {
        return false;
      }
    }

    // If all conditions pass, include the laptop in the filtered list
    return true;
  };

  return (
    <div className="main-container">
      <div className="filter-container">
        <div className="filter-box">
          <span
            style={{
              fontWeight: "bold",
              fontSize: "1.2em",
              color: "darkslategray",
            }}
          >
            Condition
          </span>
          <form>
            <label>
              <input
                type="radio"
                name="condition"
                value="refurbished"
                onChange={(e) => setCond(e.target.value)}
              />
              Refurbished
            </label>
            <label>
              <input
                type="radio"
                name="condition"
                value="new"
                onChange={(e) => setCond(e.target.value)}
              />
              New
            </label>
          </form>
        </div>
        <div className="filter-box">
          <span
            style={{
              fontWeight: "bold",
              fontSize: "1.2em",
              color: "darkslategray",
            }}
          >
            Brands
          </span>
          <form>
            <label>
              <input
                type="radio"
                name="Brands"
                value="lenovo"
                onChange={(e) => setBrand(e.target.value)}
              />
              Lenovo
            </label>
            <label>
              <input
                type="radio"
                name="Brands"
                value="acer"
                onChange={(e) => setBrand(e.target.value)}
              />
              Acer
            </label>
          </form>
        </div>
        <div className="filter-box">
          <span
            style={{
              fontWeight: "bold",
              fontSize: "1.2em",
              color: "darkslategray",
            }}
          >
            Budget
          </span>
          <form>
            <label>
              <input
                type="radio"
                name="Budget"
                value="3"
                onChange={(e) => setBudget(e.target.value)}
              />
              Above 30k
            </label>
            <label>
              <input
                type="radio"
                name="Budget"
                value="2"
                onChange={(e) => setBudget(e.target.value)}
              />
              below 30k
            </label>
            <label>
              <input
                type="radio"
                name="Budget"
                value="1"
                onChange={(e) => setBudget(e.target.value)}
              />
              below 20k
            </label>
          </form>
        </div>
      </div>

      <div className="product-container">
        <h1>Refurbished</h1>
        <div className="refurb-container">
          {refurb.map(
            (laptop, index) =>
              filterLaptops(laptop) && (
                <div key={index} className="laptop-item">
                  <img src={laptop.imageSrc} alt="" className="laptopimages"/>
                  <h3>{laptop.name}</h3>
                  <p>Price: {laptop.budget}</p>
                </div>
              )
          )}
        </div>
        <h1>New</h1>
        <div className="refurb-container">
          {newitems.map(
            (laptop, index) =>
              filterLaptops(laptop) && (
                <div key={index} className="laptop-item">
                  <img src={laptop.imageSrc} alt="" className="laptopimages"/>
                  <h3>{laptop.name}</h3>
                  <p>Price: {laptop.budget}</p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
