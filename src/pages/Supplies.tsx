import { LogoutBtn, SuppliesForm } from "../components";

interface Props {}

function Supplies(props: Props) {
  const {} = props;

  return (
    <>
      <div className="w-50 m-auto">
        <LogoutBtn />
        <SuppliesForm />
      </div>
    </>
  );
}

export default Supplies;
