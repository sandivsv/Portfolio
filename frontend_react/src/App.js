import React from 'react';

import { About, Navbar, Footer, Header, Skills, Testimonial, Work } from './container';
// import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    My App
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;