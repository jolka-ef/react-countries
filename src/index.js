import React from 'react';
import ReactDOM from 'react-dom';
import './css/base.css';

import {App} from './js/components/App.js';
import {Country} from './js/components/Country.js';
import {ColorMode} from './js/context/ColorMode.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <ColorMode>
      <Router>
        <Routes>
          <Route path="/react-countries" element={<App />} />
          <Route path="/country/:countryCode" element={<Country />} />
        </Routes>
      </Router>
    </ColorMode>
  </React.StrictMode>,
  document.getElementById('root')
);
