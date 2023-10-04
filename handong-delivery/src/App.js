import './App.css';
import './css/Sidebar.css'
import Header from './components/Header';
import Footer from './components/Footer';

import {Routes, Route, Link} from 'react-router-dom';
import {useState} from 'react';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

function Btn(){
  return (
    <div className='increase Button'>
      <button>Increase</button>
      <button>Decrease</button>
      <p>{}</p>
    </div>
  )
}

export default App;
