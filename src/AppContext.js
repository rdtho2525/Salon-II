import React, { createContext, useReducer } from 'react';

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
    case 'ADD_TO_FAVORITES':
      const pastFavorites = JSON.parse(localStorage.getItem('favorites'));
      const allFavorites = JSON.stringify([...pastFavorites, action.payload]);
      const newFavorites = JSON.stringify([action.payload]);
      pastFavorites ? localStorage.setItem('favorites', allFavorites) : localStorage.setItem('favorites', newFavorites);
      return {...state, favorites: [...pastFavorites, action.payload]}
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