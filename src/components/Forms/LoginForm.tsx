import { useForm } from "react-hook-form";
import { FloatingLabel, Form } from "react-bootstrap";

import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import styles from "./Forms.module.css";

export type LoginFormValues = {
  email: string;
  password: string;
};

interface LoginFormProps {
  onSubmit: (formData: LoginFormValues) => void;
}

function LoginForm({ onSubmit }: LoginFormProps) {
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
    <Form
      id="loginForm"
      onSubmit={handleSubmit(handleFormSubmit)}
      className={styles.form}
    >
      <FloatingLabel controlId="loginForm.email" label="Email" className="mb-3">
        <Form.Control
          type="email"
          placeholder=" "
          className={styles.input_custom}
          {...register("email", { required: "Ingresa un email valido" })}
        />
        {errors.email && (
          <p className={styles.error_msg}>{errors.email.message}</p>
        )}
      </FloatingLabel>

      <FloatingLabel
        controlId="loginForm.password"
        label="Contraseña"
        className="mb-3"
      >
        <Form.Control
          type="password"
          placeholder=" "
          className={styles.input_custom}
          {...register("password", { required: "Ingresa una contraseña" })}
        />
        {errors.password && (
          <p className={styles.error_msg}>{errors.password.message}</p>
        )}
      </FloatingLabel>

      <PrimaryBtn text="Iniciar sesion" type="submit" onClick={() => {}} />
    </Form>
  );
}

export default LoginForm;
