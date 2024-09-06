import { RootState } from "../../app/store";

// Selectores
export const selectSupplies = (state: RootState) => state.supply.supplies || [];
export const selectLoading = (state: RootState) => state.supply.loading;
export const selectError = (state: RootState) => state.supply.error;
