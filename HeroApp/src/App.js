import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroList from './components/HeroList'
import AddHero from './components/AddHero'
import heroData from './data/users.js'

function App() {

  // console.log(heroData)

  return (
    <div className="App">
      <HeroList/>
      <AddHero/>
    </div>
  );
}

export default App;
