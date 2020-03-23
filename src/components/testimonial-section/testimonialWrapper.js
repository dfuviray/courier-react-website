import styled from 'styled-components';

export const TestimonialWrapper = styled.section`
  /* Testimonial */

  margin-bottom: 80px;

  @media only screen and (min-width: 768px) {
    width: 75%;
    margin: 0 auto;
  }

  @media only screen and (min-width: 1024px) {
    width: calc(100% - 16px);
    margin: 0 16px;
    margin-bottom: 80px;
  }

  .testimonial__title {
    text-transform: uppercase;
    color: #bb4477;
    text-align: center;
    margin-bottom: 80px;
  }

  .customers:first-of-type {
    margin-bottom: 64px;
  }

  .customer__info {
    margin-bottom: 24px;
  }

  @media only screen and (min-width: 1024px) {
    .customers {
      display: flex;
    }

    .customers:first-of-type {
      margin-bottom: 64px;
    }
  }

  .customers .customer:nth-child(even) .customer__info {
    flex-direction: row-reverse;
  }

  @media only screen and (min-width: 1024px) {
    .customers .customer:nth-child(even) .customer__info {
      flex-direction: row;
    }
  }

  .customers .customer:nth-child(even) .customer__image {
    margin-right: 0;
    margin-left: 16px;
  }

  @media only screen and (min-width: 1024px) {
    .customers .customer:nth-child(even) .customer__image {
      margin-right: 16px;
      margin-left: 0;
    }
  }

  @media only screen and (min-width: 1024px) {
  }

  .customer {
    margin-bottom: 64px;
  }

  @media only screen and (min-width: 1024px) {
    .customer {
      width: 50%;
      margin-bottom: 0;
    }
    .customer:first-of-type {
      padding-right: 2.4rem;
    }
  }

  .customer:last-of-type {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 768px) {
    .customer:last-of-type {
      margin-bottom: 64px;
    }
  }

  @media only screen and (min-width: 1024px) {
    .customer:last-of-type {
      margin-bottom: 0;
    }
  }

  .customer__message {
    line-height: 2.4rem;
    margin-bottom: 24px;
  }
  @media only screen and (min-width: 1024px) {
    .customer__message {
      height: auto;
    }
  }

  .customer__info {
    height: 7.8rem;
    display: flex;
    align-items: center;
  }

  @media only screen and (min-width: 1024px) {
    .customer__info {
      margin-bottom: 16px;
    }
  }

  .customer__image {
    position: relative;
    width: 7.8rem;
    height: 7.8rem;
    border-radius: 1111rem;
    background: linear-gradient(
      90deg,
      rgba(179, 76, 132, 1) 60%,
      rgba(179, 123, 76, 1) 100%
    );
    margin-right: 16px;
  }

  .customer__name {
    position: relative;

    color: rgba(0, 0, 0, 0.5);
  }
`;
