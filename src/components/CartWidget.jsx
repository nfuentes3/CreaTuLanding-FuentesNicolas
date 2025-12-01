import { Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useCart();
  const totalItems = getTotalQuantity();

  return (
    <Link
      to="/cart"
      className="cart-container position-relative d-flex align-items-center justify-content-end text-decoration-none"
    >
      <FaShoppingCart size={24} color="black" />
      {totalItems > 0 && (
        <Badge
          bg="danger"
          pill
          className="position-absolute top-0 start-100 translate-middle"
        >
          {totalItems}
        </Badge>
      )}
    </Link>
  );
};

export default CartWidget;
