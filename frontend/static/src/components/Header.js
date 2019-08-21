import React from 'react';

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-text">The kitchen is yours, Chef!</span>
      <a className="navbar-brand" href="/">Batch Maker</a>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Add</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Settings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Account</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Header;
