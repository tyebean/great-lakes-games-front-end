import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function GameDetails = () => {
  const [gameDetails, setGameDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getGameDetails(location.state.gameDetails.url)
      .then(gameData => setGameDetails(gameData))
  }, [])

  return (
    <div className='icon-container'>
    {gameDetails.legnth ?
      <div className='game-card'>
      <h3>Name: {gameDetails.name}</h3>
      <h3>Details: {gameDetails.details}</h3>
      <Link to='/game' >Return</Link>
    </div>
    
    
    }
    </div>
  )

}

export default GameDetails;