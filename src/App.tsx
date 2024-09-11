import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { connect } from "react-redux";
import { useAppDispatch, useAppSelector } from "./hooks/storeHook";
import { RootState } from "./app/store";

import Auth from "./pages/Auth/Auth";
import Supplies from "./pages/Supplies/Supplies";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateSupply from "./pages/Supplies/CreateSupply";
import UpdateSupply from "./pages/Supplies/UpdateSupply";

import "./App.css";
import { SuppliesList } from "./components";
import { useEffect } from "react";
import { getAll } from "./redux/supplies/suppliesActions";

const App = () => {
  const auth = useAppSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    if (auth == undefined) {
      return <Navigate to={"/auth"} />;
    } else {
      if (auth.token != null && auth.token != undefined) {
        return <>{children}</>;
      } else {
        return <Navigate to={"/auth"} />;
      }
    }
  };

  return (
    <Router basename="/Emprender">
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/supplies"
          element={
            <PrivateRoute>
              <Supplies />
            </PrivateRoute>
          }
        >
          <Route index element={<SuppliesList />} />
          <Route path="create" element={<CreateSupply />} />
          <Route path="update/:id" element={<UpdateSupply />} />
          {/*<Route path=":id" element={<SupplyDetail />} />  Ruta para el detalle del suministro */}
        </Route>
        <Route
          path="/suppliers"
          element={
            <PrivateRoute>
              <Supplies />
            </PrivateRoute>
          }
        >
          <Route index element={<SuppliesList />} />
          <Route path="create" element={<CreateSupply />} />
          <Route path="update/:id" element={<UpdateSupply />} />
          {/*<Route path=":id" element={<SupplyDetail />} />  Ruta para el detalle del suministro */}
        </Route>
        <Route
          path="/recipes"
          element={
            <PrivateRoute>
              <Supplies />
            </PrivateRoute>
          }
        >
          <Route index element={<SuppliesList />} />
          <Route path="create" element={<CreateSupply />} />
          <Route path="update/:id" element={<UpdateSupply />} />
          {/*<Route path=":id" element={<SupplyDetail />} />  Ruta para el detalle del suministro */}
        </Route>
        <Route
          path="/sales"
          element={
            <PrivateRoute>
              <Supplies />
            </PrivateRoute>
          }
        >
          <Route index element={<SuppliesList />} />
          <Route path="create" element={<CreateSupply />} />
          <Route path="update/:id" element={<UpdateSupply />} />
          {/*<Route path=":id" element={<SupplyDetail />} />  Ruta para el detalle del suministro */}
        </Route>
        <Route
          path="/production"
          element={
            <PrivateRoute>
              <Supplies />
            </PrivateRoute>
          }
        >
          <Route index element={<SuppliesList />} />
          <Route path="create" element={<CreateSupply />} />
          <Route path="update/:id" element={<UpdateSupply />} />
          {/*<Route path=":id" element={<SupplyDetail />} />  Ruta para el detalle del suministro */}
        </Route>
        <Route
          path="/purchases"
          element={
            <PrivateRoute>
              <Supplies />
            </PrivateRoute>
          }
        >
          <Route index element={<SuppliesList />} />
          <Route path="create" element={<CreateSupply />} />
          <Route path="update/:id" element={<UpdateSupply />} />
          {/*<Route path=":id" element={<SupplyDetail />} />  Ruta para el detalle del suministro */}
        </Route>
      </Routes>
    </Router>
  );
};

const mapStateToProps = (state: any) => {
  return { auth: state.auth.user };
};

export default connect(mapStateToProps)(App);
