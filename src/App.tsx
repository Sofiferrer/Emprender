import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { connect } from "react-redux";
import Login from "./pages/Login";
import Supplies from "./pages/Supplies";
import { useAppSelector } from "./hooks/storeHook";
import { RootState } from "./app/store";

const App = () => {
  const auth = useAppSelector((state: RootState) => state.auth.user);

  const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    if (auth == undefined) {
      return <Navigate to={"/login"} />;
    } else {
      if (auth.token != null && auth.token != undefined) {
        return <>{children}</>;
      } else {
        return <Navigate to={"/login"} />;
      }
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/supplies"
          element={
            <PrivateRoute>
              <Supplies />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

const mapStateToProps = (state: any) => {
  return { auth: state.auth.user };
};

export default connect(mapStateToProps)(App);
