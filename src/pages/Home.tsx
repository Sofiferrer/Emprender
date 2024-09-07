import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-50 m-auto">
        <h1>HOME</h1>
        <Link to={"/supplies"}>SUPPLIES</Link>
      </div>
    </>
  );
}

export default Home;
