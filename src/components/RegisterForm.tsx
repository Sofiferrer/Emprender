import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch } from "../hooks/storeHook";
import { register as registerUser } from "../redux/auth/authSlice";

// Definir el tipo de datos del formulario
type RegisterForm = {
  email: string;
  password: string;
};

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterForm>();

  const dispatch = useAppDispatch();

  // Función para manejar el envío del formulario
  const handleRegister = async (formData: RegisterForm) => {
    const { email, password } = formData;
    dispatch(registerUser({ email, password }));
    reset();
  };

  const handleGoogleRegistration = async () => {};

  return (
    <>
      <Button
        variant="secondary"
        type="button"
        onClick={handleGoogleRegistration}
      >
        Registarte con google
      </Button>
      <Form id="registerForm" onSubmit={handleSubmit(handleRegister)}>
        {/* EMAIL */}
        <Form.Group controlId="registerForm.email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("email", { required: "Ingresa un email valido" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </Form.Group>

        {/* PASSWORD */}
        <Form.Group controlId="registerForm.password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            {...register("password", { required: "Ingresa un numero" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </Form.Group>

        <Button variant="success" type="submit">
          Registarte
        </Button>
      </Form>
    </>
  );
}

export default RegisterForm;
