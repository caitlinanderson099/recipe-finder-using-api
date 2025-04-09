import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

const Dessert = () => {
  const navigate = useNavigate();
  const [dessertRecipes, setDessertRecipes] = useState([]);

  const handleBack = () => {
    navigate(-1);
  };

  // Fetch breakfast recipes on mount
  useEffect(() => {
    const fetchDessertRecipes = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/complexSearch',
          {
            params: {
              query: 'dessert',
              number: 8,
              apiKey: API_KEY,
            },
          }
        );
        setDessertRecipes(response.data.results);
      } catch (error) {
        console.error('Error fetching dessert recipes:', error);
      }
    };

    fetchDessertRecipes();
  }, []);

  const handleRecipeClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div>
      <div className='button-title'>
        <button onClick={handleBack}>Back to home</button>
        <h2>Dessert Recipes</h2>
      </div>

      <div className='dessert-recipes'>
        {dessertRecipes.length === 0 ? (
          <p>Loading dessert recipes...</p>
        ) : (
          dessertRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className='recipe-card'
              onClick={() => handleRecipeClick(recipe.id)}
            >
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dessert;
