import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LandingPage from '../components/LandingPage';

const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

const Home = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);
  const [latestRecipes, setLatestRecipes] = useState([]);

   // Fetching Suggested/For You Recipes
   useEffect(() => {
    const fetchSuggestedRecipes = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/random',
          {
            params: {
              number: 4,  // Limit the number of suggested recipes
              apiKey: API_KEY,
            },
          }
        );
        setSuggestedRecipes(response.data.recipes);  // Set suggested recipes
      } catch (error) {
        console.error('Error fetching suggested recipes:', error);
      }
    };

    fetchSuggestedRecipes();
  }, []);


  // Fetching Latest Recipes
  useEffect(() => {
    const fetchLatestRecipes = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/random',
          {
            params: {
              number: 4,  // Limit the number of latest recipes
              apiKey: API_KEY,
            },
          }
        );
        setLatestRecipes(response.data.recipes); 
      } catch (error) {
        console.error('Error fetching latest recipes:', error);
      }
    };

    fetchLatestRecipes();
  }, []);

  // AXIOS Call for the Search Recipes Function
  const searchRecipes = async () => {
    if (!query) return;

    try {
      const response = await axios.get(
        'https://api.spoonacular.com/recipes/complexSearch',
        {
          params: {
            query,
            number: 10,
            apiKey: API_KEY,
          },
        }
      );
      // Navigate to ResultsPage and pass the recipes
      navigate('/results', { state: { recipes: response.data.results, query } });
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  // Handle Read More Button
  const handleRecipeClick = (recipeId) => {
    // Navigate to the recipe details page
    navigate(`/recipe/${recipeId}`);
  };

  // Handle Blog Page Navigation
  const handleBlog = () => {
    navigate('/blog');
  }

  return (
    <div>
      <LandingPage query={query} setQuery={setQuery} searchRecipes={searchRecipes} />


      {/* For You Section */}
      <div className="for-you">
        <h2>Recommended For You</h2>
        <div className="suggested-recipes">
          {suggestedRecipes.length === 0 ? (
            <p>Loading suggested recipes...</p>
          ) : (
            suggestedRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="recipe-card"
              >
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
     

      {/* Blog Section */}
      <div className="blog-section">

        <div className="left-side">
          <img src="/owner-img.jpg" alt="" />
          <img src="/dish-img.jpg" alt="" />
        </div>

        <div className='right-side'>
          <h2>Hi I'm Danny!</h2>
          <h3>Welcome to my food blog, I'm so excited you're here!</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pell</p>
          <button onClick={handleBlog}>Read Blog!</button>
        </div>

      </div>

      {/* Latest Recipes Section */}
      <div className="latest-section">
        <h2>Our Latest Recipes</h2>
        <div className="latest-recipes">
          {latestRecipes.length === 0 ? (
            <p>Loading latest recipes...</p>
          ) : (
            latestRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="recipe-card"
              >
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
 
      
    </div>
  );
};

export default Home;
