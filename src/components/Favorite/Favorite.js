import React from 'react';
import { Link } from 'react-router-dom';
import './Favorite.scss';

const Favorite = ({ id, title, key, artist, url }) => {
  return (
    <Link 
    to={`/${id}`} 
    className="favorite">
      <img className='favorite-image' src={url} alt={`${title}_${id}`}/>
      <aside className="favorite-detail">
        <h2 className="favorite-title">"{title}"</h2>
        <p>{artist || '[Unknown artist]'}</p>
      </aside>
    </Link>
  )
}

export default Favorite;