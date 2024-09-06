import { Supply } from "../../types/Supply";

//const API_URL = import.meta.env.VITE_API_URL;
const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchSupplies() {
  const response = await fetch(`${API_URL}/supplies/`);
  const data = await response.json();
  return data.data;
}

export async function createSupply(supplyData: Omit<Supply, "id">) {
  const response = await fetch(`${API_URL}/supplies/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(supplyData),
  });
  const data = await response.json();
  return data;
}

export async function fetchSupplyById(id: string) {
  const response = await fetch(`${API_URL}/supplies/${id}`);
  const data = await response.json();
  return data;
}

export async function updateSupply(id: string, supplyData: Omit<Supply, "id">) {
  const response = await fetch(`${API_URL}/supplies/update/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(supplyData),
  });
  const data = await response.json();
  return data;
}
