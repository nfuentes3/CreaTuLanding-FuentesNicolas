import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>$ {product.price}</Card.Text>
        <Button as={Link} to={`/item/${product.id}`} variant="primary">
          Ver más
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
