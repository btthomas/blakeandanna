import React from 'react';
import popup from '../popup.js';

const AccomodationsPage = () =>
  <div>
    <h2>
      Hyatt Regency Tysons Corner Center
    </h2>
    <h4>
      <a
        href="https://goo.gl/maps/GwL8cckNgXK2"
        onClick={popup.bind(null, `https://goo.gl/maps/GwL8cckNgXK2`)}
      >
        7901 Tysons One Place<br/>Tysons, VA 22102
      </a>
    </h4>
    <a 
      href="https://aws.passkey.com/go/hunterandthomaswedding"
      onClick={popup.bind(null, `https://aws.passkey.com/go/hunterandthomaswedding`)}
    >
      Click here to make a reservation with a discounted rate.
    </a>
    <img
      style={{width: '100%', maxWidth: '500px', height: 'auto', display: 'block', margin: '30px auto'}}
      src="https://yt3.ggpht.com/-L8oRWx9L7uI/AAAAAAAAAAI/AAAAAAAAAAA/VqzGSozeoDM/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
    />
  </div>

export default AccomodationsPage;
