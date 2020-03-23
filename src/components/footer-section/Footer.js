import React from 'react';

import { FooterWrapper } from './footerWrapper';

import logoFooter from '../../assets/img/logo.svg';

const Footer = () => {
  return (
    <FooterWrapper>
      <img className="logo" src={logoFooter} alt="logo" />

      <div className="social-media">
        <a className="social-media__link" href="#">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        {/* <!----> */}
        <a className="social-media__link" href="#">
          <i className="fa fa-google-plus" aria-hidden="true"></i>
        </a>
        {/* <!----> */}
        <a className="social-media__link" href="#">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
