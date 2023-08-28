import { memo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RouterBeforeEach = memo(({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector(state => state.user.value);
  console.log('userStore====', user);
  useEffect(() => {
    const isLogin = !!user;
    if (location.pathname !== '/login' && location.pathname !== '/register' && !isLogin) {
      navigate('/login?from=' + location.pathname);
    }
  }, [location.pathname, navigate]);

  return children;

});

export default RouterBeforeEach;