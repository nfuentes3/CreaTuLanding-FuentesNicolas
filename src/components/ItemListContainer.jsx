import { Card, Container, Button } from "react-bootstrap";
import "../styles/ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <Container fluid className="d-flex hero p-0 d-flex flex-column">
      <div
        className="p-3 d-flex w-100 justify-content-center align-items-center"
        style={{ backgroundColor: "#004e89" }}
      >
        <h2 style={{ color: "white", textAlign: "center" }}>
          Productos destacados
        </h2>
      </div>
      <div className="container py-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {/* Futuras cards */}
        </div>
      </div>
    </Container>
  );
};

export default ItemListContainer;
