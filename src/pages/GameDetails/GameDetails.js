import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

import Spinner from '../../components/Spinner'
import './styles.css'

import {AiFillInfoCircle} from 'react-icons/ai'

const GameDetails = () => {

const [gameDetails, setGameDetails] = useState(null)
const [loading, setLoading] = useState(true)

  const {id} = useParams()
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      "X-RapidAPI-Key": "7f0abfd512msh0d18b49d6bf6b3dp1a45f9jsn47799d9c9ea4",
    },
  };
 

useEffect( () => {

 const loadingGamesDetails =async()=>{
  await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options).then(
    response => response.json()
  ).then(response =>{
    setGameDetails(response)
    setLoading(false)
  })
 }

 loadingGamesDetails()
 
  
}, [id]);


if(loading) {
  return (<Spinner message='loading details.....' />)
}

  return (
    <div className='game-container' >
      <div className="side-bar">
      <h2 style={{paddingBottom:"1rem"}}>{gameDetails.title}</h2>
      <div className="image-holder"><img src={gameDetails.thumbnail} alt="" /></div>
      
      <div className="side-bar-desc">
        <a href={gameDetails.game_url} target='_blank' rel="noreferrer" >
        <button className='side-bar-button' >PLAY NOW</button>
        </a>
      </div>
    </div>
<div className="game-description-area">

<div className="about-game">
 
<h3>{`About ${gameDetails.title}`}</h3>
<div >
<p className="summary">{gameDetails.description}</p>
</div>

</div>
<div className="additional-info">
  <h3>Additional Information</h3>
  
  <p><AiFillInfoCircle />Please note this free-to-play game may or may not offer optional in-game purchases.</p>
  

 <div className="infos">
    <h5>Title<br/>{gameDetails.title}</h5>
    <h5>Developer<br/>{gameDetails.developer|| 'null'}</h5>
    <h5>Publisher<br/>{gameDetails.publisher || 'null'}</h5>
    <h5>Release Date<br/>{gameDetails.release_date || 'null'}</h5>
    
    <h5>Genre<br/>{gameDetails.genre || 'null'}</h5>
    <h5>Platform<br/>{gameDetails.platform || 'null'}</h5>
  </div>
  </div>
  <div className="screenshot-container">
    <h3>{`${gameDetails.title} Screenshots`}</h3>
  <div className="screenshot">
    {gameDetails.screenshots?.map((imageLink, id)=>
     (<img key={imageLink.id} src={imageLink.image} alt="screenshot" />)
    ) || 'no screenshots available'}
  </div>
  </div>
  <div className="minimum-requirements">
  <h3>Minimum System Requirements </h3>
  <div className="requirements">
    <h5>OS<br />{gameDetails.minimum_system_requirements.os|| 'null'}</h5>
    <h5>Memory<br />{gameDetails.minimum_system_requirements.memory|| 'null'}</h5>
    <h5>Storage<br />{gameDetails.minimum_system_requirements.storage|| 'null'}</h5>
    <h5>Processor<br />{gameDetails.minimum_system_requirements.processor|| 'null'}</h5>
    <h5>Graphics<br />{gameDetails.minimum_system_requirements.graphics|| 'null'}</h5>
  </div>
  
  
</div>
</div>

    </div>
  )
}

export default GameDetails