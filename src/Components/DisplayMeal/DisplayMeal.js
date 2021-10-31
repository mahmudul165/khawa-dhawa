import React from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
import "../DisplayMeal/DisplayMeal.css";
const DisplayMeal = (props) => {
  //console.log(props);
  const { idMeal, strMeal, strInstructions, strMealThumb } = props.item;

  return (
    <section className="container  ">
      <div className="card my-4 p-4 ">
        <img
          width="200px"
          height="200px"
          src={strMealThumb}
          className="  card-img-top img-design"
          alt="meal_image"
        />
        <div className="p-2 m-2 card-body">
          <h5 className="card-title">{strMeal}</h5>
          <p className="card-text">{strInstructions.slice(0, 300)}</p>
          <div className="d-flex justify-content-between ">
            <Link to={`/meals/${idMeal}`} className="btn btn-primary">
              More Info
            </Link>
            {/* {() => props.ingreHandler(props.item)} */}
            <a
              href="#"
              className="btn btn-primary"
              onClick={() => props.cartHandler(props.item)}
            >
              Add Item
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayMeal;
