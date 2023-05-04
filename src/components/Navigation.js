import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navigation.css';

function Navigation() {
  return (
    <nav className="header">
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/catergory">Catergory</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
