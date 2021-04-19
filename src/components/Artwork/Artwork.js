import React, { useState } from 'react';
import { useAppContext } from '../../AppContext.js';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Artwork.scss';
import '../Wall/Wall.scss';

const Artwork = ({ artPiece, id, url, title, wallLocation }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [state, dispatch] = useAppContext();
  const actionType = isFavorited === false ? 'ADD_TO_FAVORITES' : 'REMOVE_FROM_FAVORITES';
  
  const toggleFavorite = () => {
    isFavorited === false ? setIsFavorited(true) : setIsFavorited(false);
  }

  const checkFavStatus = () => {
    return isFavorited ? <FavoriteIcon/> : <FavoriteBorderIcon/>
  }

  return (
    <>
      <button onClick={() => {
        dispatch({ type: actionType, payload: artPiece })
        toggleFavorite()
      }}>{checkFavStatus()}</button>
      <Link to={`/${id}`} data={id} className={`img-container ${wallLocation}`}>
        <img src={url} alt={`${title}_${id}`}/>
      </Link>
    </>
  )

}

export default Artwork;