export default function Login() {
  const background =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee";

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover"
      }}
    >
      <div className="card" style={{ width: 360 }}>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            width="80"
            alt=""
          />
          <h2>GlobalTrotter</h2>
        </div>

        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Password" type="password" />

        <button className="button" style={{ width: "100%" }}>
          Login
        </button>

        <p style={{ textAlign: "center", color: "#2f6fed" }}>
          Create an account
        </p>
      </div>
    </div>
  );
}
