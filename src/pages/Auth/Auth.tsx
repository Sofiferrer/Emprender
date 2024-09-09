import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginForm } from "../../components";
import { useAppDispatch } from "../../hooks/storeHook";
import { login, register } from "../../redux/auth/authActions";
import { LoginFormValues } from "../../components/Forms/LoginForm";
import RegisterForm, {
  RegisterFormValues,
} from "../../components/Forms/RegisterForm";

import Woman from "../../assets/images/woman.png";
import styles from "./Auth.module.css";
import GoogleBtn from "../../components/GoogleBtn/GoogleBtn";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthForm = () => {
    setIsLogin(!isLogin);
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Función para manejar el login
  const handleLogin = async (formData: LoginFormValues) => {
    const { email, password } = formData;
    await dispatch(login({ email, password }));
    navigate("/");
  };

  // Función para manejar el envío del formulario
  const handleRegister = async (formData: RegisterFormValues) => {
    const { email, password } = formData;
    dispatch(register({ email, password }));
  };
  return (
    <div className={styles.auth_container}>
      <div className={styles.circle}>
        <img alt="Emprender logo" className={styles.woman} src={Woman} />
      </div>
      <h1 className={styles.app_name}>Emprender</h1>
      <p className={styles.app_description}>APP DE GESTION</p>
      <div className={styles.form_container}>
        {isLogin ? (
          <>
            <LoginForm onSubmit={handleLogin} />
          </>
        ) : (
          <>
            <RegisterForm onSubmit={handleRegister} />
          </>
        )}
      </div>
      <div className={styles.google_container}>
        {isLogin ? (
          <>
            <GoogleBtn
              text="Ingresa con google"
              type="button"
              onClick={() => {}}
            />
            <p className="mt-3">O</p>
            <span className={styles.toggle_span} onClick={toggleAuthForm}>
              Crear cuenta
            </span>
          </>
        ) : (
          <>
            <GoogleBtn
              text="Registrate con google"
              type="button"
              onClick={() => {}}
            />
            <p className="mt-3">O</p>
            <span className={styles.toggle_span} onClick={toggleAuthForm}>
              Iniciar Sesion
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default Auth;
