import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

// Definir el tipo de datos del formulario
type FormValues = {
  name: string;
  quantity: number;
  unit: string;
  stock: number;
  price: number;
  provider: string;
  category: string;
};

export function SuppliesForm() {
  // Inicializar react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [data, setData] = useState(null);

  // Función para manejar el envío del formulario
  const handleAddSupply = async (formData: FormValues) => {
    console.log(formData);

    try {
      const response = await axios.get("http://localhost:8080/api/supplies");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    // Resetear el formulario después del envío
    reset();
  };

  return (
    <Form id="suppliesForm" onSubmit={handleSubmit(handleAddSupply)}>
      {/* NOMBRE */}
      <Form.Group controlId="suppliesForm.name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          {...register("name", { required: "Ingresa un nombre" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </Form.Group>
      {/* CANTIDAD */}
      <Form.Group controlId="suppliesForm.quantity">
        <Form.Label>Cantidad</Form.Label>
        <Form.Control
          type="text"
          {...register("quantity", { required: "Ingresa un numero" })}
        />
        {errors.quantity && <p>{errors.quantity.message}</p>}
      </Form.Group>

      {/* UNIDAD DE MEDIDA */}
      <Form.Group controlId="suppliesForm.unit">
        <Form.Label>Unidad de medida</Form.Label>
        <Form.Select
          defaultValue="Gramos"
          {...register("unit", {
            required: "Asigna una categoria, luego la puedes cambiar",
          })}
        >
          <option value={"grams"}>Gramos</option>
          <option value={"mililiters"}>Mililitros</option>
          <option value={"centimeters"}>Centimetros</option>
          <option value={"piece"}>Unidades</option>
          <option value={"pound"}>Libras</option>
          <option value={"ounce"}>Onzas</option>
        </Form.Select>
        {errors.unit && <p>{errors.unit.message}</p>}
      </Form.Group>

      {/* STOCK */}
      <Form.Group controlId="suppliesForm.stock">
        <Form.Label>Stock</Form.Label>
        <Form.Control
          type="text"
          {...register("stock", {
            required: "Ingresa que cantidad tenes actualmente",
          })}
        />
        {errors.stock && <p>{errors.stock.message}</p>}
      </Form.Group>
      {/* PRICE */}
      <Form.Group controlId="suppliesForm.price">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="text"
          {...register("price", { required: "Ingresa el precio" })}
        />
        {errors.price && <p>{errors.price.message}</p>}
      </Form.Group>

      {/* PROVIDER */}

      <Form.Group controlId="suppliesForm.provider">
        <Form.Label>Proveedor</Form.Label>
        <Form.Select defaultValue="Gramos" {...register("provider")}>
          <option value={"grams"}>Gramos</option>
          <option value={"mililiters"}>Mililitros</option>
          <option value={"centimeters"}>Centimetros</option>
          <option value={"pound"}>Libras</option>
          <option value={"ounce"}>Onzas</option>
        </Form.Select>
        {errors.provider && <p>{errors.provider.message}</p>}
      </Form.Group>

      {/* CATEGORY */}
      <Form.Group controlId="suppliesForm.category">
        <Form.Label>Categoria</Form.Label>
        <Form.Select
          defaultValue="Gramos"
          {...register("category", {
            required: "Asigna una categoria, luego la puedes cambiar",
          })}
        >
          <option value={"grams"}>Gramos</option>
          <option value={"mililiters"}>Mililitros</option>
          <option value={"centimeters"}>Centimetros</option>
          <option value={"pound"}>Libras</option>
          <option value={"ounce"}>Onzas</option>
        </Form.Select>
        {errors.category && <p>{errors.category.message}</p>}
      </Form.Group>

      <Button variant="success" type="submit">
        Guardar
      </Button>
      <Button variant="danger" type="button" onClick={() => reset()}>
        Cancelar
      </Button>
    </Form>
  );
}

export default SuppliesForm;
