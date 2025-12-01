import { Container, Table, Button, Alert, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <Container className="py-5">
        <Alert variant="info" className="text-center">
          <h4>Tu carrito está vacío</h4>
          <p>¡Empieza a agregar productos para comenzar tu compra!</p>
          <Button as={Link} to="/" variant="primary" className="mt-3">
            Ver productos
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h2 className="mb-4">Carrito de Compras</h2>

      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    <small className="text-muted text-capitalize">
                      {item.category}
                    </small>
                  </div>
                </div>
              </td>
              <td className="align-middle">$ {item.price}</td>
              <td className="align-middle">{item.quantity}</td>
              <td className="align-middle">$ {item.price * item.quantity}</td>
              <td className="align-middle text-center">
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Card className="mt-4">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="mb-0">Total:</h4>
            </div>
            <div>
              <h3 className="mb-0 text-primary">$ {getTotalPrice()}</h3>
            </div>
          </div>
        </Card.Body>
      </Card>

      <div className="d-flex justify-content-between mt-4">
        <Button variant="outline-danger" onClick={clearCart}>
          Vaciar carrito
        </Button>
        <div className="d-flex gap-2">
          <Button as={Link} to="/" variant="outline-secondary">
            Seguir comprando
          </Button>
          <Button as={Link} to="/checkout" variant="success">
            Finalizar compra
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
