import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Supplier, SupplierState } from "../../types/Supplier";
import { create, getAll, getById, update } from "./suppliersActions";

// Estado inicial
const initialState: SupplierState = {
  loading: false,
  suppliers: [],
  error: null,
};

// Crear el slice de supplies
export const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(create.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(create.fulfilled, (state, action: PayloadAction<Supplier>) => {
        state.loading = false;
        if (Array.isArray(state.suppliers)) {
          state.suppliers.push(action.payload); // Agregar el nuevo insumo a la lista
        } else {
          state.suppliers = [action.payload]; // Inicializar si no es un array
        }
        state.error = null;
      })
      .addCase(create.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Casos de la acción getAll
      .addCase(getAll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAll.fulfilled, (state, action: PayloadAction<Supplier[]>) => {
        state.loading = false;
        state.suppliers = action.payload;
        state.error = null;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.suppliers = [];
        state.error = action.payload as string;
      })
      // Casos de getById
      .addCase(getById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getById.fulfilled, (state, action: PayloadAction<Supplier>) => {
        state.loading = false;
        const index = state.suppliers?.findIndex(
          (supplier) => supplier.id === action.payload.id
        );
        if (index !== undefined && index !== -1 && state.suppliers) {
          state.suppliers[index] = action.payload; // Actualizar el insumo en el estado
        } else if (state.suppliers) {
          state.suppliers.push(action.payload);
        }
        state.error = null;
      })
      .addCase(getById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Casos de updateSupply
      .addCase(update.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(update.fulfilled, (state, action: PayloadAction<Supplier>) => {
        state.loading = false;
        const index = state.suppliers?.findIndex(
          (supplier) => supplier.id === action.payload.id
        );
        if (index !== undefined && index !== -1 && state.suppliers) {
          state.suppliers[index] = action.payload; // Actualizar el insumo en el estado
        }
        state.error = null;
      })
      .addCase(update.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// Exportar reducer
export default supplierSlice.reducer;
