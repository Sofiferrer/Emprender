import { Supplier } from "../../types/Supplier";

export async function fetchSuppliers() {
  const response = await fetch("https://supplies.onrender.com/suppliers/");
  const data = await response.json();
  return data.data;
}

export async function createSupplier(supplierData: Omit<Supplier, "id">) {
  const response = await fetch(
    "https://supplies.onrender.com/suppliers/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(supplierData),
    }
  );
  const data = await response.json();
  return data as Supplier;
}

export async function fetchSupplierById(id: string) {
  const response = await fetch(`https://supplies.onrender.com/suppliers/${id}`);
  const data = await response.json();
  return data;
}

export async function updateSupplier(
  id: string,
  supplierData: Omit<Supplier, "id">
) {
  const response = await fetch(
    `https://supplies.onrender.com/suppliers/update/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(supplierData),
    }
  );
  const data = await response.json();
  return data;
}
