import { memo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserFromStorage } from '@/utils/storage';

const RouterBeforeEach = memo(({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const user = getUserFromStorage();
    const isLogin = !!user;
    if (location.pathname !== '/login' && location.pathname !== '/register' && !isLogin) {
      navigate('/login?from=' + location.pathname);
    }
  }, [location.pathname, navigate]);

  return children;

});

export default RouterBeforeEach;