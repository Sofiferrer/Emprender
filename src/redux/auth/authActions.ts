import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, logoutApi, registerApi } from "./authApi";
import { User } from "../../types/User";

export const login = createAsyncThunk<
  User,
  { email: string; password: string }
>("auth/login", async ({ email, password }, thunkAPI) => {
  try {
    const userData = await loginApi(email, password);
    return userData;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const register = createAsyncThunk<
  User,
  { email: string; password: string }
>("auth/register", async ({ email, password }, thunkAPI) => {
  try {
    const userData = await registerApi(email, password);
    return userData;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk<void>(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await logoutApi();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
