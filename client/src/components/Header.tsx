import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-side navbar-side-left navbar-side-lg navbar-dark bg-dark-alpha-2 collapse" id="sideNavbar">
  <div className="navbar-brand-container bg-dark-alpha-1">
    <a className="navbar-brand" href="#">
      <span>YOUR_TITLE</span>
    </a>
  </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sideNavbar" aria-controls="sideNavbar" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <ul className="navbar-nav">
    <li><Link className="nav-link" to="/c">Nowhere</Link></li>
    <li><a className="nav-link" href="#">Another link</a></li>
    <li><a className="nav-link" href="#">Your link</a></li>
  </ul>
</nav>
)

export default Header;
