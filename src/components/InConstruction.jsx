import { Container, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTools } from "react-icons/fa";

const InConstruction = () => {
  return (
    <Container className="py-5 text-center">
      <div className="d-flex flex-column align-items-center gap-4">
        <FaTools size={100} color="#ff9800" />
        <h1 className="display-4 fw-bold">Sitio en construcción</h1>
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

export default InConstruction;
