import { collection, addDoc, getDocs } from "firebase/firestore";
import db from "../config/firebase.js";

const productosCollection = collection(db, "productos");

export const crearProducto = async (productoData) => {
  const docRef = await addDoc(productosCollection, productoData);
  return { id: docRef.id, ...productoData };
};

export const obtenerProductos = async () => {
  const snapshot = await getDocs(productosCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};