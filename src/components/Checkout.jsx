import { useState } from "react";
import { Container, Form, Button, Alert, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  // Validar campos del formulario
  const validateForm = () => {
    const newErrors = {};

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    // Validar teléfono
    const phoneRegex = /^[0-9]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "El teléfono debe tener al menos 10 dígitos";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setPurchaseComplete(true);

      clearCart();

      // Limpiar formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      setErrors({
        submit:
          "Hubo un error al procesar tu orden. Por favor, intenta nuevamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Si el carrito está vacío
  if (cart.length === 0 && !purchaseComplete) {
    return (
      <Container className="py-5">
        <Alert variant="warning" className="text-center">
          <h4>Tu carrito está vacío</h4>
          <p>No puedes realizar una compra sin productos en el carrito.</p>
          <Button as={Link} to="/" variant="primary" className="mt-3">
            Ver productos
          </Button>
        </Alert>
      </Container>
    );
  }

  // Si la compra fue completada exitosamente
  if (purchaseComplete) {
    return (
      <Container className="py-5">
        <Alert variant="success" className="text-center">
          <h3>¡Gracias por tu compra! 🎉</h3>
          <p className="mt-3 text-muted">
            Este sitio se encuentra en desarrollo.
          </p>
          <div className="mt-4 d-flex gap-3 justify-content-center">
            <Button as={Link} to="/" variant="primary">
              Volver al inicio
            </Button>
            <Button as={Link} to="/category/perro" variant="outline-secondary">
              Seguir comprando
            </Button>
          </div>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h2 className="mb-4">Finalizar Compra</h2>

      <div className="row">
        <div className="col-md-7">
          <Card className="shadow-sm">
            <Card.Body>
              <h4 className="mb-4">Datos de Contacto</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre Completo *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                    placeholder="Juan Pérez"
                    disabled={loading}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    placeholder="ejemplo@email.com"
                    disabled={loading}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Teléfono *</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.phone}
                    placeholder="1122334455"
                    disabled={loading}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>

                {errors.submit && (
                  <Alert variant="danger" className="mb-3">
                    {errors.submit}
                  </Alert>
                )}

                <div className="d-flex gap-2 justify-content-between">
                  <Button
                    as={Link}
                    to="/cart"
                    variant="outline-secondary"
                    disabled={loading}
                  >
                    Volver al carrito
                  </Button>
                  <Button
                    type="submit"
                    variant="success"
                    disabled={loading}
                    className="d-flex align-items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Procesando...
                      </>
                    ) : (
                      "Confirmar compra"
                    )}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-5">
          <Card className="shadow-sm">
            <Card.Body>
              <h4 className="mb-4">Resumen de Compra</h4>
              <div className="mb-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <small className="d-block fw-semibold">
                          {item.name}
                        </small>
                        <small className="text-muted">
                          Cantidad: {item.quantity}
                        </small>
                      </div>
                    </div>
                    <span className="fw-semibold">
                      $ {item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                <h5 className="mb-0">Total:</h5>
                <h4 className="mb-0 text-success">$ {getTotalPrice()}</h4>
              </div>
            </Card.Body>
          </Card>

          <Alert variant="info" className="mt-3">
            <small>* Todos los campos son obligatorios.</small>
          </Alert>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
