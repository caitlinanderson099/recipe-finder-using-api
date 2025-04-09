import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'
import { IoRestaurant } from "react-icons/io5";
import { PiPinterestLogoFill } from 'react-icons/pi'

const TopNav = () => {
  return (
    <div className='topnav'>
        <div className='logo'>
        <IoRestaurant />
        <h1>Le Savor</h1>
        </div>
    </div>
  )
}

export default TopNav
