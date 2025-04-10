import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY;

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    comment: ''
  });

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
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.rating || !formData.comment) return;

    const newReview = {
      ...formData,
      id: Date.now()
    };

    setReviews((prev) => [newReview, ...prev]);
    setFormData({ name: '', rating: '', comment: '' });
  };

  return (
    <div className="recipe-page">
      {recipe ? (
        <div className="recipe-details">
          <div className="button-title">
            <button onClick={handleBack}>Back</button>
            <h1>{recipe.title}</h1>
          </div>

          <div className="recipe-grid">
            <div className="recipe-image">
              <img src={recipe.image} alt={recipe.title} />
            </div>

            <div className="recipe-info">
            <div className="dietary-tags">
              {recipe.vegetarian && <span className="veg-tag">V</span>}
              {recipe.vegan && <span className="vegan-tag">VG</span>}
              {recipe.glutenFree && <span className="gf-tag">GF</span>}
              {recipe.dairyFree && <span className="df-tag">DF</span>}
            </div>
              <h2>Ingredients:</h2>
              <ul>
                {recipe.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>
                  <strong>{ingredient.amount} {ingredient.unit}</strong> – {ingredient.name}
                  </li>                
                ))}
              </ul>

              <h2>Cooking Instructions:</h2>
              <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
              </div>
          </div>
        </div>
      ) : (
        <p>Loading recipe details...</p>
      )}

      {/* Review Section */}
      <div className="review-section">
        <h2>Review This Recipe</h2>
        <form className="review-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <select name="rating" value={formData.rating} onChange={handleChange}>
            <option value="">Select Rating</option>
            <option value="⭐">⭐</option>
            <option value="⭐⭐">⭐⭐</option>
            <option value="⭐⭐⭐">⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
            <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
          </select>
          <textarea
            name="comment"
            placeholder="Your Comment"
            value={formData.comment}
            onChange={handleChange}
          />
          <button type="submit">Submit Review</button>
        </form>

        <div className="submitted-reviews">
          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="review">
                <strong>{review.name}</strong> <span>{review.rating}</span>
                <p>{review.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
