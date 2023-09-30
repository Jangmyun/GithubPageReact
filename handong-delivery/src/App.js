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

export default App;
