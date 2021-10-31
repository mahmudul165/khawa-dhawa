import React, { useEffect, useState } from "react";
import reactDom from "react-dom";
import AddItem from "../AddItem/AddItem";
import ComponentIngredient from "../ComponentIngredient/ComponentIngredient";
import DisplayMeal from "../DisplayMeal/DisplayMeal";
import "../FoodSearch/FoodSearch.css";
const FoodSearch = () => {
  const [items, setItem] = useState([]);
  const [cart, setcart] = useState([]);
  const [state, setstate] = useState([]);
  const eventHandler = () => {
    const searchText = document.getElementById("inputGroupFile04").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setItem(data.meals));
  };
  const cartHandler = (item) => {
    const newCart = [...cart, item];
    setcart(newCart);
  };
  // const ingreHandler = (item) => {
  //   const newArray = [...state, item];
  //   setstate(newArray);
  // };
  const myDisplay = () => {
    const element = document.getElementById("ingredient");
    console.log(element);
    const child = (document.getElementById("child-container").innerHTML = "");
    const container = document.getElementById("main-container");
    // const callBack = ( const fun = () => {
    //   alert("ingredient items");
    // });
    reactDom.render(element, container);
  };

  return (
    <>
      <div className=" my-5 input-group search-btn">
        <input
          type="text"
          placeholder="Search Your Desire Food"
          className="form-control"
          id="inputGroupFile04"
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          id="inputGroupFileAddon04"
          onClick={() => eventHandler()}
        >
          Button
        </button>
      </div>

      <div id="main-container">
        <section className=" food-container" id="child-container">
          <div className="container card-design food-items">
            {items.map((item) => (
              <DisplayMeal
                key={item.idMeal}
                cartHandler={cartHandler}
                myDisplay={myDisplay}
                item={item}
              ></DisplayMeal>
            ))}
          </div>
          <div className="add-item">
            <AddItem cart={cart}></AddItem>
          </div>
        </section>
      </div>
    </>
  );
};

export default FoodSearch;
