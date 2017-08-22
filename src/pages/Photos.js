import React from 'react'
import Link from 'gatsby-link'

const photos = [
  '/pics/blake_anna_1.jpg',
  '/pics/blake_anna_2.jpg',
  '/pics/blake_anna_3.jpg',
  '/pics/blake_anna_4.jpg',
  '/pics/blake_anna_5.jpg',
  '/pics/blake_anna_6.jpg',
  '/pics/blake_anna_7.jpg',
  '/pics/blake_anna_8.jpg',
  '/pics/blake_anna_9.jpg',
  '/pics/blake_anna_10.jpg',
];

const PhotosPage = () =>
  <div>
    {photos.map(photo => <img key={photo} style={{width: '100%', height: 'auto', display: 'block', margin: '15px auto'}} src={photo} />)}
  </div>

export default PhotosPage;
