
import { useState } from 'react';
import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Navbar from './component/navbar/Navbar';
import Profile from './component/profile/Profile';
import Project from './component/projectss/Project';
import Skill from './component/skill/Skill';


function App() {
  

  
  return (
    <div className="App">
      <Navbar />
      <Profile/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      </div>
  );
}

export default App;
