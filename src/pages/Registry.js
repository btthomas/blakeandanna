import React from 'react'
import popup from '../popup.js';

const links = [
  {
    url: 'https://www.crateandbarrel.com/gift-registry/anna-hunter-and-blake-thomas/r5729048',
    imgSrc: 'https://images.crateandbarrel.com/is/image/Crate/WebsiteHeaderLogo/fmt=png-alpha/170805043136/WebsiteHeaderLogo.jpg'
  },
  {
    url: 'https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?registryId=544926178&eventType=Wedding&pwsurl=&eventType=Wedding',
    imgSrc: 'https://www.bedbathandbeyond.com/_assets/global/images/logo/logo_bbb.png',
    id: 'bath'
  },
];

const RegistryPage = () => {

  return (
    <div className="registry">
      {links.map(link => {
        return (
          <a key={link.url} href={link.url} onClick={popup.bind(null, link.url)}>
            <img src={link.imgSrc} id={link.id}/>
          </a>
        );
      })}
    </div>
  );
}

export default RegistryPage;
