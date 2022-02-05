import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import Easy from './Components/Easy';
import Medium from './Components/Medium';
import Hard from './Components/Hard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="easy" element={<Easy />} />
        <Route path="medium" element={<Medium />} />
        <Route path="hard" element={<Hard/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
