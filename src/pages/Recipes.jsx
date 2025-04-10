import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  // Fetch recipes from the Spoonacular API
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/complexSearch',
          {
            params: {
              number: 40, // Limit to 40 recipes
              apiKey: API_KEY,
            },
          }
        );
        setRecipes(response.data.results); // Set recipes in the state
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`); // Navigate to the specific recipe page
  };

  return (
    <div className="recipes-page">
      <h1>All Recipes</h1>
      <div className="recipe-list">
        {recipes.length === 0 ? (
          <p>Loading recipes...</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <div className="recipe-details">
                {/* Dietary Tags */}
                <div className="diet-tags">
                  {recipe.vegetarian && <span className="veg-tag">V</span>}
                  {recipe.vegan && <span className="vegan-tag">VG</span>}
                  {recipe.glutenFree && <span className="gf-tag">GF</span>}
                  {recipe.dairyFree && <span className="df-tag">DF</span>}
                </div>
                <h3>{recipe.title}</h3>
                <button onClick={() => handleRecipeClick(recipe.id)}>Read More</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Recipes;
