import { Card, Row, Col, Button } from "react-bootstrap";

const ItemDetail = ({ product }) => {
  return (
    <Card className="shadow-sm">
      <Row className="g-0">
        <Col
          md={5}
          className="text-center p-3 d-flex align-items-center justify-content-center"
        >
          <Card.Img
            src={product.img}
            alt={product.name}
            style={{ maxHeight: 380, width: "auto", objectFit: "contain" }}
          />
        </Col>
        <Col md={7}>
          <Card.Body>
            <Card.Title className="fs-3 fw-bold">{product.name}</Card.Title>
            <Card.Text
              className="text-muted mb-2"
              style={{ textTransform: "capitalize" }}
            >
              Categoría: {product.category}
            </Card.Text>
            <Card.Text className="fs-4 fw-semibold">
              $ {product.price}
            </Card.Text>
            <Card.Text className="mt-3">{product.description}</Card.Text>
            <Card.Text className="mt-2">Stock: {product.stock}</Card.Text>
            <div className="mt-4 d-flex gap-2">
              <Button variant="primary">Agregar al carrito</Button>
              <Button variant="outline-secondary">Volver</Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
