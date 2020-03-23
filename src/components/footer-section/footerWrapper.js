import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;

  .social-media .social-media__link {
    display: inline-block;
    font-size: 1.6rem;
    width: 4rem;
    height: 4rem;
    border-radius: 1111rem;
    background: linear-gradient(
      90deg,
      rgba(179, 76, 132, 1) 60%,
      rgba(179, 123, 76, 1) 100%
    );
    color: #fff;
    text-align: center;
    line-height: 4rem;
    margin-left: 11px;
  }

  @media only screen and (min-width: 768px) {
    .social-media .social-media__link {
      margin-left: 19px;
    }
  }
`;
