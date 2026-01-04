export default function CitySearch() {
  return (
    <div className="container">
      <input className="input" placeholder="Search City..." />

      {["Dubai", "Rome", "Bali"].map((city) => (
        <div className="card" style={{ display: "flex", gap: 15 }}>
          <img
            src={`https://source.unsplash.com/120x120/?${city}`}
            alt=""
            style={{ borderRadius: 10 }}
          />
          <h3>{city}</h3>
        </div>
      ))}
    </div>
  );
}
