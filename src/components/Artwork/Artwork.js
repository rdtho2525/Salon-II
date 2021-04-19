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
  // const actionType = state.favoriteStatus === 'clear' ? 'ADD_TO_FAVORITES' : 'REMOVE_FROM_FAVORITES';
  const checkFavStatus = () => {
    return isFavorited ? <FavoriteIcon/> : <FavoriteBorderIcon/>
  }

  return (
    <>
      <button onClick={() => dispatch({ type: 'ADD_TO_FAVORITES', payload: artPiece })}>{checkFavStatus()}</button>
      <Link to={`/${id}`} data={id} className={`img-container ${wallLocation}`}>
        <img src={url} alt={`${title}_${id}`}/>
      </Link>
    </>
  )

}

export default Artwork;

// src/assets/clear_heart.png
// src/assets/clear_heart.png