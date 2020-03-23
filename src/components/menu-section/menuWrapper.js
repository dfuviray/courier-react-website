import styled from 'styled-components';

export const MenuWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;

  @media only screen and (min-width: 1024px) {
    position: absolute;
    width: calc(100% - 16px * 2);
    top: 16px;
  }

  .logo {
    height: 3.6rem;
    width: auto;
  }

  .burger-nav {
    width: 5.4rem;
    height: 4.8rem;
    background-color: #bb4477;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (min-width: 1024px) {
    .burger-nav {
      display: none;
    }
  }

  .burger-nav__icon {
    width: 100%;
    height: 3.2rem;
    fill: #fff;
  }

  .nav {
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 72%;
    height: 100%;
    background: #fff;
    z-index: 11111;
    transform: translate3d(-100%, 0, 0);
    transition: all 0.5s cubic-bezier(0.61, 0.03, 0, 1.83);
  }

  @media only screen and (min-width: 1024px) {
    .nav {
      position: relative;
      background: none;
      transform: translate3d(0, 0, 0);
      width: auto;
      transition: none;
    }
  }

  .nav.active {
    transform: translate3d(0, 0, 0);
  }

  .nav__list {
    list-style-type: none;
    font-size: 2rem;
  }
  @media only screen and (min-width: 1024px) {
    .nav__list {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }

  .nav__item {
    padding: 32px 24px;
    color: #fff;
  }

  @media only screen and (min-width: 1024px) {
    .nav__item {
      padding: 0;
      padding-left: 2.4rem;
    }
  }

  .nav__item.active {
    background: #bb4477;
  }

  @media only screen and (min-width: 1024px) {
    .nav__item.active {
      background: none;
    }
  }

  .nav__item.active .nav__link:link,
  .nav__item.active .nav__link:visited {
    color: #fff;
  }

  @media only screen and (min-width: 1024px) {
    .nav__item.active .nav__link:link,
    .nav__item.active .nav__link:visited {
      color: rgba(0, 0, 0, 0.8);
    }
  }

  .nav__link {
    text-decoration: none;
    text-transform: uppercase;
    // color: #fff;
  }
`;
