import React from 'react'

import {Link } from 'react-router-dom'



const Bottom = () => {
  return (
      <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center', gap:'1rem', background:'#000042'}}>
    <div style={{display:'flex', height:'5rem', justifyContent:'center',alignItems:'center', gap:'1rem',}} >
<Link to='/'>
<h5>Home</h5>
</Link>
<Link to='/about'>
<h5>About</h5>
</Link>
<Link to='/about'>
<h5>Contact Us</h5>
</Link>
<a href='https://www.freetogame.com/games' target='_blank' rel="noreferrer">
<h5>Official website</h5>
</a>
</div>
    <span style={{color:'white', marginBottom:'1rem'}} >
      &#169; Darlio 2022. All rights reserved
  </span></div>
  )
}

export default Bottom