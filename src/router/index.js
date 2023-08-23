import React from 'react';
import App from '../App';
import Home from '../pages/home';
import Article from '../pages/article';
import Editor from '../pages/editor';
import Login from '../pages/login';
import Register from '../pages/register';
import Profile from '../pages/profile';
import Settings from '../pages/settings';
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
      },
      {
        path: 'editor',
        element: <Editor />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'profile',
        element: <Profile />
      }, {
        path: 'settings',
        element: <Settings />
      }
    ]
  }
];

export default routes;