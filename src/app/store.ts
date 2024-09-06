import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/authSlice"; // Importa el reducer
import supplyReducer from "../redux/supplies/suppliesSlice";
import supplierReducer from "../redux/suppliers/suppliersSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// Combinar los reductores
const rootReducer = combineReducers({
  auth: authReducer,
  supply: supplyReducer,
  supplier: supplierReducer,
});

// Configuración de persistencia
const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configurar la tienda
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Inferir los tipos de RootState y AppDispatch a partir de la tienda configurada
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Exportar la tienda persistida
export const persistor = persistStore(store);
