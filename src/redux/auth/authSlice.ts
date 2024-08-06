import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { User } from "../../models/User";
import { auth, db } from "../../firebase.config";
import { doc, setDoc } from "firebase/firestore";

export interface AuthState {
  loading: boolean;
  user: User | null;
  error: string | null;
}

// Función para iniciar sesión
export const login = createAsyncThunk<
  User,
  { email: string; password: string }
>("auth/login", async ({ email, password }, thunkAPI) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Transforma los datos del usuario según tu modelo de User
    const userData: User = {
      token: await user.getIdToken(),
      email: user.email,
      // Agrega otros campos necesarios
    };

    console.log(userData);

    return userData;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Función para registrar un nuevo usuario
export const register = createAsyncThunk<
  User,
  { email: string; password: string }
>("auth/register", async ({ email, password }, thunkAPI) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    // Agrega el usuario a Firestore
    await setDoc(doc(db, "users", user.uid), { email });

    // Transforma los datos del usuario según tu modelo de User
    const userData: User = {
      token: await user.getIdToken(),
      email: user.email,
      // Agrega otros campos necesarios
    };
    return userData;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Función para registrar un nuevo usuario con GOOGLE
// export const googleRegister = createAsyncThunk<
//   User,
//   { email: string; password: string }
// >("auth/googleRegister", async ({ email, password }, thunkAPI) => {
//   const provider = GoogleAuthProvider()
//   try {
//    const {user} = await signInWithPopup(auth, provider)
//   } catch (error: any) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// Función para cerrar sesión
export const logout = createAsyncThunk<void>(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
      localStorage.clear();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Estado inicial
const initialState: AuthState = {
  loading: false,
  user: null,
  error: null,
};

// Crear el slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload as string;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload as string;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Selector
export const selectUser = (state: { auth: AuthState }) =>
  state.auth.user?.token;

// Reducer por defecto
export default authSlice.reducer;
