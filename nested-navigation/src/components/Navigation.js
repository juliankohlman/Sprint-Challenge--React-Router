import React from 'react';
import './Navigation.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
    <div className="container">
      <Nav className="nav--container">
        <NavItem className="nav__item">
          <Link className="link__text" to="/">Home</Link>
        </NavItem>
        <NavItem className="nav__item">
          <Link className="link__text" to="/mac">Mac</Link>
        </NavItem>
        <NavItem className="nav__item">
          <Link className="link__text" to="/ipad">iPad</Link>
        </NavItem>
        <NavItem className="nav__item">
          <Link className="link__text" to="/iphone">iPhone</Link>
        </NavItem>
        <NavItem className="nav__item">
          <Link className="link__text" to="/watch">Watch</Link>
        </NavItem>
      </Nav>


    </div>
  )
}

export default Navigation;