import { LoginForm } from "../components";

interface Props {}

function Login(props: Props) {
  const {} = props;

  return (
    <>
      <div className="w-50 m-auto">
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
