import React from 'react';
import { Helmet } from 'react-helmet';

import Menu from './components/menu-section/Menu';
import Hero from './components/hero-section/Hero';
import Services from './components/services-section/Services';
import Testimonial from './components/testimonial-section/Testimonial';
import Track from './components/track-section/Track';
import Footer from './components/footer-section/Footer';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Courier - React website</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="container">
        <Menu />
        <Hero />
        <Services />
        <Testimonial />
      </div>
      <Track />
      <div className="container" style={{ padding: 0 }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
