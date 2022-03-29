import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getGameDetails } from "../../services/gameServices";
import ReviewForm from "../../components/Reviews/ReviewForm/ReviewForm";
import * as reviewService from "../../services/reviewService";

// import styles from './GameDetails.css'

const GameDetails = props => {
  const [reviews, setReviews] = useState([]);
  const handleAddReview = async newFormData => {
    const newReview = await reviewService.create(newFormData);
    setReviews([...reviews, newReview]);
  };

  const [gameDetails, setGameDetails] = useState(null);
  let location = useLocation();

  console.log(location.state.gameDetails);

  useEffect(() => {
    getGameDetails(location.state.gameDetails.id).then(gameData =>
      setGameDetails(gameData)
    );
  }, [location.state.gameDetails.id]);

  console.log(gameDetails);

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
            handleAddReview={handleAddReview}
            gameDetails={gameDetails}
          />
          <Link to="/games">Return to Game Page</Link>
        </div>
      ) : (
        <h2>loading</h2>
      )}
    </div>
  );
};

export default GameDetails;
