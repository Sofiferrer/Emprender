import { RootState } from "../../app/store";

// Selectores
export const selectSuppliers = (state: RootState) =>
  state.supplier.suppliers || [];
export const selectLoading = (state: RootState) => state.supplier.loading;
export const selectError = (state: RootState) => state.supplier.error;
