import React from 'react';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
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
