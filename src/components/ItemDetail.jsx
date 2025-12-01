import { useState } from "react";
import { Card, Row, Col, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addToCart } = useCart();

  const handleAdd = (quantity) => {
    setQuantityAdded(quantity);
    addToCart(product, quantity);
  };

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

            <div className="mt-4">
              {quantityAdded > 0 ? (
                <div className="d-flex flex-column gap-3">
                  <Alert variant="success">
                    ¡Producto agregado al carrito! ({quantityAdded} unidades)
                  </Alert>
                  <div className="d-flex gap-2">
                    <Button as={Link} to="/cart" variant="primary">
                      Ir al carrito
                    </Button>
                    <Button as={Link} to="/" variant="outline-secondary">
                      Seguir comprando
                    </Button>
                  </div>
                </div>
              ) : (
                <ItemCount
                  stock={product.stock}
                  initial={1}
                  onAdd={handleAdd}
                />
              )}
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemDetail;
