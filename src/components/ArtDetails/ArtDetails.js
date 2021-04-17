import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../AppContext.js';
import { fetchArtObject } from '../../api.js'
import './ArtDetails.scss';

const ArtDetails = ({ artPieceID }) => {
  const [ selectedArt, setSelectedArt ] = useState('');

    const getSingleArtPiece = async () => {
      try {
        const artPiece = await fetchArtObject(artPieceID);
        setSelectedArt(artPiece);
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getSingleArtPiece();
    }, [])

  return (
    <>
      <section className="art-details">
        <img className="details-image" src={selectedArt.primaryImage} alt={selectedArt.title}/>
        <aside>
          <h2>Featured Artifact:</h2>
          <h3>"{selectedArt.title}"</h3>
          <p>c. {selectedArt.objectBeginDate}-{selectedArt.objectEndDate}</p>
          <p>{selectedArt.artistDisplayName}</p>
          <p>{selectedArt.medium}</p>
        </aside>
      </section>
    </>
  )
}

export default ArtDetails;