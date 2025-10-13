import { Container, Image } from "react-bootstrap";
import "../styles/ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <Container className="d-flex hero justify-content-between">
      <div>
        <h1>Bienvenid@ {props.name}</h1>
        <p>Pronto encontrarás los mejores productos para tu mascota!</p>
      </div>
      <Image src="src\img\pets.jpg" rounded className="foto" />
    </Container>
  );
};

export default ItemListContainer;
