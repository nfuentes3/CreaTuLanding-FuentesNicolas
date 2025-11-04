import { Container } from "react-bootstrap";
import "../styles/ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../mock/AsyncService";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getProduct()
      .then((res) => {
        if (type) {
          setData(res.filter((prod) => prod.category === type));
        } else {
          setData(res);
        }
      })
      .catch((error) => console.log(error));
  }, [type]);

  console.log(data, "Nuevo valor de data", { type });
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
        <ItemList data={data} />
      </div>
    </Container>
  );
};

export default ItemListContainer;
