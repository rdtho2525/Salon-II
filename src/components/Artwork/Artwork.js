import React from 'react';
import './Artwork.scss';
import '../Wall/Wall.scss';

const Artwork = ({ id, url, wallLocation }) => {

  return (
    <div data={id} className={wallLocation}>
      <img src={url} />
    </div>
  )

}

export default Artwork;
