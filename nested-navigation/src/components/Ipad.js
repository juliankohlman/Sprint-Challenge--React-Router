import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

// sub item functional components here
const IpadPro = () => {
  return (
    <div>
      <h1>iPad Pro</h1>
    </div>
  );
}

const IpadStandard  = () => {
  return (
    <div>
      <h1>iPad</h1>
    </div>
  );
}

const IpadMini = () => {
  return (
    <div>
      <h1>ipad Mini</h1>
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

const Ipad = () => {
  return (
    <div>
      <h1>iPad Anything you can do, you can do better.</h1>
      <hr />
      <ul>
        <li>
          <NavLink to="/ipad/ipadPro">
            IpadPro
          </NavLink>
          <NavLink to="/ipad/ipad">
            Ipad
          </NavLink>
          <NavLink to="/ipad/ipadMini">
            IpadMini
          </NavLink>
          <NavLink to="/ipad/Accessories">
            Accessories
          </NavLink>
        </li>
      </ul>
      <hr />
      <Route path="/ipad/ipadPro" component={IpadPro} />
      <Route path="/ipad/ipad" component={IpadStandard} />
      <Route path="/ipad/ipadMini" component={IpadMini} />
      <Route path="/ipad/Accessories" component={Accessories} />

    </div>
  )
}

export default Ipad;