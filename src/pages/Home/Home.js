
import React, {useState, useEffect} from 'react'


//importing components
import NavBar from '../../components/NavBar';
import GameContainer from '../../components/GameContainer/GameContainer';

//importing the styling
import "./styles.css";





//header methods for fetching data from rapidapi.com
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    "X-RapidAPI-Key": "7f0abfd512msh0d18b49d6bf6b3dp1a45f9jsn47799d9c9ea4",
  },
};



function App() {
 const [games, fetchGames] =useState(null)

const [searchItem, setSearchItem] = useState(null)

 const [searchValue, setSearchValue] = useState('') 

const handleInputChange =(e) =>{
  const input = e.target.value
  setSearchValue(input) 
  const filteredGames = games.filter((item)=>(item.title.toLowerCase().includes(input.toLowerCase()) === true))
  
  setSearchItem(filteredGames)
 
}

const handleSearch =(e) =>{
  e.preventDefault()
  const filteredGames = games.filter((item)=>(item.title.toLowerCase().includes(searchValue.toLowerCase()) === true))
  setSearchItem(filteredGames)
}


 useEffect(()=>{
   //function that fetches all the games in the database
 const GameList = async () => {
   await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", options)
      .then((response) => response.json())
      .then((response) => {
        fetchGames(response) 
      })
      .catch((err) => console.error(err));
  };
 GameList()
 },[])

 const handleSortChange = async (e) => {
//fetches games based on the sorted prerequiste applied
const sorted = e.target.value.toLowerCase()
if(sorted!=='relevance'){

await fetch(
  `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${sorted}`,
  options
)
  .then((response) => response.json())
  .then((response) => fetchGames(response))
  .catch((err) => console.error(err));
} else {
  await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", options)
  .then((response) => response.json())
  .then((response) => {
    fetchGames(response)
  })
  .catch((err) => console.error(err)); 
}}

 const handlePlatformChange = async (e) =>{
 //fetches games based on the filter applied
 const filter = e.target.value.toLowerCase()
 if(filter!=='all'){
 
 await fetch(
   `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${filter}`,
   options
 )
   .then((response) => response.json())
   .then((response) => fetchGames(response))
   .catch((err) => console.error(err));
 } else {
   await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", options)
   .then((response) => response.json())
   .then((response) => {
    fetchGames(response)   
   })
   .catch((err) => console.error(err)); 
 }}

const handleGenreChange = async (e) => {
  //fetches games based on the filter applied
  const filter = e.target.value.toLowerCase()
  if(filter!=='all'){
  await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${filter}`,
    options
  )
    .then((response) => response.json())
    .then((response) => fetchGames(response))
    .catch((err) => console.error(err));
  } else {
    await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", options)
    .then((response) => response.json())
    .then((response) => {
      fetchGames(response) 
    })
    .catch((err) => console.error(err)); 
  }
}




  return (
    <div className="container">
    <NavBar handleSearch={handleSearch} handleInputChange={handleInputChange} />
    <GameContainer
     handleGenreChange={handleGenreChange}
     handleSortChange={handleSortChange}
     handlePlatformChange={handlePlatformChange}
      searchValue ={searchValue }
      searchItem={searchItem}
      games={games} />
    </div>
  );
}

export default App;
