import React, { createContext, useReducer, useState } from 'react';

const AppContext = createContext();

const initialState = {
  ids: [],
  artPieces: [],
  favorites: [],
  searchTerms: [],
  error: ''
}

const reducer = (state, action) => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites'));

  switch(action.type) {
    case 'GET_IDS':
        return {...state, ids: action.payload}
    case 'COLLECT_ARTPIECES':
      const ids = !!storedFavorites && storedFavorites.map(fav => fav.objectID);
      action.payload.forEach(item => {
        !!ids && ids.includes(item.objectID) ? item.isFavorited = true : item.isFavorited = false;
      });
      return {...state, artPieces: action.payload}
    case 'GET_SINGLE_PIECE':
      return state.artPieces.filter(piece => piece.objectID !== action.payload)
    case 'GET_FAVORITES':
      // const uniqueFavorites = action.payload.filter((item, index, arr) => arr.indexOf(item) === index)
      return {...state, favorites: action.payload}
    case 'ADD_TO_FAVORITES':
      action.payload.isFavorited = true;
      storedFavorites ? localStorage.setItem('favorites', JSON.stringify([...storedFavorites, action.payload])) : localStorage.setItem('favorites', JSON.stringify([action.payload]));
      return {...state, favorites: [...storedFavorites, action.payload]}
    case 'REMOVE_FROM_FAVORITES':
      action.payload.isFavorited = false;
      const filteredFavorites = storedFavorites.filter(favorite => favorite.objectID !== action.payload.objectID)
      localStorage.setItem('favorites', JSON.stringify(filteredFavorites))
      return {...state, favorites: [...filteredFavorites]}
  }
}

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={[state, dispatch]} {...props}/>
  )
}

const useAppContext = () => React.useContext(AppContext);

export { AppProvider, useAppContext };