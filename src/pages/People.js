import React from 'react'
import Link from 'gatsby-link'

const people = [
  {
    name: 'Marianne',
    imgSrc: 'http://via.placeholder.com/900x1200',
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
    imgSrc: 'http://via.placeholder.com/900x1200',
    description: 'Caitlin smells bad.',
  },
  {
    name: 'Brian',
    imgSrc: 'http://via.placeholder.com/900x1200',
    description: 'Brian smells bad.',
  },
  {
    name: 'Ben',
    imgSrc: 'http://via.placeholder.com/900x1200',
    description: 'Ben smells bad.',
  },
  {
    name: 'Eric',
    imgSrc: 'http://via.placeholder.com/900x1200',
    description: 'Eric smells bad.',
  },
  {
    name: 'Bruce',
    imgSrc: 'http://via.placeholder.com/900x1200',
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
          <p>{person.description}</p>
        </div>
      );
    })}

  </div>

export default PeoplePage;
