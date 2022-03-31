import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getGameDetails } from "../../services/gameServices";
import styles from '../GameDetails/GameDetails.module.css'
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
    <div className="all-content">
      {gameDetails ? (
        <div className={styles.detailsBody}>
          <h1>{gameDetails.name}</h1>


          <div className={styles.imgAndDesc}>
            <img
              className={styles.detailsImg}
              src={gameDetails.background_image}
              alt={gameDetails.name} />
            <h2 className={styles.desc}>Game Description</h2>
            <p className={styles.desc}>{gameDetails.description_raw}</p>
          </div>


          <div className={styles.detailsContainer}>
            <h3>Release Date</h3>
            <p>{gameDetails.released}</p>
            <h3>Genre</h3>
            <p> {" "}
              {gameDetails.genres.map((genre, index) => (
                <div key={index} state={{ genre }}>
                  {genre.name}
                </div>
              ))}</p>
            <h3>Developers</h3>
            <p>{" "}
              {gameDetails.developers.map((developer, index) => (
                <div key={index} state={{ developer }}>
                  {developer.name}
                </div>
              ))}
            </p>
            <h3>Platforms</h3>
            <p>{" "}
              {gameDetails.platforms.map((platform, index) => (
                <div key={index} state={{ platform }}>
                  {platform.platform.name}
                </div>
              ))}
            </p>
            <h3>Metacritic Rating</h3>
            <p>{gameDetails.metacritic}</p>
          </div>
          <div className={styles.reviewContainer}>
            <section className="reviews">
              <ReviewForm
                handleAddReview={handleAddReview}
                gameDetails={gameDetails}
              />
            </section>
          </div>
          <Link to="/games">All Games</Link>
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default GameDetails;
