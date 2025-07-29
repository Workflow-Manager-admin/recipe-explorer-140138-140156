import React from "react";
import "./RecipeCard.css";

/**
 * PUBLIC_INTERFACE
 * Card showing overview of a recipe (image, title, quick info).
 * 
 * Props:
 *   - recipe: recipe object
 *   - onClick: click handler
 */
function RecipeCard({ recipe, onClick }) {
  return (
    <div className="recipe-card" onClick={onClick} tabIndex={0} role="button" aria-label={`Show details for ${recipe.name}`}>
      <div className="card-img-wrap">
        <img src={recipe.image} alt={recipe.name} className="card-img" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{recipe.name}</h3>
        <div className="card-short">
          <span className="card-pill">{recipe.cuisine}</span>
          <span className="card-pill card-time">{recipe.time} mins</span>
        </div>
        <div className="card-ingredients">{recipe.ingredients.slice(0,2).join(", ")}{recipe.ingredients.length>2?'...':''}</div>
      </div>
    </div>
  );
}

export default RecipeCard;
