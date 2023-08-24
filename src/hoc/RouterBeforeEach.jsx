import React, { memo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RouterBeforeEach = memo(({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = false;
    if (location.pathname !== '/login' && location.pathname !== '/register' && !isLogin) {
      navigate('/login');
    }
  }, [location.pathname, navigate]);

  return children;

});

export default RouterBeforeEach;