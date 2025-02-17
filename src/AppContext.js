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
  switch(action.type) {
    case 'GET_IDS':
        return {...state, ids: action.payload}
    case 'COLLECT_ARTPIECES': 
      return {...state, artPieces: action.payload}
    case 'GET_SINGLE_PIECE':
      return state.artPieces.filter(piece => piece.objectID !== action.payload)
    case 'GET_FAVORITES':
      // const uniqueFavorites = action.payload.filter((item, index, arr) => arr.indexOf(item) === index)
      return {...state, favorites: action.payload}
    case 'ADD_TO_FAVORITES':
      const pastFavorites = JSON.parse(localStorage.getItem('favorites'));
      pastFavorites ? localStorage.setItem('favorites', JSON.stringify([...pastFavorites, action.payload])) : localStorage.setItem('favorites', JSON.stringify([action.payload]));
      return {...state, favorites: [...pastFavorites, action.payload]}
    case 'REMOVE_FROM_FAVORITES':
      const presetFavorites = JSON.parse(localStorage.getItem('favorites'));
      const filteredFavorites = presetFavorites.filter(favorite => favorite.objectID !== action.payload.objectID)
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