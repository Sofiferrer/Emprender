import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";

interface Props {}

function Supplies(props: Props) {
  const {} = props;

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Supplies;
