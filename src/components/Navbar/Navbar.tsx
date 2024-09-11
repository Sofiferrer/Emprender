import { useRef, useState } from "react";
import { Button, Overlay } from "react-bootstrap";
import { useAppDispatch } from "../../hooks/storeHook";
import { logout } from "../../redux/auth/authActions";
import styles from "./Navbar.module.css";

function Navbar() {
  const dispatch = useAppDispatch();

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.navbar_container}>
      <h3 className={styles.title}>
        QUE VAMOS <br /> A hacer hoy?
      </h3>
      <Button
        ref={target}
        onClick={() => setShow(!show)}
        className={styles.user_btn}
      >
        <img alt="User avatar" width={40} height={40} src="" />
      </Button>
      <Overlay target={target.current} show={show} placement="bottom">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: "absolute",
              backgroundColor: "#edb232",
              padding: "2px 10px",
              color: "white",
              borderRadius: 3,
              ...props.style,
            }}
          >
            <span onClick={handleLogout}>Cerrar Sesion</span>
          </div>
        )}
      </Overlay>
    </div>
  );
}

export default Navbar;
