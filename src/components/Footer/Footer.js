import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <p>
        Fanimals est un organisme à but non lucratif qui ne fonctionne qu’avec
        des fonds privés et ne bénéficie d’aucune subvention publique. Nous
        avons besoin de vous !
      </p>
      <button className='footer-button' type='button'>
        Faire un don
      </button>
    </div>
  );
};

export default Footer;
