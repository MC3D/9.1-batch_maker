import React from 'react';

function Aside(props) {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link" href="/">My Recipes</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Public Recipes</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Popular Recipes</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">My Favorite Recipes</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">My Pantry</a>
      </li>
    </ul>
  )
}

Aside.defaultProps = {
  isLoggedIn: false
};

export default Aside;
