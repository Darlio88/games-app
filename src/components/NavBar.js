import React from 'react'


//freegames logo
import logo from "../utils/images/freetogame-logo.png";
//importing icons

import {FaSearch} from 'react-icons/fa'
const NavBar = ({handleSearch,handleInputChange}) => {
  return (
    <nav className="nav">
    <img src={logo} alt="logo" />
    <form onSubmit={handleSearch} >
    <input type="text" placeholder="search free games here...."  onChange={handleInputChange}/>
    <button type='submit' ><FaSearch /></button>
    
    </form>
  </nav>
  )
}


export default NavBar