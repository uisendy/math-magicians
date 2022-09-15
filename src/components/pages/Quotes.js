import React from 'react';
import Header from '../Header';
import NavBar from '../NavBar';

const Quotes = () => (
  <div>
    <NavBar />
    <Header />
    <p style={{ fontSize: '2rem', padding: '3rem 6.5%' }}>
      Mathematics is not about numbers, equations, computations, or algorithm :
      It is about Understanding: - William Paul Thurston
    </p>
  </div>
);

export default Quotes;
