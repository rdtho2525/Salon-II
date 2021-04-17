import React, { useContext } from 'react';
import AppContext from '../../AppContext.js';
import { useAppContext } from '../../AppContext.js';
import { Link } from 'react-router-dom';
import './Artwork.scss';
import '../Wall/Wall.scss';

const Artwork = ({ id, url, title, wallLocation }) => {
  const [state, dispatch] = useAppContext();

  return (
    <Link to={`/${id}`} data={id} className={`img-container ${wallLocation}`}>
      <img src={url} alt={`${title}_${id}`}/>
      <button onClick={() => dispatch({ type: 'ADD_TO_FAVORITES', payload: id })}>Add to Favorites</button>
    </Link>
  )

}

export default Artwork;
