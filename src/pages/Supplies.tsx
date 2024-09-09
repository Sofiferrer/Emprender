import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

interface Props {}

function Supplies(props: Props) {
  const {} = props;

  return (
    <>
      <div className="w-50 m-auto">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default Supplies;
