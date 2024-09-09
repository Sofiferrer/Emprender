import { useAppDispatch } from "../../hooks/storeHook";
import { logout } from "../../redux/auth/authActions";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

function Navbar() {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="d-flex">
      <h1>Emprender</h1>
      <PrimaryBtn text="Cerrar sesión" type="button" onClick={handleLogout} />
    </div>
  );
}

export default Navbar;
