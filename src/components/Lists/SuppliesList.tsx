import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import { getAll } from "../../redux/supplies/suppliesActions";
import { Link } from "react-router-dom";
import {
  selectError,
  selectLoading,
  selectSupplies,
} from "../../redux/supplies/suppliesSelectors";
import styles from "./Lists.module.css";
interface Props {}

export function SuppliesList(props: Props) {
  const {} = props;
  const dispatch = useAppDispatch();

  const supplies = useAppSelector(selectSupplies);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  // Mostrar mensaje de error
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Link to="create">Crear Nuevo Insumo</Link>
      <ul className={styles.list}>
        {supplies.length > 0 ? (
          supplies.map((supply) => (
            <li key={supply.id} className={styles.list_item}>
              <Link
                className={styles.link}
                to={`/supplies/update/${supply.id}`}
              >
                <p>{supply.name}</p>
                <div className="d-flex justify-content-between">
                  <span>
                    STOCK: {supply.stock}-{supply.unit}
                  </span>
                  <div>
                    <span>${supply.price} </span>
                    <span>
                      {" "}
                      x{supply.quantity} {supply.unit}
                    </span>
                  </div>
                </div>
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
