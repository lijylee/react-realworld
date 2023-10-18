import { memo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

const RouterBeforeEach = memo(({ children }) => {
  const location = useLocation();
  const navigator = useNavigate();
  const user = useSelector((state) => state.user.value, shallowEqual);

  useEffect(() => {
    const isLogin = !!user;
    if (
      location.pathname !== "/login" &&
      location.pathname !== "/register" &&
      location.pathname !== "/home" &&
      !isLogin
    ) {
      navigator("/login?from=" + location.pathname);
    }
  }, [location.pathname, navigator]);

  return children;
});

export default RouterBeforeEach;
