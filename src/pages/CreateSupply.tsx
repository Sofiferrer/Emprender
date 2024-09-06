import { SuppliesForm } from "../components";
import { useAppDispatch } from "../hooks/storeHook";
import { create } from "../redux/supplies/suppliesActions";
import { SupplyFormValues } from "../components/SuppliesForm";
import { useNavigate } from "react-router-dom";

interface Props {}

function CreateSupply(props: Props) {
  const {} = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCreateSupply = async (formData: SupplyFormValues) => {
    const { name, quantity, unit, category, price, supplier } = formData;

    try {
      // Dispatch para crear el suministro
      await dispatch(
        create({ name, quantity, unit, category, price, supplier })
      );

      // Navegación si el suministro se crea con éxito
      navigate("/supplies");
    } catch (error) {
      console.error("Error al crear el suministro:", error);
    }
  };

  return (
    <>
      <div className="w-50 m-auto">
        <SuppliesForm onSubmit={handleCreateSupply} />
      </div>
    </>
  );
}

export default CreateSupply;
