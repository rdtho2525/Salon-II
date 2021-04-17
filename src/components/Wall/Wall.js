import React from 'react';
import './Wall.scss';
import Artwork from '../Artwork/Artwork';

const Wall = ({ artPieces }) => {

  // const salonTemplates = []; This will eventually contain multiple templates to choose from.

  const artPiecesToDisplay = artPieces.map((piece, index) => {
      return (
        <Artwork
        title={piece.title}
        wallLocation={`div${index}`}
        key={piece.objectID}
        id={piece.objectID}
        url={piece.primaryImageSmall}
        />
      )
  })

  return (
      <section className='salonTemplate'>
        {artPiecesToDisplay}
      </section>
  )

}

export default Wall;
