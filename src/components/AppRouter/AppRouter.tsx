import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../routes/Home';
import Layout from '../routes/Layout';
import NotFound from '../ui/NotFound';
import About from '../About';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default AppRouter;
