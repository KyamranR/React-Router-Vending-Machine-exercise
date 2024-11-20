import { useNavigate } from "react-router-dom";

function Snack3() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Snack 3</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default Snack3;
