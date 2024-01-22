//main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers.jsx';
import SinglePlayer from './components/SinglePlayer.jsx';
import NavBar from './components/NavBar.jsx';



document.addEventListener('DOMContentLoaded', () => {


 
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<AllPlayers />} />
          <Route path='/players/:id' element={<SinglePlayer />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
});