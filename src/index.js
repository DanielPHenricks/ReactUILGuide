import React from 'react';
import ReactDOM from 'react-dom';
import Main from './sections/Main';
import Easy from './sections/Easy';
import Medium from './sections/Medium';
import Hard from './sections/Hard';
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
