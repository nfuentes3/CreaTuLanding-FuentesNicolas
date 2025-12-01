import { Container, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <Container className="py-5 text-center">
      <div className="d-flex flex-column align-items-center gap-4">
        <FaExclamationTriangle size={100} color="#ffc107" />
        <h1 className="display-1 fw-bold">404</h1>
        <h2>Página no encontrada</h2>
        <Alert variant="warning" className="w-75">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </Alert>
        <div className="d-flex gap-3">
          <Button as={Link} to="/" variant="primary" size="lg">
            Volver al inicio
          </Button>
          <Button
            as={Link}
            to="/category/perro"
            variant="outline-secondary"
            size="lg"
          >
            Ver productos
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
