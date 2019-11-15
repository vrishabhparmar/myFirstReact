import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap'

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div class="container">
          <NavbarBrand href="/">Ristorante con fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
