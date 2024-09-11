import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { useEffect } from "react";

// Definir el tipo de datos del formulario
export type SupplyFormValues = {
  name: string;
  price: number;
  quantity: number;
  unit: string;
  supplier: string;
  category: string;
  stock: number;
};

interface SupplyFormProps {
  onSubmit: (formData: SupplyFormValues) => void;
  initialData?: SupplyFormValues; // Datos iniciales opcionales para edición
}

const unitOptions = [
  "grams",
  "mililiters",
  "centimeters",
  "piece",
  "pound",
  "ounce",
];

function SuppliesForm({ onSubmit, initialData }: SupplyFormProps) {
  // Inicializar react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SupplyFormValues>({
    defaultValues: initialData || {
      name: "",
      price: 0,
      quantity: 0,
      unit: "grams",
      supplier: "grams",
      category: "grams",
      stock: 0,
    },
  });

  // Si hay datos iniciales, restablecer los valores del formulario
  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  // Función para manejar el envío del formulario
  const handleFormSubmit = (formData: SupplyFormValues) => {
    onSubmit(formData);
    reset();
  };

  return (
    <Form id="suppliesForm" onSubmit={handleSubmit(handleFormSubmit)}>
      {/* NOMBRE */}
      <Form.Group controlId="suppliesForm.name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          {...register("name", { required: "Ingresa un nombre" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </Form.Group>

      {/* PRECIO */}
      <Form.Group controlId="suppliesForm.price">
        <Form.Label>Precio</Form.Label>

        <Form.Control
          type="number"
          {...register("price", {
            required: "Ingresa el precio",
            valueAsNumber: true, // Convierte el valor a número
          })}
        />
        {errors.price && <p>{errors.price.message}</p>}
      </Form.Group>

      {/* CANTIDAD */}
      <Form.Group controlId="suppliesForm.quantity">
        <Form.Label>Cantidad</Form.Label>
        <Form.Control
          type="number"
          {...register("quantity", {
            required: "Ingresa un numero",
            valueAsNumber: true,
          })}
        />

        {errors.quantity && <p>{errors.quantity.message}</p>}
      </Form.Group>

      {/* UNIDAD DE MEDIDA */}
      <Form.Group controlId="suppliesForm.unit">
        <Form.Label>Unidad de medida</Form.Label>
        <Form.Select
          {...register("unit", {
            required: "Asigna una unidad de medida",
          })}
        >
          {unitOptions.map((option) => (
            <option key={option} value={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </Form.Select>
        {errors.unit && <p>{errors.unit.message}</p>}
      </Form.Group>

      {/* PROVEEDOR */}
      <Form.Group controlId="suppliesForm.supplier">
        <Form.Label>Proveedor</Form.Label>
        <Form.Select {...register("supplier")}>
          <option value={"grams"}>Gramos</option>
          <option value={"mililiters"}>Mililitros</option>
          <option value={"centimeters"}>Centimetros</option>
          <option value={"pound"}>Libras</option>
          <option value={"ounce"}>Onzas</option>
        </Form.Select>
        {errors.supplier && <p>{errors.supplier.message}</p>}
      </Form.Group>

      {/* CATEGORIA */}
      <Form.Group controlId="suppliesForm.category">
        <Form.Label>Categoría</Form.Label>
        <Form.Select
          {...register("category", {
            required: "Asigna una categoría",
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

      {/* STOCK */}
      <Form.Group controlId="suppliesForm.stock">
        <Form.Label>Stock</Form.Label>

        <Form.Control
          type="number"
          {...register("stock", {
            required: "Ingresa la cantidad que tienes",
            valueAsNumber: true,
          })}
        />
        {errors.stock && <p>{errors.stock.message}</p>}
      </Form.Group>

      <Button variant="success" type="submit">
        {initialData ? "Editar Insumo" : "Guardar Insumo"}
      </Button>
      <Button variant="danger" type="button" onClick={() => reset()}>
        Cancelar
      </Button>
    </Form>
  );
}

export default SuppliesForm;
