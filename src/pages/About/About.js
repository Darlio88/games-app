import React from 'react'
import './styles.css'

import homeScreenshot from '../../utils/images/freetogame-home.png'

import {BsGithub, BsTwitter, } from 'react-icons/bs'
import {AiFillMail, AiFillLinkedin} from 'react-icons/ai'

import {Link} from 'react-router-dom'


import {FaCloudDownloadAlt, FaGem, FaGamepad, FaBolt, FaHatWizard,FaSuitcase,FaUserAstronaut, FaRobot } from 'react-icons/fa'

const About = () => {
  return (
    <div>
    <div className="defn-container">
  <div className="defn">
      <h2  className="defn-header">Your GAME store where EVERYTHING is FREE!</h2>
      <p  className="defn-body">Plus score free premium loot, earn ranks, unlock exclusive rewards and much more!</p>
      <br />
      <Link to='/'>
      <button>BACK TO GAMES</button>
      </Link>
    
  </div>
  <div className="screenshot-holder">
      <img src={homeScreenshot} alt="home-page-screenshot"  className="screenshot-image"/>
  </div>
</div>



<div>
  <div className="about-us-container">
      <h3  className="about-us">What is FreeToGame all about?</h3>
      <p  className="about-description">We built FreeToGame to create an ecosystem that brings all the best
          Free-to-Play
          Games and MMO Games into one place while rewarding gamers with free premium in-game loot, special offers
          and
          exclusive perks. Our vision is to create the most exciting and rewarding gaming experience by breaking
          the
          inflexible concept of digital storefronts. You get more value... and it's all still completely free.</p>
  </div>
  <div className="pros-container">
      <div className="pros-div">

        <FaGem style={{ fontSize:'40px', color:"purple"}}/>
          <h4>More Rewarding</h4>
          <p>Score all premium loot for free, unlock rewards and exclusive perks!</p>

      </div>
      <div className="pros-div">

   <FaGamepad style={{ fontSize:'40px', color:"orange"}} />
          <h4>Easy Discovery</h4>
          <p>Discover games easily and get introduced to new ones.</p>
      </div>
      <div className="pros-div">

          <FaRobot style={{ fontSize:'40px', color:"purple"}} />
          <h4>Smart Recommendations</h4>
          <p>Get personalized recommendations powered by our own algorithm.</p>
      </div>
      <div className="pros-div">

          <FaCloudDownloadAlt style={{ fontSize:'40px', color:"green"}}/>
          <h4>Direct Downloads</h4>
          <p>Download your games directly using the power of the cloud.</p>
      </div>
      <div className="pros-div">

          <FaSuitcase style={{ fontSize:'40px', color:"purple"}} />
          <h4>Collect Games</h4>
          <p>Manage your games library and add games you want to play.</p>
      </div>
      <div className="pros-div">


          <FaUserAstronaut style={{ fontSize:'40px', color:"#C0C0C0"}}/>
          <h4>Community-Focused</h4>
          <p>Voice your opinions, submit reviews, suggest new features and more!</p>
      </div>
      <div className="pros-div">

    <FaBolt style={{ fontSize:'40px', color:"yellow"}}/>
          <h4>Enhanced Experience</h4>
          <p>Level up your account, unlock Gems daily, earn Ranks and more!</p>
      </div>
      <div className="pros-div">

         <FaHatWizard style={{ fontSize:'40px', color:"maroon"}}/>
          <h4>Plus More!</h4>
          <p>We're just getting started! Expect new updates and features.</p>
      </div>
  </div>
</div>
<div className="profile-section">
  <h3 className='profile-headers'>About the developer</h3>
  <div className="profile-description">
      <p >I am Omoding Daniel, a FullStack Developer with passion for coding and emerging technologies</p>
  </div>
  <h4 className='profile-headers' >Connect with me</h4>
  <div className="profile-connection">
    <a href='https://github.com/Darlio88' rel="noreferrer" target="_blank" style={{color:'white'}} ><BsGithub style={{ fontSize:'18px'}}/></a>
    <a href='https://twitter.com/iam_darlio' rel="noreferrer" target="_blank" style={{color:'white'}}><BsTwitter  style={{ fontSize:'18px'}}/></a>
    <a href='mailto:danieldarlio01@email.com' rel="noreferrer" target="_blank" style={{color:'white'}} ><AiFillMail style={{ fontSize:'18px'}}/></a>
    <a href='https://www.linkedin.com/in/daniel-darlio-a9aba3194/' rel="noreferrer" target="_blank" style={{color:'white'}} ><AiFillLinkedin style={{ fontSize:'18px'}}/></a>

  </div>
</div>

</div>
  )
}

export default About