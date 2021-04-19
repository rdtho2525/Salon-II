import React from 'react';
import './Wall.scss';
import Artwork from '../Artwork/Artwork';
import Carousel from "react-elastic-carousel";


const Wall = ({ artPieces }) => {

  // const salonTemplates = []; This will eventually contain multiple templates to choose from.

  const artPiecesToDisplay = artPieces.map((piece, index) => {
      return (
        <Artwork
        artPiece={piece}
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
        <Carousel>
          {artPiecesToDisplay}
        </Carousel>
      </section>
  )

}

export default Wall;
