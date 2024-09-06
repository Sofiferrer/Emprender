import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Supply, SupplyState } from "../../types/Supply";
import { create, getAll, getById, update } from "./suppliesActions";

// Estado inicial
const initialState: SupplyState = {
  loading: false,
  supplies: [],
  error: null,
};

// Crear el slice de supplies
export const supplySlice = createSlice({
  name: "supply",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(create.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(create.fulfilled, (state, action: PayloadAction<Supply>) => {
        state.loading = false;
        if (Array.isArray(state.supplies)) {
          state.supplies.push(action.payload); // Agregar el nuevo insumo a la lista
        } else {
          state.supplies = [action.payload]; // Inicializar si no es un array
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
      .addCase(getAll.fulfilled, (state, action: PayloadAction<Supply[]>) => {
        state.loading = false;
        state.supplies = action.payload; // Guardar la lista de insumos
        state.error = null;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.supplies = [];
        state.error = action.payload as string;
      })
      // Casos de getById
      .addCase(getById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getById.fulfilled, (state, action: PayloadAction<Supply>) => {
        state.loading = false;
        const index = state.supplies?.findIndex(
          (supply) => supply.id === action.payload.id
        );
        if (index !== undefined && index !== -1 && state.supplies) {
          state.supplies[index] = action.payload; // Actualizar el insumo en el estado
        } else if (state.supplies) {
          state.supplies.push(action.payload);
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
      .addCase(update.fulfilled, (state, action: PayloadAction<Supply>) => {
        state.loading = false;
        const index = state.supplies?.findIndex(
          (supply) => supply.id === action.payload.id
        );
        if (index !== undefined && index !== -1 && state.supplies) {
          state.supplies[index] = action.payload; // Actualizar el insumo en el estado
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
export default supplySlice.reducer;
