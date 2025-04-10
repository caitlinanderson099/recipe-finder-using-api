import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultsPage = () => {
  const location = useLocation();
  const { recipes, query } = location.state || {}; // Get both recipes and query
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`); // Navigate to the specific recipe page
  };

  return (
    <div>
      <div className="button-title">
        <button onClick={handleBack}>Back to Previous</button>
        <h2>Search Results for <span style={{ color: '#A59776' }}>{query}</span></h2>
      </div>

      <div className="recipe-list">
        {recipes?.length === 0 ? (
          <p>No recipes found</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <div className="recipe-details">
                {/* Dietary Tags */}
                <div className="dietary-tags">
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

export default ResultsPage;
