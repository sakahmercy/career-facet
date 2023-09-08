import React from 'react';
import Navbar from './components/NavBar/NavBar';
import HomePage from './components/Home/HomePage';
import './App.css';

function App() {
  return (
    
    <React.Fragment>
      <Navbar/>
      <main className='container'>
        <HomePage/>
      </main>
      </React.Fragment>
    
  );
}

export default App;
