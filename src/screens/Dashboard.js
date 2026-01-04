export default function Dashboard() {
  return (
    <div className="container">

      <h2 className="title">Welcome Traveller 🌍</h2>

      <img
        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828"
        className="banner"
        alt=""
      />

      <button className="button" style={{ marginTop: 20 }}>
        Plan New Trip
      </button>

      <h3 style={{ marginTop: 30 }}>Popular Cities</h3>

      <div className="grid">
        {["Paris", "Tokyo", "Barcelona"].map((city) => (
          <div className="card">
            <img
              src={`https://source.unsplash.com/400x400/?${city}`}
              height="150"
              width="100%"
              style={{ borderRadius: 10, objectFit: "cover" }}
              alt=""
            />
            <h4>{city}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
