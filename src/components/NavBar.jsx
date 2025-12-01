import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
          {new Date().toLocaleString("es-AR", {
            dateStyle: "short",
            timeStyle: "short",
          })}
        </Navbar.Text>
      </Navbar>
      <Navbar className="d-flex justify-content-between px-5">
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/img/Huellitas.shop_v2.svg"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="d-flex justify-content-between align-items-center px-1 w-auto">
          <NavLink to="/" className="nav-link">
            Inicio
          </NavLink>
          <NavDropdown title="Productos">
            <NavDropdown.Item as={NavLink} to="/category/perro">
              Perros
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/category/gato">
              Gatos
            </NavDropdown.Item>
          </NavDropdown>
          <NavLink to="/contacto" className="nav-link">
            Contacto
          </NavLink>
          <NavLink to="/nosotros" className="nav-link">
            Nosotros
          </NavLink>
        </Nav>
        <CartWidget />
      </Navbar>
    </Container>
  );
};

export default NavBar;
