import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components";
import { useAppDispatch } from "../hooks/storeHook";
import { login } from "../redux/auth/authActions";
import { LoginFormValues } from "../components/Forms/LoginForm";

interface Props {}

function Login(props: Props) {
  const {} = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Función para manejar el login
  const handleLogin = async (formData: LoginFormValues) => {
    const { email, password } = formData;
    await dispatch(login({ email, password }));
    navigate("/supplies");
  };

  return (
    <>
      <div className="w-50 m-auto">
        <LoginForm onSubmit={handleLogin} />
      </div>
    </>
  );
}

export default Login;
