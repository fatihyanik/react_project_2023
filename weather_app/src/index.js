import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './components/Homepage';
import Searchpage from './components/Searchpage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path='/search' element={<Searchpage/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

