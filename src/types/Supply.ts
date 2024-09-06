export interface Supply {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  price: number;
  supplier: string;
}

export interface SupplyState {
  loading: boolean;
  supplies: Supply[] | null;
  error: string | null;
}
