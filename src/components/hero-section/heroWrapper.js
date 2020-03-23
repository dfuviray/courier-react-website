import styled from 'styled-components';

import bgImage from '../../assets/img/bench-accounting-MGaFENpDCsw-unsplash.jpg';

export const HeroWrapper = styled.div`
  /* Header */

  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100vh;
    margin-bottom: 80px;
  }

  .hero {
    margin-bottom: 48px;
  }

  @media only screen and (min-width: 768px) {
    .hero {
      padding-left: 12.36%;
      padding-right: 12.36%;
    }
  }

  @media only screen and (min-width: 1024px) {
    .hero {
      width: 55%;
      padding-right: 2.4rem;
      padding-left: 0;
    }
  }

  .hero__heading {
    margin-bottom: 16px;
  }

  @media only screen and (min-width: 768px) {
    .hero__heading {
      font-size: 5.4rem;
      line-height: 5.4rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    .hero__heading {
      font-size: 4.8rem;
      line-height: 5.4rem;
    }
  }

  .hero__subheading {
    margin-bottom: 16px;
    color: rgba(0, 0, 0, 0.5);
  }

  .hero__btn {
    background: linear-gradient(
      90deg,
      rgba(179, 76, 132, 1) 25%,
      rgba(179, 123, 76, 1) 50%,
      rgba(179, 76, 81, 1) 100%
    );
    color: #fff;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  @media only screen and (min-width: 768px) {
    .hero__btn {
      left: 0;
      transform: translateX(0);
    }
  }

  .hero__btn:hover {
    background: linear-gradient(
      90deg,
      rgba(179, 123, 76, 1) 25%,
      rgba(179, 123, 76, 1) 50%,
      rgba(179, 123, 76, 1) 100%
    );
  }

  .hero__btn:active {
    background: linear-gradient(
      90deg,
      rgba(179, 76, 81, 1) 25%,
      rgba(179, 76, 81, 1) 50%,
      rgba(179, 76, 81, 1) 100%
    );
  }

  .hero-image {
    height: 32.8rem;
    background-size: cover;
    background-image: linear-gradient(
        90deg,
        rgba(179, 76, 132, 0.3) 60%,
        rgba(179, 123, 76, 0.3) 100%
      ),
      url(${bgImage});
    margin-bottom: 48px;
  }

  @media only screen and (min-width: 768px) {
    .hero-image {
      height: 52.6rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    .hero-image {
      width: 45%;
      height: 100vh;
      background-size: cover;
      background-position: left;
      background-image: linear-gradient(
          90deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 50%,
          rgba(255, 255, 255, 0) 100%
        ),
        linear-gradient(
          90deg,
          rgba(179, 76, 132, 0.3) 60%,
          rgba(179, 123, 76, 0.3) 100%
        ),
        url(${bgImage});
      margin-bottom: 0;
    }
  }
`;
