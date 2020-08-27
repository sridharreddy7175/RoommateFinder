import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './header.css';
const Header = () => {
  const [logoutStatus, setLogoutStatus] = useState(true);
  const [logggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    
    localStorage.clear()
    window.location.href='/'
  }
  return (
    <div>
      <div className="header-home">
        <Navbar className="container" expand="lg">
          <Navbar.Brand href="/" className="room">Roommate Finder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar1" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto home">
              <Nav.Link href="/" className="active homea">Home</Nav.Link>

              <Nav.Link href="/about" className=" homea">About</Nav.Link>
              {
                (localStorage.getItem('userId') != null) ?
                  (<React.Fragment><Nav.Link href="/addnewrequest" className="homea">POST NEW REQUEST</Nav.Link>
                    <Nav.Link href="/myrequests" className="homea">MY REQUESTS</Nav.Link></React.Fragment>) :
                  <Nav.Link href="/register" className="homea">Register</Nav.Link>
              }
              {
                (localStorage.getItem('userId') != null) ?

                  (<Nav.Link href="/register" onClick={logout} className="homea">Logout</Nav.Link>)
                  :
                  (<Nav.Link href="/login" className="homea">Login</Nav.Link>)
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default Header;
