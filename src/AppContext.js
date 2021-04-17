import React, { createContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  ids: [],
  artPieces: [],
  favorites: [],
  searchTerms: [],
  error: ''
}

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={[state, dispatch]} {...props}/>
  )
}

const useAppContext = () => React.useContext(AppContext);

export { AppProvider, useAppContext };