import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch } from "../hooks/storeHook";
import { login } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

// Definir el tipo de datos del formulario
type FormValues = {
  email: string;
  password: string;
};

export function LoginForm() {
  // Inicializar react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleLogin = async (formData: FormValues) => {
    console.log(formData);
    const { email, password } = formData;
    dispatch(login({ email, password }));
    navigate("/supplies");
    reset();
  };

  return (
    <Form id="loginForm" onSubmit={handleSubmit(handleLogin)}>
      {/* EMAIL */}
      <Form.Group controlId="loginForm.email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          {...register("email", { required: "Ingresa un email valido" })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </Form.Group>
      {/* PASSWORD */}
      <Form.Group controlId="loginForm.password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          {...register("password", { required: "Ingresa un numero" })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </Form.Group>

      <Button variant="success" type="submit">
        Iniciar sesion
      </Button>
    </Form>
  );
}

export default LoginForm;
