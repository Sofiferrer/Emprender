import { LoginForm } from "../components";
import { RegisterForm } from "../components";

interface Props {}

function Home(props: Props) {
  const {} = props;

  return (
    <>
      <div className="w-50 m-auto">
        <RegisterForm />
      </div>
    </>
  );
}

export default Home;
