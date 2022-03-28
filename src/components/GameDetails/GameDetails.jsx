import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getGameDetails } from '../../services/gameServices';
import ReviewForm from '../Reviews/ReviewForm/ReviewForm';
import styles from './GameDetails.css'

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState(null)
  let location = useLocation()
  // console.log(location.state.gameDetails)

  useEffect(() => {
    getGameDetails(location.state.gameDetails.id)
      .then(gameData => setGameDetails(gameData))
  }, [])
// console.log(gameDetails)

  return (
    <>
      <div className={styles.container}> 
        {gameDetails ?
        <div className={styles.detailsContainer}>
          <h3>{gameDetails.name}</h3>
          <img 
          src={gameDetails.background_image} 
          alt={gameDetails.name}/>
          {/* <h3>Details: {gameDetails.details}</h3> */}
          <Link to='/game'>Back to Games</Link>
        </div>
      : 
        <h2 className={styles.loading}>loading</h2>}
    </div>

    <div 
    className='reviews-and-comments' >
    <ReviewForm />
    </div>
    </>
  );
}

export default GameDetails;