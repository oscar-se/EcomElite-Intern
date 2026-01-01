import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import Logo from '../assets/logo192.png';

function Header() {
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    window.location.href = '/login';
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
        <img src={Logo} alt="Logo" className="logo" /> Van Dinh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={"/"}>
            <Nav.Link  as={Link} to="/">Home </Nav.Link>
            <Nav.Link as={Link} to="/user-management">User Management</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={token ? email : "Setting"} id="basic-nav-dropdown" align="end">
              <NavDropdown.Divider />
              {token ? (
                <NavDropdown.Item onClick={handleLogout}>
                  <i className="fa-solid fa-right-from-bracket me-2"></i>Logout
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item as={Link} to="/login">
                  <i className="fa-solid fa-right-to-bracket me-2"></i>Login
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;