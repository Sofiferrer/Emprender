import { Button } from "react-bootstrap";
import { useAppDispatch } from "../hooks/storeHook";
import { logout } from "../redux/auth/authSlice";

export function LogoutBtn() {
  const dispatch = useAppDispatch();

  // Función para manejar el logout
  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <Button variant="primary" type="button" onClick={handleLogout}>
      Cerrar sesion
    </Button>
  );
}

export default LogoutBtn;
