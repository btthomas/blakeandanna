import React from 'react'
import Link from 'gatsby-link'


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

  const handleClick = (url, e) => {
    e.preventDefault();

    window.open(url, '_blank');
  }

  return (
    <div className="registry">
      {links.map(link => {
        return (
          <a key={link.url} href={link.url} onClick={handleClick.bind(null, link.url)}>
            <img src={link.imgSrc} id={link.id}/>
          </a>
        );
      })}
    </div>
  );
}

export default RegistryPage;
