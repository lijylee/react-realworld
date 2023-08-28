import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Header = memo(() => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/home">conduit</Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/* Add "active" class when you're on that page" */}
            <Link className="nav-link active" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Sign in</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
});

export default Header;