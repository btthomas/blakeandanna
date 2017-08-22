import React from 'react'
import Link from 'gatsby-link'

const people = [
  {
    name: 'Marianne',
    imgSrc: '/pics/marianne.jpg',
    description: 'Marianne smells bad.',
  },
  {
    name: 'Rachel',
    imgSrc: 'http://via.placeholder.com/900x1200',
    description: 'Rachel smells bad.',
  },
  {
    name: 'Maggie',
    imgSrc: 'http://via.placeholder.com/900x1200',
    description: 'Maggie smells bad.',
  },
  {
    name: 'Caitlin',
    imgSrc: '/pics/caitlin.jpg',
    description: 'Caitlin smells bad.',
  },
  {
    name: 'Brian',
    imgSrc: '/pics/brian.jpg',
    description: 'Brian smells bad.',
  },
  {
    name: 'Ben',
    imgSrc: '/pics/ben.jpg',
    description: 'Ben smells bad.',
  },
  {
    name: 'Eric',
    imgSrc: '/pics/eric.jpg',
    description: 'Eric smells bad.',
  },
  {
    name: 'Bruce',
    imgSrc: '/pics/bruce.jpg',
    description: 'Bruce smells bad.',
  },
];

const PeoplePage = () =>
  <div>
    <h2>People</h2>
    
    {people.map(person => {
      return (
        <div key={person.name}>
          <h4>{person.name}</h4>
          <img src={person.imgSrc} style={{width: '80%', maxWidth: '600px', height: 'auto', display: 'block', margin: '15px auto'}}/>
          <p>{''}</p>
        </div>
      );
    })}

  </div>

export default PeoplePage;
