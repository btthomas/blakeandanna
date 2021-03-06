import React from 'react';
import popup from '../popup.js';

const AccommodationsPage = () =>
  <div>
    <h2>
      Hyatt Regency Tysons Corner Center
    </h2>
    <a
      href="https://goo.gl/maps/GwL8cckNgXK2"
      onClick={popup.bind(null, `https://goo.gl/maps/GwL8cckNgXK2`)}
    >
      7901 Tysons One Place<br/>Tysons, VA 22102
    </a>
    <p className="top-7 bottom-12">
      The Hyatt Regency is conveniently located next to Tyson's Corner shopping mall and the Tyson's Corner Station on the Silver Line of the Washington Metro.
    </p>
    <p className="top-7">
      Shuttles to the wedding will depart from outside the
      Hyatt ground floor lobby at 4:45 in the afternoon.
    </p>
    <img
      style={{width: '100%', maxWidth: '500px', height: 'auto', display: 'block', margin: '30px auto'}}
      src="https://yt3.ggpht.com/-L8oRWx9L7uI/AAAAAAAAAAI/AAAAAAAAAAA/VqzGSozeoDM/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
    />
  </div>

export default AccommodationsPage;
