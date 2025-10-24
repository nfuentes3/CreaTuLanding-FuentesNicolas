import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaHome, FaWhatsapp, FaClock } from "react-icons/fa";
import "../styles/NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Container fluid className="p-0">
      <Navbar className="top_nav px-4 d-flex justify-content-between">
        <Navbar.Text className="text-white">
          <FaHome className="mx-2" />
          Calle Falsa 123 | Springfield
        </Navbar.Text>
        <Navbar.Text className="text-white">
          {" "}
          <FaWhatsapp className="mx-2" />
          +54 9 11-22-33-44
        </Navbar.Text>
        <Navbar.Text className="text-white">
          <FaClock className="mx-2" />
          Fecha y hora actual
        </Navbar.Text>
      </Navbar>
      <Navbar className="d-flex justify-content-between px-5">
        <Navbar.Brand>
          <img
            src="src\img\Huellitas.shop_v2.svg"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="d-flex justify-content-between align-items-center px-1 w-auto">
          <NavDropdown title="Productos">
            <NavDropdown.Item>Categoria 1</NavDropdown.Item>
            <NavDropdown.Item>Categoria 2</NavDropdown.Item>
            <NavDropdown.Item>Categoria 3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item className="px-3 mx-2">Contacto</Nav.Item>
          <Nav.Item className="px-3 mx-2">Nosotros</Nav.Item>
        </Nav>
        <CartWidget />
      </Navbar>
    </Container>
  );
};

export default NavBar;
