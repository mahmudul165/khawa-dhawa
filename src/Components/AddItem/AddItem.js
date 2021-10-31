import React from "react";
import "../AddItem/AddItem.css";
const AddItem = (props) => {
  // const { idMeal, strMeal, strInstructions, strMealThumb } = props.item;
  const { cart } = props;
  console.log(cart);
  return (
    <div className="m-3 p-2">
      <h1 className="add-cart-header">Add Item: {props.cart.length}</h1>
      {cart.map((item) => (
        <div className="add-item-display card my-4 p-4 ">
          <h1 className="">{item.idMeal}</h1>
          <img
            width="100px"
            height="100px"
            src={item.strMealThumb}
            className="  card-img-top img-design"
            alt="meal_image"
          />
          <div className="p-2 m-2 card-body">
            <h5 className="card-title">{item.strMeal}</h5>
            <p className="card-text">{item.strInstructions.slice(0, 50)}</p>
            <a
              href="#"
              className="btn btn-primary"
              onClick={() => {
                alert("you will be get delivery within short time");
              }}
            >
              Buy Now
            </a>
          </div>
        </div>
      ))}
      {/* <div className="card my-4 p-4 ">
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
            <a href="#" className="btn btn-primary">
              More Info
            </a>
            <a
              href="#"
              className="btn btn-primary"
              onClick={() => props.cartHandler(props.item)}
            >
              Add Item
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AddItem;
