import React from "react";
import { Button } from "@mui/material";
import "./recipe.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Recipe = (props) => {
  const history = useNavigate();
  const {
    _id,
    name,
    author,
    description,
    recipeSteps,
    ingredients,
    time,
    image,
  } = props.recipe;

  const deleteRecipe = async () => {
    await axios
      .delete(`http://localhost:5000/recipes/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => { history("/recipes") });
  };

  const formatTime = (timeInMinutes) => {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    return hours > 0
      ? `${hours} hr${hours > 1 ? 's' : ''} ${minutes} min`
      : `${minutes} min`;
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <article>By {author}</article>

      <h5>Time: {formatTime(time)}</h5>
      

      <div></div>
      <div>
        <Button onClick={deleteRecipe} className="btn btn-delete">
          Delete
        </Button>

        <Button LinkComponent={Link} to={`/recipes/${_id}`} className="btn btn-update">
          Update
        </Button>
      </div>

      <div style={{padding:'4px'}}>
        <Button LinkComponent={Link} to={`/recipes/recipepage/${_id}`} className="btn view-btn">
          View Recipe
        </Button>
      </div>
    </div>
  );
};

export default Recipe;
