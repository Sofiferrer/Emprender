import { createAsyncThunk } from "@reduxjs/toolkit";
import { Supplier } from "../../types/Supplier";
import {
  createSupplier,
  fetchSupplierById,
  fetchSuppliers,
  updateSupplier,
} from "./suppliersApi";

export const create = createAsyncThunk<
  Supplier,
  Omit<Supplier, "id">,
  { rejectValue: string }
>("supplier/create", async (supplierData, thunkAPI) => {
  try {
    const data = await createSupplier(supplierData);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.message || "Error al crear el proveedor"
    );
  }
});

export const getAll = createAsyncThunk<
  Supplier[],
  void,
  { rejectValue: string }
>("supplier/getAll", async (_, thunkAPI) => {
  try {
    const data = await fetchSuppliers();
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.message || "Error al obtener proveedores"
    );
  }
});

export const getById = createAsyncThunk<
  Supplier,
  string,
  { rejectValue: string }
>("supplier/getById", async (id, thunkAPI) => {
  try {
    const data = await fetchSupplierById(id);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.message || "Error al obtener el proveedor"
    );
  }
});

// Thunk para actualizar un insumo
export const update = createAsyncThunk<
  Supplier,
  { id: string; supplierData: Omit<Supplier, "id"> },
  { rejectValue: string }
>("/update", async ({ id, supplierData }, thunkAPI) => {
  try {
    const data = await updateSupplier(id, supplierData);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.message || "Error al actualizar el proveedor"
    );
  }
});
