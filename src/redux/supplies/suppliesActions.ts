import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchSupplies,
  createSupply,
  fetchSupplyById,
  updateSupply,
} from "./suppliesApi";
import { Supply } from "../../types/Supply";

export const create = createAsyncThunk<
  Supply,
  Omit<Supply, "id">,
  { rejectValue: string }
>("supply/create", async (supplyData, thunkAPI) => {
  try {
    const data = await createSupply(supplyData);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.message || "Error al crear el insumo"
    );
  }
});

export const getAll = createAsyncThunk<Supply[], void, { rejectValue: string }>(
  "supply/getAll",
  async (_, thunkAPI) => {
    try {
      const data = await fetchSupplies();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Error al obtener insumos"
      );
    }
  }
);

export const getById = createAsyncThunk<
  Supply,
  string,
  { rejectValue: string }
>("supply/getById", async (id, thunkAPI) => {
  try {
    const data = await fetchSupplyById(id);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.message || "Error al obtener el insumo"
    );
  }
});

export const update = createAsyncThunk<
  Supply,
  { id: string; supplyData: Omit<Supply, "id"> },
  { rejectValue: string }
>("supply/update", async ({ id, supplyData }, thunkAPI) => {
  try {
    const data = await updateSupply(id, supplyData);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.message || "Error al actualizar el insumo"
    );
  }
});
