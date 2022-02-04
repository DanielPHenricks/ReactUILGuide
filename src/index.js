import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import Easy from './Components/Easy';
import Medium from './Components/Medium';
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="easy" element={<Easy />} />
        <Route path="medium" element={<Medium />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
