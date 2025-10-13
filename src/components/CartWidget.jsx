import { Badge, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

let ItemCount = 1; // Item hardcodeado para en un futuro agregar logica

const CartWidget = () => {
  return (
    <a
      className="cart-container position-relative d-flex align-items-center justify-content-end"
      href="#home"
    >
      <FaShoppingCart size={24} href="#home" color="black" />
      <Badge
        bg="danger"
        pill
        className="position-absolute top-0 start-100 translate-middle"
      >
        {ItemCount}
      </Badge>
    </a>
  );
};

export default CartWidget;
