import { Button, Container } from "react-bootstrap";
import "../styles/Hero.css";

const MainHero = () => {
  return (
    <Container
      className="d-flex justify-content-evenly py-5 align-items-center mb-5 mt-3"
      fluid
    >
      <div
        className="d-flex flex-column align-items-center hero_text hero-text-slide"
        style={{ width: "30%" }}
      >
        <h2 className="text-center py-3 fs-1 fw-bolder hero-animation">
          Tenemos todo lo que tu mascota necesita!
        </h2>
        <p className="fs-5 px-4 hero-animation">
          Aprovecha todos nuestros productos de la mejor calidad y al mejor
          precio, para que tu bolsillo y tu mascota esten felices 😍🐾
        </p>
        <Button
          className="my-4 w-25 hero-animation"
          style={{ backgroundColor: "#004e89" }}
          onClick={() => {
            const el = document.getElementById("productos");
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          Ver productos
        </Button>
      </div>
      <img src="/img/cat_dog_hero.svg" alt="Imagen del hero" height={400} />
    </Container>
  );
};

export default MainHero;
