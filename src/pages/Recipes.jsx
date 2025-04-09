import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  // Fetch recipes from the Spoonacular API
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/complexSearch',
          {
            params: {
              number: 10, // Limit to 10 recipes
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

  return (
    <div className="recipes-page">
      <h1>Recipes</h1>
      <div className="recipe-list">
        {recipes.length === 0 ? (
          <p>Loading recipes...</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.summary}</p>
              <button>View Recipe</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Recipes;
