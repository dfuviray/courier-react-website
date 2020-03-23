import React from 'react';

import { ServicesWrapper } from './servicesWrapper';

import newsPaperIcon from '../../assets/icons/news-paper.svg';
import boxIcon from '../../assets/icons/box.svg';
import chartIcon from '../../assets/icons/chart.svg';
import mobileDevices from '../../assets/icons/mobile-devices.svg';

const Services = () => {
  return (
    <ServicesWrapper>
      <h2 className="service__heading">Our services to your shipping needs</h2>
      <p className="service__subheading">
        Our services is here to help you whether it is for Personal, Family and
        Business we got you covered
      </p>

      <div className="service-categories">
        <div className="service-category">
          <a href="#">
            <svg>
              <use
                className="service-category__icon"
                xlinkHref={`${newsPaperIcon}#newspaper`}
                alt="newspaper icon"
              />
            </svg>
            <p className="service-category__title">Send documents</p>
            <p className="service-category__subtitle">
              Your documents are secured and handled with care. We treat them
              like ours
            </p>
          </a>
        </div>
        <div className="service-category">
          <a href="#">
            <svg>
              <use
                className="service-category__icon"
                xlinkHref={`${boxIcon}#box`}
                alt="newspaper icon"
              />
            </svg>
            <p className="service-category__title">Send Boxes</p>
            <p className="service-category__subtitle">
              We accept any size of boxes you ship. We know how much you love
              your family
            </p>
          </a>
        </div>

        <div className="service-category">
          <a href="#">
            <svg>
              <use
                className="service-category__icon"
                xlinkHref={`${chartIcon}#chart`}
                alt="chart icon"
              />
            </svg>
            <p className="service-category__title">Business needs</p>
            <p className="service-category__subtitle">
              We are your partner in your business. We pick them in your area
              and deliver them to your customers on time
            </p>
          </a>
        </div>

        <div className="service-category">
          <a href="#">
            <svg>
              <use
                className="service-category__icon"
                xlinkHref={`${mobileDevices}#mobile-devices`}
                alt="real-time tracking icon"
              />
            </svg>
            <p className="service-category__title">Real-time tracking</p>
            <p className="service-category__subtitle">
              Our tracking system is 24/7 online. We give you real-time updates
              of your shipping
            </p>
          </a>
        </div>
      </div>
    </ServicesWrapper>
  );
};

export default Services;
