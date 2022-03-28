import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getGameDetails } from '../../services/gameServices';
import ReviewForm from '../Reviews/ReviewForm/ReviewForm';
import * as reviewService from '../../services/reviewService' 
// import styles from './GameDetails.css'

const GameDetails = (props) => {
  const [reviews, setReviews] = useState([])
  const handleAddReview = async newFormData => {
    const newReview = await reviewService.create(newFormData)
    setReviews([...reviews, newReview])
  }

  const [gameDetails, setGameDetails] = useState(null)
  let location = useLocation()
  // console.log(location.state.gameDetails)

  useEffect(() => {
    getGameDetails(location.state.gameDetails.id)
      .then(gameData => setGameDetails(gameData))
  }, [location.state.gameDetails.id])
  // console.log(gameDetails)

  return (
    <>
      <div>
        {gameDetails ?
          <div>
            <h3>{gameDetails.name}</h3>
            <img
              src={gameDetails.background_image}
              alt={gameDetails.name} />
            {/* <h3>Details: {gameDetails.details}</h3> */}
            <Link to='/game'>Back to Games</Link>
          </div>
          :
          <h2 >loading</h2>}
      </div>
      <div
        className='reviews-and-comments' >
        <ReviewForm handleAddReview={handleAddReview} />
      </div>
    </>
  );
}

export default GameDetails; 