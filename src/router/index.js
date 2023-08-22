import React from 'react';
import App from '../App';
import Home from '../pages/Home';
import Article from '../pages/Article';
const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'article',
        element: <Article />
      }
    ]
  }
];

export default routes;