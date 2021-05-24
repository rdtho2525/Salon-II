import React, { useState } from 'react';
import { useAppContext } from '../../AppContext.js';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Tooltip } from '@material-ui/core';
import './Artwork.scss';
import '../Wall/Wall.scss';

const Artwork = ({ 
  artPiece, 
  id, 
  url, 
  title, 
  wallLocation 
}) => {
  const [isFavorited, setIsFavorited] = useState(artPiece.isFavorited);
  const [state, dispatch] = useAppContext();
  const actionType = isFavorited === false ? 'ADD_TO_FAVORITES' : 'REMOVE_FROM_FAVORITES';

  const style = {
    fontSize: 25,
    marginTop: 5,
    cursor: "pointer"
  }
  
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited)
  }

  const checkFavStatus = () => {
    if (isFavorited) {
      return (
        <Tooltip title="Remove from Favorites">
          <FavoriteIcon aria-label={"Remove from Favorites"} style={style}/> 
        </Tooltip>
      )
    } else {
      return (
        <Tooltip title="Add to Favorites">
          <FavoriteBorderIcon aria-label={"Add to Favorites"} style={style}/>
        </Tooltip>
      )
    }
  }

  return (
    <section className="landing-section">
      <button onClick={() => {
        dispatch({ type: actionType, payload: artPiece })
        toggleFavorite()
      }}>{checkFavStatus()}</button>
      <Link to={`/${id}`} data={id} className={`img-container ${wallLocation}`}>
        <img src={url} alt={`${title}_${id}`}/>
      </Link>
    </section>
  )

}

export default Artwork;