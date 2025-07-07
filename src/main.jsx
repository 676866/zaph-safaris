
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Destinations from './pages/Destinations.jsx';
import Trips from './pages/Trips.jsx';
import Contact from './pages/Contact.jsx';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
    </Routes>
  </BrowserRouter>
);



