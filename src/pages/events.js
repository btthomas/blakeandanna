import React from 'react';
import popup from '../popup.js';

const EventsPage = () =>
  <div className="events">
    <h2>Welcome Party</h2>
    <h3>9:00 PM, February 2, 2018</h3>
    <h4>Earl's Kitchen</h4>
    <a 
      href="https://goo.gl/maps/3HZ8HpqCkPH2"
      onClick={popup.bind(null, `https://goo.gl/maps/3HZ8HpqCkPH2`)}
    >
      7902 Tysons One Place, Tysons, VA 22102
    </a>
    <p className="top-7">
      Join us for drinks and bites at Earl's Kitchen, a quick walk from the Hyatt Regency Tyson's Corner.
    </p>
    <h2>Wedding Ceremony and Reception</h2>
    <h3>5:30 PM, February 3, 2018</h3>
    <h4>The Atrium at Meadowlark Botanical Gardens</h4>
    <a 
      href="https://goo.gl/maps/6YZJVGc3tWC2"
      onClick={popup.bind(null, `https://goo.gl/maps/6YZJVGc3tWC2`)}
    >
      9750 Meadowlark Gardens Court, Vienna, VA 22182
    </a>
    <p className="top-7  bottom-12">
      Dinner and dancing will follow the ceremony.  Get ready to boogie!
    </p>
    <p className="top-7">
      Shuttles to the wedding will depart from outside the
      Hyatt ground floor lobby at 4:45 in the afternoon.
    </p>
    <h2>Open House</h2>
    <h3>February 4, 2018</h3>
    <h4>The Home of Bruce and Betsy Thomas</h4>
    <a
      href="https://goo.gl/maps/RUTjmbnGyqx"
      onClick={popup.bind(null, 'https://goo.gl/maps/RUTjmbnGyqx')}
    >
      7704 Huntmaster Lane, McLean, VA 22102
    </a>
    <p className="top-7">
      Please join us on between 10:00 in the morning and 4:00 in
      the afternoon for an open house at the home of Blake’s parents.
    </p>
    <img
      style={{width: '100%', maxWidth: '500px', height: 'auto', display: 'block', margin: '30px auto'}}
      src="https://www.novaparks.com/sites/default/files/styles/full_width/public/image-gallery/Meadowlark8.jpg"
    />
  </div>

export default EventsPage;
