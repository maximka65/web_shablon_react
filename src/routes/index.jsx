import React from 'react';
import { Route, Routes } from 'react-router';
import DefaultLayout from '../layouts/default';
import About from '../pages/about';
import Home from '../pages/home';
import Posts from '../pages/posts';

const Router = () => (
  <Routes>
    <Route element={(
      <DefaultLayout />
    )}
    >
      <Route
        path="/"
        element={(
          <Home />
      )}
      />
      <Route
        path="/posts"
        element={(
          <Posts />
      )}
      />
      <Route
        path="/about"
        element={(
          <About />
      )}
      />
    </Route>
  </Routes>
);

export default Router;
