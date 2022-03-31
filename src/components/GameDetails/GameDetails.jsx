import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getGameDetails } from "../../services/gameServices";
// import styles from './GameDetails.css'
// review imports ------------
import * as gameServices from "../../services/gameServices";
import * as reviewService from "../../services/reviewService";
import ReviewForm from "../../components/Reviews/ReviewForm/ReviewForm";
import ReviewList from "../Reviews/ReviewList/ReviewList";

const GameDetails = props => {
  const [reviews, setReviews] = useState([]);
  // GameDetails stores data from rawg
  const [gameDetails, setGameDetails] = useState(null);
  // Make a new state for our game in our DB (GameCopy)
  const [gameCopy, setGameCopy] = useState();
  let location = useLocation();

  useEffect(() => {
    getGameDetails(location.state.gameDetails.id).then(gameData =>
      setGameDetails(gameData)
    );
  }, [location.state.gameDetails.id]);

  useEffect(() => {
    gameServices.getGame(location.state.gameDetails.id).then(game => {
      setReviews(game.reviews);
      setGameCopy(game);
      // console.log(game.reviews);
    });
  }, [location.state.gameDetails.id]);

  const handleAddReview = async newFormData => {
    const newReview = await reviewService.create(newFormData);
    setReviews([...reviews, newReview]);
  };
  
  const handleDeleteReview = id => {
    reviewService.deleteOne(id)
    setReviews(reviews.filter(review => review._id !== id))
  }

  if (!props.user.name) {
    return (
      <div>Loading...</div>
    )
  }


  return (
    <div className="icon-container">
      {gameDetails ? (
        <div className="game-card">
          <h3>{gameDetails.name}</h3>
          <img src={gameDetails.background_image} alt={gameDetails.name} />
          <h3>Game Description: {gameDetails.description_raw}</h3>
          <h3>Release Date: {gameDetails.released}</h3>
          <h3>
            Genres:{" "}
            {gameDetails.genres.map((genre, index) => (
              <div key={index} state={{ genre }}>
                {genre.name}
              </div>
            ))}
          </h3>
          <h3>
            Developers:{" "}
            {gameDetails.developers.map((developer, index) => (
              <div key={index} state={{ developer }}>
                {developer.name}
              </div>
            ))}
          </h3>
          <h3>
            Platforms:{" "}
            {gameDetails.platforms.map((platform, index) => (
              <div key={index} state={{ platform }}>
                {platform.platform.name}
              </div>
            ))}
          </h3>
          <h3>Metacritic Rating: {gameDetails.metacritic}</h3>
          <ReviewForm
            user={props.user}
            handleAddReview={handleAddReview}
            gameDetails={gameDetails}
          />
          <ReviewList reviews={reviews} handleDeleteReview={handleDeleteReview} />
          
          <Link to="/games">Return to Game Page</Link>
        </div>
      ) : (
        <h2>loading</h2>
      )}
    </div>
  );
};

export default GameDetails;
