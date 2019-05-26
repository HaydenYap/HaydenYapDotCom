import React from 'react';
import Hero from './Content/Hero';
import Contact from './Content/Contact';
import Nav from './Nav/Nav';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      <Hero />
      </header>
      <div className='divider'></div>
      <Contact />
    </div>
  );
}

export default App;
