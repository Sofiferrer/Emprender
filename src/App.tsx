import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { connect } from "react-redux";
import { useAppSelector } from "./hooks/storeHook";
import { RootState } from "./app/store";

import Auth from "./pages/Auth/Auth";
import Supplies from "./pages/Supplies";
import Home from "./pages/Home";
import CreateSupply from "./pages/CreateSupply";
import UpdateSupply from "./pages/UpdateSupply";

import SuppliesList from "./components/SuppliesList/SuppliesList";
import "./App.css";

const App = () => {
  const auth = useAppSelector((state: RootState) => state.auth.user);
  console.log("AUTH", auth);

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
              <Home />
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
      </Routes>
    </Router>
  );
};

const mapStateToProps = (state: any) => {
  return { auth: state.auth.user };
};

export default connect(mapStateToProps)(App);
