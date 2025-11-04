import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Spinner, Alert } from "react-bootstrap";
import { getProduct } from "../mock/AsyncService";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProduct()
      .then((response) => {
        const pid = Number(id);
        const found = response.find((p) => Number(p.id) === pid);
        if (found) {
          setProduct(found);
        } else {
          setError("Producto no encontrado");
        }
      })
      .catch((err) => {
        setError(typeof err === "string" ? err : "Error obteniendo producto");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container className="py-5 d-flex justify-content-center">
        <Spinner animation="border" role="status" />
      </Container>
    );
  }

  return (
    <Container className="py-4">
      {product && <ItemDetail product={product} />}
    </Container>
  );
};

export default ItemDetailContainer;
