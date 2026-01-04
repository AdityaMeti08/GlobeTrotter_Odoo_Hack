export default function MyTrips() {
  return (
    <div className="container">
      <h2 className="title">My Trips</h2>

      <div className="grid">
        {[1, 2, 3].map(() => (
          <div className="card">
            <img
              src="https://source.unsplash.com/400x400/?travel"
              style={{ borderRadius: 10 }}
              alt=""
            />
            <h4>Paris Trip</h4>
            <p>7 Days — 5 Stops</p>
          </div>
        ))}
      </div>
    </div>
  );
}
