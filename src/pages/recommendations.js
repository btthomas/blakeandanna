import React from 'react';
import popup from '../popup.js';

const food = [
  {
    name: 'Taco Bamba',
    description: `Blake and Anna's favorite date spot. Delicious tacos and super tortas with unique flavor combinations.`,
    url: 'https://www.tacobamba.com/',
  },
  {
    name: 'Lost Dog Cafe',
    description: `An old Thomas family favorite - gourmet pizza, sandwiches, and craft beer.`,
    url: 'https://www.lostdogcafe.com/',
  },
  {
    name: 'Plaka Grill',
    description: `Gyros, souvlaki, and other Greek specialties. A favorite lunch spot of Blake's. Try the Chicago Gyro, Plaka style!`,
    url: 'http://www.plakagrill.com/',
  },
  {
    name: 'Pho 7',
    description: `Vietnamese noodle soup - perfect on a cold day, and a Hunter family favorite.`,
    url: 'http://pho7va.wixsite.com/pho7va',
  },
];

const activities = [
  {
    name: 'Great Falls Park',
    description: `Walk or hike along the Potomac River and enjoy the incredible scenery.`,
    url: 'https://www.nps.gov/grfa/index.htm',
  },
  {
    name: 'The Smithsonian',
    description: `World-class free museums, many easily accessed by metro. Anna loves the installations at the Renwick Gallery, and Blake's favorite is the Udvar-Hazy Center, part of the Air and Space Museum.` ,
    url: 'https://www.si.edu/museums',
  },
  {
    name: 'Arlington National Cemetery',
    description: `A beautiful place to explore and reflect.`,
    url: 'http://www.arlingtoncemetery.mil/',
  },
];

const ThingsToDoPage = () =>
  <div className="things">
    <h2>Food</h2>
    <ul>
      {food.map(place => {
        return (
          <li key={place.url}>
            <h4><a 
              href={place.url}
              onClick={popup.bind(null, place.url)}
            >
              {place.name}
            </a></h4>
            <p>{place.description}</p>
          </li>
        );
      })}
    </ul>
    <h2>Activities</h2>
    <ul>
      {activities.map(place => {
        return (
          <li key={place.url}>
            <h4><a 
              href={place.url}
              onClick={popup.bind(null, place.url)}
            >
              {place.name}
            </a></h4>
            <p>{place.description}</p>
          </li>
        );
      })}
    </ul>
  </div>

export default ThingsToDoPage;
