import React from 'react';

const LandingPage = ({ query, setQuery, searchRecipes }) => {
  return (
    <div className='landing'>

      <div className="left-side">
        <h1 className='header'>Find <span>The Best</span> Recipes With Us!</h1>
        <div className="search-bar">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your search..."
            />
            <button onClick={searchRecipes}>Search Recipes</button>
          </div>
      </div>


      <div className='right-side'>
        <img src="/landing-img.jpg" alt="" />
        <img src="/cooking-bg.jpg" alt="" /> {/** change the imgs */}

      </div>

    </div>
  );
};

export default LandingPage;
