// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcZv7xhyAaeEiiTv1Y4Jozzufn9NaWnNg",
  authDomain: "huellitas-shop-1676c.firebaseapp.com",
  projectId: "huellitas-shop-1676c",
  storageBucket: "huellitas-shop-1676c.firebasestorage.app",
  messagingSenderId: "808505149090",
  appId: "1:808505149090:web:fb0a2bb7c79aeb421039fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Obtener todos los productos
export const getProducts = async () => {
  try {
    const productosRef = collection(db, "productos");
    const querySnapshot = await getDocs(productosRef);
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    throw new Error("Error al obtener productos: " + error.message);
  }
};

// Obtener productos por categoría
export const getProductsByCategory = async (category) => {
  try {
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    throw new Error(
      "Error al obtener productos por categoría: " + error.message
    );
  }
};

// Obtener un producto por ID
export const getProductById = async (productId) => {
  try {
    // Intentar obtener por document ID primero
    const productRef = doc(db, "productos", productId);
    const docSnap = await getDoc(productRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    }

    // Si no existe, buscar por campo 'id' interno
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("id", "==", productId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data(),
      };
    }

    throw new Error("Producto no encontrado");
  } catch (error) {
    if (error.message === "Producto no encontrado") {
      throw error;
    }
    throw new Error("Error al obtener producto: " + error.message);
  }
};

// createOrder removido: la versión actual persiste solo productos; las órdenes
// se gestionan localmente (simulación de compra) sin escritura en Firestore.
