import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const Item = () => {
  const history = useHistory();
  const handle = () => {
    history.push("/recipe");
  };
  const { idMeal } = useParams();
  console.log(idMeal);
  const [items, setitems] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((res) => res.json())
      .then((data) => setitems(data.meals));
  }, []);
  return (
    <div>
      <h1 className="text-primary text-center my-3 p-2">
        Recipe Ingredient: {idMeal}
      </h1>
      {items.map((n) => (
        <div className="ingredient-cart card mb-3 mx-3 px-3">
          <div className="row g-0 ">
            <div className="col-md-4 my-4 py-4">
              <img
                src={n.strMealThumb}
                className="img-fluid rounded-start my-3"
                alt="ingredient-image"
              />
              <a
                className="btn btn-primary my-3 py-2   px-4"
                href={n.strYoutube}
                target="_blank"
              >
                Youtube
              </a>
            </div>
            <div className="col-md-8 my-3 ">
              <div className="card-body my-4 py-4 mx-4 px-4">
                <h3 className="card-title">{n.strMeal}</h3>
                <p className="card-text">{n.strInstructions.slice(0, 200)}</p>
                <h5>Ingredients:</h5>
                <li className="card-text">{n.strIngredient1}</li>
                <li className="card-text">{n.strIngredient2}</li>
                <li className="card-text">{n.strIngredient3}</li>
                <li className="card-text">{n.strIngredient4}</li>
                <li className="card-text">{n.strIngredient5}</li>
                <li className="card-text">{n.strIngredient6}</li>
                <li className="card-text">{n.strIngredient7}</li>
                <button
                  onClick={handle}
                  className="btn btn-primary my-4 py-2 px-4"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
