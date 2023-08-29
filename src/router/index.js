import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import App from '../App';
const Article = lazy(() => import('../pages/article'));
const Editor = lazy(() => import('../pages/editor'));
const Register = lazy(() => import('../pages/register'));
const Profile = lazy(() => import('../pages/profile'));
const Settings = lazy(() => import('../pages/settings'));

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to='/home' />
      },
      {
        path: 'home',
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
        path: 'profile/:username?',
        element: <Profile />
      }, {
        path: 'settings',
        element: <Settings />
      }
    ]
  }
];

export default routes;