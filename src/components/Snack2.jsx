import { useNavigate } from "react-router-dom";

function Snack2() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Snack 2</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default Snack2;
