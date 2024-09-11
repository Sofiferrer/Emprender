import { SuppliesForm } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import { useParams } from "react-router-dom";
import { SupplyFormValues } from "../../components/Forms/SuppliesForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getById, update } from "../../redux/supplies/suppliesActions";

function UpdateSupply() {
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const supply = useAppSelector((state) =>
    state.supply.supplies?.find((supply) => supply.id === id)
  );

  useEffect(() => {
    if (!supply && id) {
      dispatch(getById(id));
    }
  }, [dispatch, id, supply]);

  const handleSubmit = (formData: SupplyFormValues) => {
    console.log(formData);

    // Lógica para actualizar insumo
    if (supply) {
      dispatch(
        update({
          id: supply.id,
          supplyData: {
            name: supply.name,
            quantity: supply.quantity,
            unit: supply.unit,
            category: supply.category,
            price: supply.price,
            supplier: supply.supplier,
          },
        })
      );
    }

    navigate("/supplies");
  };

  return (
    <>
      <div className="w-50 m-auto">
        <SuppliesForm initialData={supply} onSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default UpdateSupply;
