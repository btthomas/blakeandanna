import React from 'react'
import Link from 'gatsby-link'

const MAX = 26;

const nums = [];

for ( let i = 1; i <= MAX; i++ ) {
  nums.push(i);
}

const photos = nums.map(num => `/pics/blake_anna_${num}.jpg`);

const PhotosPage = () =>
  <div>
    {photos.map(photo => <img key={photo} style={{width: '100%', height: 'auto', display: 'block', margin: '15px auto'}} src={photo} />)}
  </div>

export default PhotosPage;
