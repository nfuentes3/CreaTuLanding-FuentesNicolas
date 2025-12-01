import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const Increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const Decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const Add = () => {
    if (stock > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="d-flex flex-column gap-3 align-items-start">
      <div className="d-flex align-items-center gap-3">
        <ButtonGroup>
          <Button
            variant="outline-secondary"
            onClick={Decrement}
            disabled={count <= 1}
          >
            -
          </Button>
          <Button variant="outline-secondary" disabled>
            {count}
          </Button>
          <Button
            variant="outline-secondary"
            onClick={Increment}
            disabled={count >= stock}
          >
            +
          </Button>
        </ButtonGroup>
        <span className="text-muted">Stock disponible: {stock}</span>
      </div>
      <Button
        variant="primary"
        onClick={Add}
        disabled={stock === 0}
        className="w-100"
      >
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </Button>
    </div>
  );
};

export default ItemCount;
