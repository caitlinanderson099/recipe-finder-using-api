import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

const Breakfast = () => {
  const navigate = useNavigate();
  const [breakfastRecipes, setBreakfastRecipes] = useState([]);

  const handleBack = () => {
    navigate(-1);
  };

  // Fetch breakfast recipes on mount
  useEffect(() => {
    const fetchBreakfastRecipes = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/complexSearch',
          {
            params: {
              query: 'breakfast',
              number: 8,
              apiKey: API_KEY,
            },
          }
        );
        setBreakfastRecipes(response.data.results);
      } catch (error) {
        console.error('Error fetching breakfast recipes:', error);
      }
    };

    fetchBreakfastRecipes();
  }, []);

  const handleRecipeClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div>
      <div className='button-title'>
        <button onClick={handleBack}>Back to home</button>
        <h2>Breakfast Recipes</h2>
      </div>

      <div className='breakfast-recipes'>
        {breakfastRecipes.length === 0 ? (
          <p>Loading breakfast recipes...</p>
        ) : (
          breakfastRecipes.map((recipe) => (
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

export default Breakfast;
