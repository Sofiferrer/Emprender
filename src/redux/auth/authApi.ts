import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { User } from "../../types/User";

// Función para iniciar sesión
export const loginApi = async (
  email: string,
  password: string
): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  const userData: User = {
    token: await user.getIdToken(),
    email: user.email,
  };
  return userData;
};

// Función para registrar un nuevo usuario
export const registerApi = async (
  email: string,
  password: string
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  await setDoc(doc(db, "users", user.uid), { email });
  const userData: User = {
    token: await user.getIdToken(),
    email: user.email,
  };
  return userData;
};

// Función para cerrar sesión
export const logoutApi = async (): Promise<void> => {
  await signOut(auth);
  localStorage.clear();
};
