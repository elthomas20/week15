import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-logo" href="/">
        <img src="https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/348249598_1307004546521523_8207368006989015609_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GE0EP4d1jwoAX-a6VTx&_nc_ht=scontent-iad3-2.xx&oh=00_AfDLQmjGfATQsvXuFvCl8iRSCzTvug9kWh8oePo470rhtA&oe=64B8AAB2" alt="TMT Logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">The Mithral Tabletop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">Mummy's Mask</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Comments</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
