import { Outlet } from "react-router-dom";

interface Props {}

function Supplies(props: Props) {
  const {} = props;

  return (
    <>
      <div className="w-50 m-auto">
        <Outlet />
      </div>
    </>
  );
}

export default Supplies;
