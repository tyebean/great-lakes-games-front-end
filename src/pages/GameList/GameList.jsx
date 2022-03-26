import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getGameList } from '../../services/gameServices'

const GameList = (props) => {
  const [games, setGames] = useState([])
  
  useEffect(() => {
    const fetchGames= async() => {
      const data= await getGameList()
      console.log(data)
      setGames(data)
    }
    fetchGames()
    // getGameList()
    // .then(gameData => setGames(gameData.results))
  },[])

  console.log(games)
  return (  
    <>
      <h2>Games</h2>
      <div className='game-container'>

      {games.map((gameDetails, index) =>(
        <Link to='/details' state={{gameDetails}} key={index}>
          {gameDetails.name}
        </Link>
        ))}
        </div>
    </>
  );
}

export default GameList;