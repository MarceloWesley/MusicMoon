
import  Home  from '../pages/home/';
import  Cart  from '../pages/cart/';


import React, { FC } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const MainRoutes: FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Router>
  );
};
