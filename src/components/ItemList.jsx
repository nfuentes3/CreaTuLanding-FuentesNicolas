import { Container, Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <Container className="h-100 text-center shadow-sm">
      <Row className="justify-content-center align-items-stretch g-1">
        {data.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
