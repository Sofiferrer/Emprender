export interface Supplier {
  id: string;
  name: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  category: string;
  picture: string;
}

export interface SupplierState {
  loading: boolean;
  suppliers: Supplier[] | null;
  error: string | null;
}
