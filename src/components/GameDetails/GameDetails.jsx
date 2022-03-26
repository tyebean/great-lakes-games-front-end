import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getGameDetails } from '../../services/gameServices';


const GameDetails = () => {
  
  const [gameDetails, setGameDetails] = useState(null)
  let location = useLocation()

  console.log(location.state.gameDetails)

  useEffect(() => {
    getGameDetails(location.state.gameDetails.id)
      .then(gameData => setGameDetails(gameData))
  }, [])
console.log(gameDetails)

  return (
    <div className='icon-container'>
    {gameDetails ?

      <div className='game-card'>
      <h3>Name: {gameDetails.name}</h3>
      <img src={gameDetails.background_image} alt={gameDetails.name}/>
      {/* <h3>Details: {gameDetails.details}</h3> */}
      <Link to='/game' >Return</Link>
      </div>
    : <h2>loading</h2>}
    </div>
  );

}

export default GameDetails;