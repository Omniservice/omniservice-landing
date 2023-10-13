import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { OmniLogo } from "../constants/svg";
// import {
//   ArrowUpLeft
// } from "react-bootstrap-icons";
function App() {
  return (
    <Navbar expand="lg" className="main-nav">
      <div className="container-fluid p-0">
        <Navbar.Brand href="/">
          <Image
            src={OmniLogo}
            alt="Omni Service Logo"
            className="omni-sidemenu"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            {/* <Nav.Item>
              <Nav.Link href="#" active>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Link</Nav.Link>
            </Nav.Item> */}
          </Nav>
          <Nav.Link href="https://www.app.omniservice.com.ng/login" className="login-link sora-regular">
            {/* <ArrowUpLeft
              size={20}
            /> */}
            <span> Login </span>
          </Nav.Link>
          <Nav.Link href="https://www.app.omniservice.com.ng/signup" className="sign-up-link sora-regular ml-20">
            {/* <ArrowUpLeft
              size={20}
            /> */}
            <span> Sign Up</span>
          </Nav.Link>
          
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default App;
