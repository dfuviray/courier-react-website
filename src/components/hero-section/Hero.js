import React from 'react';

import { HeroWrapper } from './heroWrapper';
const Hero = () => {
  return (
    <HeroWrapper>
      <header className="hero">
        <h1 className="hero__heading">
          Worldwide shipping for all your shipping needs
        </h1>
        <p className="hero__subheading">
          We delivery your shipping in any location of the world. Fast, secured
          and right in front of your door.
        </p>
        <button className="btn hero__btn">Learn more</button>
      </header>

      <div className="hero-image"></div>
    </HeroWrapper>
  );
};

export default Hero;
