import React from "react";
import RecipeCard from "./RecipeCard";
import "./RecipeGrid.css";

/**
 * PUBLIC_INTERFACE
 * Displays a responsive grid of recipe cards.
 * 
 * Props:
 *   - recipes: array of recipe objects
 *   - onRecipeClick: function called with recipe when card is clicked
 */
function RecipeGrid({ recipes, onRecipeClick }) {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={() => onRecipeClick(recipe)}
        />
      ))}
    </div>
  );
}

export default RecipeGrid;
