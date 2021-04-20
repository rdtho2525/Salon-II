import React from 'react';
import { useAppContext } from '../../AppContext.js';
import Favorite from '../Favorite/Favorite.js';
import './FavoriteSection.scss'

const FavoriteSection = () => {
  const [state, dispatch] = useAppContext();
  const allFavorites = state.favorites.map(favorite => {
    console.log(state.favorites)
    return (
      <Favorite 
        id={favorite.objectID}
        title={favorite.title}
        // key={favorite.objectID}
        artist={favorite.artistDisplayName}
        url={favorite.primaryImageSmall}
      />
    )
  })


  return (
    <>
      <section className="favorites-container">
        {!!allFavorites.length && allFavorites}
      </section>
    </>
  )
}

export default FavoriteSection;
