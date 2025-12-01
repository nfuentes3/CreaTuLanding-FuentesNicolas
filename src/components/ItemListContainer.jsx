import { Container, Spinner, Alert } from "react-bootstrap";
import "../styles/ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../service/firebase.jsx";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { type } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchProducts = type ? getProductsByCategory(type) : getProducts();

    fetchProducts
      .then((products) => {
        setData(products);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [type]);

  return (
    <Container
      id="productos"
      fluid
      className="d-flex hero p-0 d-flex flex-column"
    >
      <div
        className="p-3 d-flex w-100 justify-content-center align-items-center"
        style={{ backgroundColor: "#004e89" }}
      >
        <h2
          style={{
            color: "white",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          {type ? `${type}` : "Productos destacados"}
        </h2>
      </div>
      <div>
        {loading ? (
          <Container className="py-5 d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
          </Container>
        ) : error ? (
          <Container className="py-4">
            <Alert variant="danger">{error}</Alert>
          </Container>
        ) : (
          <ItemList data={data} />
        )}
      </div>
    </Container>
  );
};

export default ItemListContainer;
