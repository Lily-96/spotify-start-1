import { Button, Nav, Navbar, Form, FormControl, InputGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const SideBar = () => {
  return (
    <aside>
      <Navbar expand="md" className="fixed-left flex-column align-items-start" id="sidebar" bg="dark" variant="dark">
        <Navbar.Brand href="index.html" className="">
          <img src="../assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="flex-column w-100 ">
            <Nav.Link href="#" className="d-flex align-items-center mx-2">
              <i className="bi bi-house-door-fill"></i>&nbsp; Home
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center mx-2">
              <i className="bi bi-book-fill"></i>&nbsp; Your Library
            </Nav.Link>
            <Form className="mt-1 w-100  d-flex justify-content-start mx-2">
              <InputGroup className="w-75">
                <FormControl type="text" placeholder="Search" aria-label="Search" />
                <Button variant="outline-secondary" size="sm">
                  GO
                </Button>
              </InputGroup>
            </Form>
          </Nav>
        </Navbar.Collapse>
        <div className="nav-btn mt-auto w-100 d-flex flex-column align-items-center">
          <Button className="signup-btn mb-2" type="button">
            Sign Up
          </Button>
          <Button className="login-btn mb-2" type="button">
            Login
          </Button>
          <div>
            <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
          </div>
        </div>
      </Navbar>
    </aside>
  );
};
export default SideBar;
