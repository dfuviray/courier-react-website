import styled from 'styled-components';

export const TrackWrapper = styled.section`
  background-color: #bb4477;
  padding-top: 80px;
  margin-left: 0;
  margin-right: 0;

  .track-package__search {
    display: flex;
    justify-content: center;
  }

  .track-package__title {
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    margin-bottom: 48px;
  }

  .track-package__btn {
    background: #b37b4c;
    color: #fff;
    position: relative;

    margin-bottom: 80px;
  }

  .track-package__input {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    .track-package__btn {
      left: 0;
      transform: translateX(0);
    }
  }
  @media only screen and (min-width: 768px) {
    .track-package__input {
      display: inline-block;
      margin-right: 24px;
    }
  }
`;
