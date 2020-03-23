import styled from 'styled-components';

export const ServicesWrapper = styled.section`

text-align: center;

.service__heading {
  text-transform: uppercase;
  line-height: 4rem;
  color: #bb4477;
  margin-bottom: 16px;
}

.service__subheading {
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.65);
  margin-bottom:  80px;
}

.service-categories {
}

@media only screen and (min-width: 768px) {
  .service-categories {
    display: flex;
    flex-wrap: wrap;
  }
}

@media only screen and (min-width: 1024px) {
  .service-categories {
    margin-bottom: 80px;
  }
}

.service-category {
  margin-bottom: 48px;
}

@media only screen and (min-width: 768px) {
  .service-category {
    width: 50%;
  }

  .service-category:nth-of-type(odd) {
    padding-right: 3.125%;
    width: 50%;
  }
}

@media only screen and (min-width: 1024px) {
  .service-category {
    width: 25%;
    padding-right: 2.4rem;
  }
  .service-category:last-of-type {
    padding-right: 0;
  }

  .service-category:nth-of-type(odd) {
    padding-right: 2.4rem;
    width: 25%;
  }
}

.service-category svg {
  height: 9.6rem;
  width: 9.6rem;
  margin-bottom: 16px;
}

@media only screen and (min-width: 1024px) {
  .service-category svg {
    width: 100%;
    height: 11rem;
    padding-right: 0;
  }
}
.service-category__icon {
  fill: #bb4477;;
}

.service-category__title {
  margin-bottom: 16px;
}

.service-category__subtitle {
  color: rgba(0, 0, 0, 0.65);
`;
