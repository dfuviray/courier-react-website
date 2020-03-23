import React from 'react';

import { TestimonialWrapper } from './testimonialWrapper';

const Testimonial = () => {
  return (
    <TestimonialWrapper>
      <h1 class="testimonial__title">What customers say about us</h1>

      <div class="customers">
        <div class="customer">
          <div class="customer__info">
            <div class="customer__image"></div>
            <p class="customer__name">Verney S.</p>
          </div>
          <blockquote class="customer__message">
            "After using courier my business skyrocketed! I was amazed at the
            quality of courier. We've seen amazing results already. I like
            courier more and more each day because it makes my life a lot
            easier."
          </blockquote>
        </div>

        <div class="customer">
          <div class="customer__info">
            <div class="customer__image"></div>
            <p class="customer__name">Anetta D.</p>
          </div>
          <blockquote class="customer__message">
            "It's the perfect solution for our business. It's really wonderful.
            We can't understand how we've been living without courier."
          </blockquote>
        </div>
      </div>

      <div class="customers">
        <div class="customer">
          <div class="customer__info">
            <div class="customer__image"></div>
            <p class="customer__name">Candie Z..</p>
          </div>
          <blockquote class="customer__message">
            "I couldn't have asked for more than this. I would like to
            personally thank you for your outstanding product."
          </blockquote>
        </div>

        <div class="customer">
          <div class="customer__info">
            <div class="customer__image"></div>
            <p class="customer__name">Claresta A.</p>
          </div>
          <blockquote class="customer__message">
            "Courier saved my business. Courier impressed me on multiple levels.
            I would like to personally thank you for your outstanding service."
          </blockquote>
        </div>
      </div>
    </TestimonialWrapper>
  );
};

export default Testimonial;
