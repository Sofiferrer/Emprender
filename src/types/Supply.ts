export interface Supply {
  id: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
  supplier: string;
  category: string;
  stock: number;
}

export interface SupplyState {
  loading: boolean;
  supplies: Supply[] | null;
  error: string | null;
}
