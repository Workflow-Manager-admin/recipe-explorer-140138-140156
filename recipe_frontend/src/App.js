import React, { useState } from "react";
import "./App.css";
import sampleRecipes from "./sampleRecipes";
import Navbar from "./components/Navbar";
import RecipeGrid from "./components/RecipeGrid";
import RecipeDetailModal from "./components/RecipeDetailModal";

/**
 * PUBLIC_INTERFACE
 * App entry point for the Recipe Explorer application.
 * Features: Top navbar, grid card layout of recipes, search, detail modal.
 */
function App() {
  const [search, setSearch] = useState(""); // Search query state
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Currently opened recipe

  // Filter recipes based on search string (case-insensitive name & ingredient match)
  const filteredRecipes = sampleRecipes.filter((recipe) => {
    const query = search.trim().toLowerCase();
    return (
      recipe.name.toLowerCase().includes(query) ||
      recipe.ingredients.some((ing) => ing.toLowerCase().includes(query))
    );
  });

  // PUBLIC_INTERFACE
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // PUBLIC_INTERFACE
  const handleRecipeModalClose = () => {
    setSelectedRecipe(null);
  };

  // PUBLIC_INTERFACE
  const handleSearchChange = (e) => setSearch(e.target.value);

  return (
    <div className="app-bg">
      <Navbar
        search={search}
        onSearchChange={handleSearchChange}
      />
      <main>
        {filteredRecipes.length > 0 ? (
          <RecipeGrid
            recipes={filteredRecipes}
            onRecipeClick={handleRecipeClick}
          />
        ) : (
          <div className="no-results">No recipes found.</div>
        )}
      </main>
      {selectedRecipe && (
        <RecipeDetailModal
          recipe={selectedRecipe}
          onClose={handleRecipeModalClose}
        />
      )}
      <footer className="footer-bar">
        <span>
          Powered by <span className="accent">React</span> • Demo generated for Kavia • Theme controls above
        </span>
      </footer>
    </div>
  );
}

export default App;
