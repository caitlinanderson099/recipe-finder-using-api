import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { IoRestaurant } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav>
       <div className='logo'>
              <IoRestaurant />
              <h1>Le Savor</h1>
              </div>

        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/recipes'>Recipes</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/'>Contact</Link>
        <BiSearch className='search-icon'/>
    </nav>
  )
}

export default Navbar
