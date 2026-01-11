import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Login() {

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    // Later: validate credentials + call backend
    navigate("/dashboard");
  }

  return (
    <div 
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      <div className="card" style={{ width: 380 }}>

        {/* APP LOGO */}
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
            width="70"
            alt="logo"
          />
          <h2 style={{ marginTop: 8 }}>GlobalTrotter</h2>
        </div>

        {/* LOGIN FORM */}
        <form onSubmit={handleLogin}>

          <input 
            className="input" 
            placeholder="Email Address"
            type="email"
            required
          />

          <input 
            className="input" 
            placeholder="Password"
            type="password"
            required
          />

          <button 
            className="button" 
            style={{ width: "100%", marginTop: 5 }}
            type="submit"
          >
            Login
          </button>
        </form>

        {/* EXTRA OPTIONS */}
        <p 
          style={{ 
            marginTop: 10, 
            textAlign: "center", 
            color: "#2f6fed", 
            cursor: "pointer" 
          }}
          onClick={() => navigate("/register")}
        >
          Create an account
        </p>

        <p 
          style={{ 
            textAlign: "center", 
            color: "gray", 
            cursor: "pointer" 
          }}
          onClick={() => alert("Forgot password feature coming soon 🙂")}
        >
          Forgot Password?
        </p>

      </div>
    </div>
  );
}
