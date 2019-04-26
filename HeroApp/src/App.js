import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroList from './components/HeroList'
import AddHero from './components/AddHero'

function App() {
  return (
    <div className="App">
      <HeroList/>
      <AddHero/>
    </div>
  );
}

export default App;
