import React from 'react';
import App from '../App';
import Home from '../pages/Home';
import Article from '../pages/Article';
import Editor from '../pages/Editor';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings'
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