import React from 'react'
import Link from 'gatsby-link'

const photos = [
  "https://unsplash.it/1000",
  "https://unsplash.it/1200/1000",
  "https://unsplash.it/1000/1200",
  "https://unsplash.it/900/1000",
  "https://unsplash.it/1200/900",
  "https://unsplash.it/800/600",
];

const PhotosPage = () =>
  <div>
    {photos.map(photo => <img key={photo} style={{width: '100%', height: 'auto', display: 'block', margin: '15px auto'}} src={photo} />)}
  </div>

export default PhotosPage;
