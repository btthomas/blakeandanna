import React from 'react';
import popup from '../popup.js';

const EventsPage = () =>
  <div className="events">
    <h2>Welcome Gathering</h2>
    <h3>9:00 PM, February 2, 2018</h3>
    <h4>Earl's Kitchen</h4>
    <p>
      <a 
        href="https://goo.gl/maps/3HZ8HpqCkPH2"
        onClick={popup.bind(null, `https://goo.gl/maps/3HZ8HpqCkPH2`)}
      >
        7902 Tysons One Place, Tysons, VA 22102
      </a><br/>
      Please join us for drinks and bites at Earl's Kitchen in Tyson's Corner.
    </p>
    <h2>Wedding Ceremony and Reception</h2>
    <h3>5:30 PM, February 3, 2018</h3>
    <h4>The Atrium at Meadowlark Botanical Garden</h4>
    <p>
      <a 
        href="https://goo.gl/maps/6YZJVGc3tWC2"
        onClick={popup.bind(null, `https://goo.gl/maps/6YZJVGc3tWC2`)}
      >
        9750 Meadowlark Gardens Court, Vienna, VA 22182
      </a>
    </p>
    <img 
      style={{width: '100%', maxWidth: '500px', height: 'auto', display: 'block', margin: '30px auto'}}
      src="https://www.novaparks.com/sites/default/files/styles/full_width/public/image-gallery/Meadowlark8.jpg"
    />
  </div>

export default EventsPage;
