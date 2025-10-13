import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../styles/NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar
      className="px-3 d-flex justify-content-between align-items-center"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src="src\img\huellitas.shop.svg" height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="principal-nav" className="ms-2" />
        <Navbar.Collapse id="principal-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias">
              <NavDropdown.Item>Alimentos</NavDropdown.Item>
              <NavDropdown.Item>Juguetes</NavDropdown.Item>
              <NavDropdown.Item>Accesorios y más</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Nosotros</Nav.Link>
            <Nav.Link>Contacto</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
