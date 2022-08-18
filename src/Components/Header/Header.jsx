import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Assets/logo.svg'
import "./Header.css"
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" ">
            <Nav.Link className='nav_li' href="#features">Resreach Reviews</Nav.Link>
            <Nav.Link className='nav_li' href="#pricing">Masterclasses</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link className='nav_li'>
            <Link to="/Main_resreach">Mentorship</Link>
            </Nav.Link>
            <Nav.Link className='nav_li' eventKey={2} href="#memes">
            <Link to="/Main_blog">Blog</Link>
              
            </Nav.Link>
            <Nav.Link className='nav_li' >  
            <Link to="/Main_resource">Free Resources</Link>
            </Nav.Link>
            <Nav.Link className='nav_li'>
                <Link to ="Main_login">Log in
                </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
