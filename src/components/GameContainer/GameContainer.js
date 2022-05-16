import React from 'react'

import Spinner from '../Spinner'
import {FaWindows} from 'react-icons/fa'

import {TiWorld} from 'react-icons/ti'
import { useNavigate} from 'react-router-dom'

const genres = ['All','mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 'military', 'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts']
const sortOptions= ['relevance','release-date', 'popularity', 'alphabetical']




const GameContainer = ({handleGenreChange, handleSortChange, handlePlatformChange, searchValue, searchItem, games }) => {
  const navigate = useNavigate()



  return (
    <div className="card-container">
    <h2>Best Free Games for PC and Browser In 2022!</h2>
    <div className="filterContainer">
      <div>
      <label htmlFor="genres">Genre/Tag:</label>
<select name="" className='select' id="genres" onChange={handleGenreChange}>
{genres.map((genre, idx)=>(<option key={idx} value={genre}> {genre} </option> ))}
</select>
      </div>
      <div>
      <label htmlFor="sortList">Sort by:</label>
<select name="" className='select' id="sortList" onChange={handleSortChange}>
{sortOptions.map((item, idx)=>(<option key={idx} value={item}> {item} </option> ))}
</select>
      </div>
      <div>
      <label htmlFor="platforms">Platform:</label>
      <select name="Platform:" id='platforms' className='select' onChange={handlePlatformChange}>
      <option value="all">All Platforms</option>
<option value="pc">PC</option>


</select>
      </div>

    </div>
  <div className="gamelist">
{ 

(searchValue.length>0)?
(searchItem?.length>0?
  searchItem.map((game, id)=>(
    
    <div key={game.id} className="card" onClick={()=>{navigate(`/game-details/${game.id}`)}}>
    <img
      src={game.thumbnail}
      alt="game-logo"
    />
    <div className="gameinfo">
      <div className="title">
        <h4>{game.title}</h4>
        <h5>Free</h5>
      </div>
      <p>
       {game.short_description.length>50 ? `${game.short_description.slice(0,50)}...`:game.short_description}
      </p>
      <div className="bottom">
        <h4 className="genre">{game.genre}</h4>
        {game.platform === 'PC (Windows)' ? <FaWindows /> : <TiWorld />}
      </div>
    </div>
  </div>

)):<div><Spinner message='loading details.....' /></div>)



:
  ( games?.length>0 ?
    games.map((game, id)=>(
     <div key={game.id} className="card" onClick={()=>{navigate(`/game-details/${game.id}`)}}>
     <img
       src={game.thumbnail}
       alt="game-logo"
     />
     <div className="gameinfo">
       <div className="title">
         <h4>{game.title}</h4>
         <h5>Free</h5>
       </div>
       <p>
        {game.short_description.length>50 ? `${game.short_description.slice(0,50)}...`:game.short_description}
       </p>
       <div className="bottom">
         <h4 className="genre">{game.genre}</h4>
         {game.platform === 'PC (Windows)' ? <FaWindows /> : <TiWorld />}
       </div>
     </div>
   </div>
    
)) : <Spinner message='loading games....' />
)
}
 
 
 

  </div>
 
  </div>
  )
}

export default GameContainer