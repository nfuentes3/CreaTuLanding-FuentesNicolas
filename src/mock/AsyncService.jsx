const productos = [
  {
    id: 1,
    name: "Rascador",
    description:
      "Rascador para gatos, ideal para que no rasque muebles o productos delicados. Se coloca en el piso, en cualquier lugar que desees.",
    stock: 20,
    price: 5000,
    img: "https://i.postimg.cc/rF3YsFHC/rascador-1.jpg",
    category: "gato",
  },
  {
    id: 2,
    name: "Cama ortopédica",
    description:
      "Cama ortopédica para perros de todas las tallas, con espuma viscoelástica que aporta soporte y alivio de presión en articulaciones.",
    stock: 15,
    price: 12000,
    img: "https://i.postimg.cc/R0y0btpn/cama-1.jpg",
    category: "perro",
  },
  {
    id: 3,
    name: "Arena aglomerante",
    description:
      "Arena sanitaria aglomerante para gatos, control de olores y fácil limpieza. Alta absorción y baja generación de polvo.",
    stock: 50,
    price: 2500,
    img: "https://i.postimg.cc/NjGLyBrM/arena-1.jpg",
    category: "gato",
  },
  {
    id: 4,
    name: "Correa retráctil",
    description:
      "Correa retráctil para perros hasta 20 kg, con freno y bloqueo ergonómico, cinta resistente y mango antideslizante.",
    stock: 30,
    price: 3500,
    img: "https://i.postimg.cc/v8Wm3cr4/correa-1.jpg",
    category: "perro",
  },
  {
    id: 5,
    name: "Juguete interactivo",
    description:
      "Juguete interactivo para gatos con pluma y movimiento giratorio que estimula la caza y el ejercicio diario.",
    stock: 25,
    price: 1800,
    img: "https://i.postimg.cc/FFP6txV7/juguete-1.jpg",
    category: "gato",
  },
  {
    id: 6,
    name: "Comedero automático",
    description:
      "Comedero automático programable para perros, dispensa raciones controladas y posee compartimento hermético para alimento seco.",
    stock: 10,
    price: 9000,
    img: "https://i.postimg.cc/76zLvLp6/comedero-1.jpg",
    category: "perro",
  },
];

export const getProduct = () => {
  let error = false;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Error en el servidor. No se pudo obtener los productos.");
      } else {
        resolve(productos);
      }
    }, 2000);
  });
};

export const getOneProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let product = productos.find((producto) => producto.id === id);
      resolve(product);
    }, 2000);
  });
};
