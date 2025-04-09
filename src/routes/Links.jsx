import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ResultsPage from '../pages/ResultsPage'
import SinglePage from '../pages/SinglePage'
import Blog from '../pages/Blog'
import Recipes from '../pages/Recipes'

import Breakfast from '../pages/food-pages/Breakfast'
import Lunch from '../pages/food-pages/Lunch'
import Dinner from '../pages/food-pages/Dinner'
import Dessert from '../pages/food-pages/Dessert'
import Snacks from '../pages/food-pages/Snacks'


const Links = () => {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/recipes" element={<Recipes />} />

        {/* Food Pages */}
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch/>} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/desserts" element={<Dessert />} />
        <Route path="/snacks" element={<Snacks />} />


        {/* Single Page */}
        <Route path="/recipe/:id" element={<SinglePage />} />

    </Routes>
      
    </>
  )
}

export default Links
