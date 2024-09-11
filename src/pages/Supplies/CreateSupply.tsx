import { SuppliesForm } from "../../components";
import { useAppDispatch } from "../../hooks/storeHook";
import { create } from "../../redux/supplies/suppliesActions";
import { SupplyFormValues } from "../../components/Forms/SuppliesForm";
import { useNavigate } from "react-router-dom";

interface Props {}

function CreateSupply(props: Props) {
  const {} = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCreateSupply = async (formData: SupplyFormValues) => {
    const { name, price, quantity, unit, supplier, category, stock } = formData;

    try {
      await dispatch(
        create({ name, price, quantity, unit, supplier, category, stock })
      );
      navigate("/supplies");
    } catch (error) {
      console.error("Error al crear el insumo:", error);
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
