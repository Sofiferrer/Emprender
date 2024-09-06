import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

export type LoginFormValues = {
  email: string;
  password: string;
};

interface LoginFormProps {
  onSubmit: (formData: LoginFormValues) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  // Inicializar react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>();

  // Función para manejar el envío del formulario
  const handleFormSubmit = (formData: LoginFormValues) => {
    onSubmit(formData);
    reset();
  };

  return (
    <Form id="loginForm" onSubmit={handleSubmit(handleFormSubmit)}>
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
