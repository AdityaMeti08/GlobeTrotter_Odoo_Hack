import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Register() {

  const navigate = useNavigate();

  function handleRegister() {
    alert("User registered successfully 🚀");
    navigate("/dashboard");
  }

  return (
    <div className="container">

      <div className="card" style={{ maxWidth: 800, margin: "auto" }}>

        {/* USER IMAGE */}
        <div style={{ textAlign: "center" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
            alt=""
            width="110"
            style={{
              borderRadius: "50%",
              border: "3px solid #ccc",
              padding: 10,
              marginBottom: 20
            }}
          />
        </div>

        {/* FORM STARTS */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 15 }}>

          <input className="input" placeholder="First Name" />
          <input className="input" placeholder="Last Name" />

          <input className="input" placeholder="Email Address" />
          <input className="input" placeholder="Phone Number" />

          <input className="input" placeholder="City" />
          <input className="input" placeholder="Country" />

        </div>

        {/* TEXT AREA */}
        <textarea
          className="input"
          rows={4}
          placeholder="Additional Information..."
          style={{ marginTop: 10 }}
        />

        {/* REGISTER BUTTON */}
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={handleRegister}>
            Register User
          </button>
        </div>

      </div>
    </div>
  );
}
