import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Mac.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// sub item functional components here
const MacBook = () => {
  return (
    <div>
      <h1>MBP</h1>
    </div>
  );
}

const MacBookAir  = () => {
  return (
    <div>
      <h1>MBP AIR</h1>
    </div>
  );
}

const iMac = () => {
  return (
    <div>
      <h1>iMAC</h1>
    </div>
  );
}

const Accessories  = () => {
  return (
    <div>
      <h1>ACCESSORIES</h1>
    </div>
  )
}

const Mac = () => {
  return (
    <div>
      <hr /> {/*
      <ul>
        <li>
          <NavLink to="/Mac/MacBook">
            MacBook
          </NavLink>
          <NavLink to="/Mac/MacBookAir">
            MacBookAir
          </NavLink>
          <NavLink to="/Mac/iMac">
            iMac
          </NavLink>
          <NavLink to="/Mac/Accessories">
            Accessories
          </NavLink>
        </li>
      </ul>*/}
      <div className="container">
      <Nav className="nav--container">
        <NavItem className="nav__item">
          <Link className="link__text" to="/Mac/MacBook">MacBook</Link>
        </NavItem>
        <NavItem className="nav__item">
          <Link className="link__text" to="/Mac/MacBookAir">MacBook Air</Link>
        </NavItem>
        <NavItem className="nav__item">
          <Link className="link__text" to="/Mac/iMac">iMac</Link>
        </NavItem>
        <NavItem className="nav__item">
          <Link className="link__text" to="/Mac/Accessories">Accessories</Link>
        </NavItem>
      </Nav>
      <hr />
      <h1>Power to the pro.</h1>
      <Route path="/Mac/MacBook" component={MacBook} />
      <Route path="/Mac/MacBookAir" component={MacBookAir} />
      <Route path="/Mac/iMac" component={iMac} />
      <Route path="/Mac/Accessories" component={Accessories} />

    </div>
    </div>
  )
}

export default Mac;