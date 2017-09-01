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
    imgSrc: '/pics/rachel.jpg',
    description: 'Rachel smells bad.',
  },
  {
    name: 'Maggie',
    imgSrc: '/pics/maggie.jpg',
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
    {people.map(person => {
      return (
        <div key={person.name}>
          <h3>{person.name}</h3>
          <img src={person.imgSrc} style={{width: '80%', maxWidth: '600px', height: 'auto', display: 'block', margin: '-5px auto 25px'}}/>
          <p>{''}</p>
        </div>
      );
    })}

  </div>

export default PeoplePage;
