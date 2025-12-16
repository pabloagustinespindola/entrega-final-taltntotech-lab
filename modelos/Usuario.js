import { collection, addDoc, getDocs, query, where } from "firebase/firestore"
import db from "../configuracion/firebase.js"

const usuariosCollection = collection(db, "usuarios")

// Crear usuario
export const crearUsuario = async (usuarioData) => {
    const docRef = await addDoc(usuariosCollection, usuarioData)
    return {id: docRef.id, ...usuarioData}
}

// Buscar usuario por email
export const buscarUsuarioorEmail = async (email) => {
    const q = query(usuariosCollection, where ("email", "==", email))
    const snapshot = await getDocs(q)
    if(snapshot.emptys) return null
    return snapshot.docs[0].data()
}