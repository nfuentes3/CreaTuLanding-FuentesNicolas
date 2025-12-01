# 🐾 Huellitas Shop - E-commerce

Proyecto e-commerce desarrollado para el curso de **React.js** de CoderHouse - Comisión **81710**.

## 📋 Descripción

**Huellitas Shop** es un e-commerce completo inspirado en una tienda de productos para mascotas. La aplicación permite a los usuarios navegar por un catálogo de productos, filtrar por categorías, ver detalles de cada producto, agregar items al carrito de compras y finalizar una compra simulada.

El proyecto está construido con React.js, utilizando Firebase Firestore como base de datos para almacenar los productos, y React Context API para el manejo del estado global del carrito. El contenido del carrito se persiste en **localStorage** para mantener los ítems entre recargas.

---

## 🎥 Demo

A continuación se muestran capturas de pantalla de la aplicación en funcionamiento:

### Página Principal

![alt text](public\img\demo\principal_page.png)

### Catálogo de Productos

![alt text](public\img\demo\catalogo.png)

### Detalle de Producto

![alt text](public\img\demo\product_detail.png)

### Carrito de Compras

![alt text](public\img\demo\cart.png)

### Checkout

![alt text](public\img\demo\checkout.png)

---

## ✨ Características Principales

- 🛍️ **Catálogo de productos** con imágenes, precios y descripciones
- 🔍 **Filtrado por categorías** (Perros y Gatos)
- 🛒 **Carrito de compras** persistente con funcionalidad completa
- ➕ **Contador de cantidad** con límites de stock
- 💳 **Formulario de checkout** con validaciones
- 🔥 **Integración con Firebase Firestore**
- ⚠️ **Páginas de error personalizadas** (404 y en construcción)

---

## 🛠️ Tecnologías y Librerías Utilizadas

### Core

- **React** (v19.1.1)
- **React DOM** (v19.1.1)
- **Vite** (v7.1.7)

### Enrutamiento

- **React Router DOM** (v7.9.5)

### Base de Datos

- **Firebase** (v12.6.0)

### UI y Estilos

- **React Bootstrap**
- **Bootstrap**
- **React Icons**

---

## 🧩 Componentes Principales

### 📦 Contenedores

#### **ItemListContainer**

- Componente contenedor que gestiona la obtención y filtrado de productos desde Firebase
- Implementa `useEffect` y `useParams` para detectar cambios de categoría
- Muestra loaders mientras carga los datos
- Maneja errores de conexión con mensajes informativos

#### **ItemDetailContainer**

- Obtiene un producto específico por ID desde Firebase
- Renderiza el detalle completo del producto
- Implementa estados de carga y error

#### **Cart**

- Vista completa del carrito de compras
- Muestra todos los productos agregados con imágenes y cantidades
- Calcula subtotales y total de la compra
- Permite eliminar productos individuales o vaciar el carrito
- Botones para continuar comprando o finalizar compra

#### **Checkout**

- Formulario de finalización de compra
- Validaciones en tiempo real de campos (nombre, email, teléfono)
- Feedback visual con mensajes de error específicos
- Simulación de procesamiento con spinner
- Limpia el carrito al confirmar la compra
- Muestra mensaje de éxito con indicación de sitio en desarrollo

### 🎨 Presentacionales

#### **ItemList**

- Componente que recibe array de productos y los renderiza
- Grid responsive usando React Bootstrap

#### **Item**

- Tarjeta individual de producto
- Muestra imagen, nombre, precio y categoría
- Botón para ver más detalles

#### **ItemDetail**

- Vista detallada del producto con imagen grande
- Descripción completa y stock disponible
- Integra `ItemCount` para seleccionar cantidad
- Oculta el contador y muestra botones de acción después de agregar al carrito

#### **ItemCount**

- Contador interactivo de cantidad
- Botones +/- con validación de stock
- Muestra stock disponible
- Botón para agregar al carrito deshabilitado si no hay stock

#### **CartWidget**

- Ícono del carrito en el navbar
- Badge con cantidad total de productos
- Link a la vista del carrito

#### **NavBar**

- Barra de navegación superior con información de contacto
- Logo con link al home
- Navegación principal con `NavLink` (resalta ruta activa)
- Dropdown de categorías
- Integración con `CartWidget`

#### **Hero**

- Banner principal de la landing page

#### **NotFound**

- Página de error 404 personalizada

#### **InConstruction**

- Página para secciones en desarrollo
- Usada en rutas `/contacto` y `/nosotros`

---

## 🔥 Context API

### **CartContext**

Manejo del estado global del carrito de compras con las siguientes funcionalidades:

**Estado:**

- `cart`: Array de productos en el carrito

**Funciones:**

- `addToCart(product, quantity)`: Agrega producto o actualiza cantidad
- `removeFromCart(productId)`: Elimina un producto específico
- `clearCart()`: Vacía todo el carrito
- `isInCart(productId)`: Verifica si un producto está en el carrito
- `getTotalQuantity()`: Retorna cantidad total de items
- `getTotalPrice()`: Calcula precio total del carrito
- `getProductQuantity(productId)`: Obtiene cantidad de un producto específico

---

## 🔥 Integración con Firebase

### Configuración

Firebase está configurado en `src/service/firebase.jsx` con las siguientes funciones:

#### **getProducts()**

- Obtiene todos los productos de la colección `productos`
- Retorna array de productos con sus IDs

#### **getProductsByCategory(category)**

- Filtra productos por categoría usando query de Firestore
- Utiliza `where()` para filtrar por campo `category`

#### **getProductById(productId)**

- Obtiene un producto específico por ID
- Primero busca por document ID, luego por campo interno `id`

> Nota: La funcionalidad de creación de órdenes en Firestore fue retirada en esta versión. El checkout simula el proceso y limpia el carrito sin generar registros remotos.

### Estructura de Datos en Firestore

**Colección: `productos`**

```javascript
{
  id: "string",
  name: "string",
  description: "string",
  price: number,
  stock: number,
  category: "perro" | "gato",
  img: "url"
}
```

---

## 🗄 Persistencia del Carrito

El carrito se almacena en `localStorage` usando una sincronización automática desde el `CartContext`:

```javascript
const [cart, setCart] = useState(() => {
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
});

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
```

Ventajas:

- Mantiene los productos tras recargar la página.
- No requiere cuenta de usuario ni autenticación.
- Permite futura extensión para migrar a Firestore/Orders.

Limitaciones:

- El contenido se pierde si el usuario limpia el almacenamiento del navegador.
- No hay multi-dispositivo ni historial de órdenes.

## 👤 Autor

**Nicolás Fuentes**

- Comisión: 81710
- Curso: React.js - CoderHouse
- GitHub: [@nfuentes3](https://github.com/nfuentes3)
