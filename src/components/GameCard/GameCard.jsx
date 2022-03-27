import styles from './GameCard.module.css'



const GameCard = (props) => {
      
  return ( 
  <div className={styles.gamecard}>
    {props.gameDetails.name}
    <div className={styles.gamepic}>
    <img src={props.gameDetails.background_image} alt={props.gameDetails.name} />
    </div>

  </div>
    
   );
}
 
export default GameCard;