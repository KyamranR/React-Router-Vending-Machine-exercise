import { useNavigate } from "react-router-dom";

function Snack1() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Snack 1</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default Snack1;
