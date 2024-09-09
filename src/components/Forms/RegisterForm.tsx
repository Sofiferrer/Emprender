import { useForm } from "react-hook-form";
import { FloatingLabel, Form } from "react-bootstrap";

import styles from "./Forms.module.css";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

// Definir el tipo de datos del formulario
export type RegisterFormValues = {
  email: string;
  password: string;
};

interface RegisterFormProps {
  onSubmit: (formData: RegisterFormValues) => void;
}

function RegisterForm({ onSubmit }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const handleFormSubmit = (formData: RegisterFormValues) => {
    onSubmit(formData);
    reset();
  };

  return (
    <>
      <Form
        id="registerForm"
        onSubmit={handleSubmit(handleFormSubmit)}
        className={styles.form}
      >
        {/* EMAIL */}

        <FloatingLabel
          controlId="registerForm.email"
          label="Email"
          className="mb-3"
        >
          <Form.Control
            className={styles.input_custom}
            type="email"
            placeholder=""
            {...register("email", { required: "Ingresa un email valido" })}
          />
          {errors.email && (
            <p className={styles.error_msg}>{errors.email.message}</p>
          )}
        </FloatingLabel>

        {/* PASSWORD */}

        <FloatingLabel
          controlId="registerForm.password"
          label="Contraseña"
          className="mb-3"
        >
          <Form.Control
            className={styles.input_custom}
            type="password"
            placeholder=""
            {...register("password", {
              required: "Ingresa una contraseña",
            })}
          />
          {errors.password && (
            <p className={styles.error_msg}>{errors.password.message}</p>
          )}
        </FloatingLabel>

        <PrimaryBtn text="Registrate" type="submit" onClick={() => {}} />
      </Form>
    </>
  );
}

export default RegisterForm;
