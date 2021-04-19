import './App.scss';
import { Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useAppContext } from '../../AppContext.js';
import { shuffleItems } from '../../utilities.js';
import { getAllIDs, fetchArtObject } from '../../api.js'
import Wall from '../Wall/Wall';
import Header from '../Header/Header';
import ArtDetails from '../ArtDetails/ArtDetails.js';
import FavoriteSection from '../FavoritesSection/FavoriteSection.js';

function App() {
  const [state, dispatch] = useAppContext();
  const searchTerm = 'q=sunflower'; // search terms that we made to state

  const getIDs = async (searchTerm) => {
    try {
      const allIDs = await getAllIDs(searchTerm);
      dispatch({ 
        type: 'GET_IDS', 
        payload: allIDs
      });
    } catch (error) {
      return {...state, error }
    }
  }

  const getSingleArtPiece = async (index) => {
    try {
      return fetchArtObject(index);
    } catch (error) {
      return {...state, error }
    }
  }

  const collectArtPieces = () => {
    const shuffledPieces = shuffleItems(state.ids);
    const wall = [];

    for (var i = 0; i < 7; i++) {
      const artPiece = getSingleArtPiece(shuffledPieces[i])
      wall.push(artPiece);
    }

    Promise.all(wall)
      .then(collectedPieces => dispatch({ 
        type: 'COLLECT_ARTPIECES', 
        payload: collectedPieces 
      }))
      .catch(error => ({...state, error }));
  }

  useEffect(() => {
    getIDs(searchTerm);
  }, [])

  useEffect(() => {
    state.ids.length && collectArtPieces();
  }, [state.ids])

  return (
      <div className="App">
        <Header />
        <Switch>
          <Route 
            exact path="/"
            render={() => (
              <section className='wall-container'>
                <Wall artPieces={state.artPieces} />
                {/* {console.log(state.artPieces)} */}
              </section>
            )}
            /> 
          <Route exact path="/favorites" render={() => {
            console.log(state.favorites)
            return <FavoriteSection favorites={state.favorites}/>
          }}/>
          <Route exact path='/:artPieceID' render={({ match }) => {
            const { artPieceID } = match.params;
            return <ArtDetails artPieceID={artPieceID} />
          }} />
        </Switch>
      </div>
  );
}

export default App;
