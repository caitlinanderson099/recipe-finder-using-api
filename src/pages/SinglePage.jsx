import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

const RecipePage = () => {
  const { id } = useParams();  // Grab the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information`,
          {
            params: {
              apiKey: API_KEY,
            },
          }
        );
        setRecipe(response.data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipeDetails();
  }, [id]); // Run when the recipe ID changes

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div className="recipe-page">
      {recipe ? (
        <div className="recipe-details">
          <div className="button-title">
            <button onClick={handleBack}>Back</button>
            <h1>{recipe.title}</h1>
          </div>

          <div className="recipe-grid">
            {/* Image Section */}
            <div className="recipe-image">
              <img src={recipe.image} alt={recipe.title} />
            </div>

            {/* Details Section */}
            <div className="recipe-info">
              <p>{recipe.instructions}</p>
              <h3>Ingredients:</h3>
              <ul>
                {recipe.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading recipe details...</p>
      )}
    </div>
  );
};

export default RecipePage;
