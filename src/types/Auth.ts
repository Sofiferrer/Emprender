import { User } from "./User";

export interface AuthState {
  loading: boolean;
  user: User | null;
  error: string | null;
}
