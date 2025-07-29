import React from "react";
import "./RecipeDetailModal.css";

/**
 * PUBLIC_INTERFACE
 * Modal dialog with full recipe details.
 * 
 * Props:
 *   - recipe: selected recipe object
 *   - onClose: function for closing modal
 */
function RecipeDetailModal({ recipe, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <article className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close recipe details"
        >
          &times;
        </button>
        <div className="modal-header">
          <img src={recipe.image} alt={recipe.name} className="modal-img" />
          <div>
            <h2 className="modal-title">{recipe.name}</h2>
            <div className="modal-meta">
              <span className="modal-pill">{recipe.cuisine}</span>
              <span className="modal-pill">{recipe.time} min</span>
            </div>
          </div>
        </div>
        <div className="modal-body">
          <section>
            <h3>Ingredients</h3>
            <ul className="modal-ingredient-list">
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Instructions</h3>
            <ol className="modal-instructions">
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </article>
    </div>
  );
}

export default RecipeDetailModal;
