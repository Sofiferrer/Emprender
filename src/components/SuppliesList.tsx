import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHook";
import { getAll } from "../redux/supplies/suppliesActions";
import { Link } from "react-router-dom";
import {
  selectError,
  selectLoading,
  selectSupplies,
} from "../redux/supplies/suppliesSelectors";

interface Props {}

function SuppliesList(props: Props) {
  const {} = props;
  const dispatch = useAppDispatch();

  const supplies = useAppSelector(selectSupplies);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    // Cargar insumos al montar el componente
    dispatch(getAll());
  }, [dispatch]);
  // Mostrar mensaje de carga
  if (loading) {
    return <p>Cargando...</p>;
  }

  // Mostrar mensaje de error
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Lista de Insumos</h1>
      <Link to="create">Crear Nuevo Insumo</Link>
      <ul>
        {supplies.length > 0 ? (
          supplies.map((supply) => (
            <li key={supply.id}>
              {supply.name} - {supply.quantity} {supply.unit}
              {/* Link para editar */}
              <Link
                to={`/supplies/update/${supply.id}`}
                style={{ marginLeft: "10px" }}
              >
                Editar
              </Link>
            </li>
          ))
        ) : (
          <li>No hay insumos disponibles.</li>
        )}
      </ul>
    </div>
  );
}

export default SuppliesList;
