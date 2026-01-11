import "../index.css";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  function handleLogout() {
    alert("Logged out 🙂");
    navigate("/");
  }

  return (
    <div>

      {/* NAVBAR */}
      <div style={{
        background: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        padding: "12px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 10
      }}>
        
        {/* LEFT — LOGO */}
        <h2 style={{ margin: 0 }}>GlobalTrotter</h2>

        {/* RIGHT — NAV LINKS */}
        <div style={{ display: "flex", gap: 15 }}>

          <Link to="/dashboard">
            <button className="button">Home</button>
          </Link>

          <Link to="/my-trips">
            <button className="button">My Trips</button>
          </Link>

          <Link to="/create-trip">
            <button className="button">Create Trip</button>
          </Link>

          <Link to="/profile">
            <button className="button">Profile</button>
          </Link>

          <Link to="/search">
           <button className="button">Search</button>
          </Link>
          <Link to="/community">
  <button className="button">Community</button>
</Link>
         

          
           <Link to="/calendar">
  <button className="button">Calendar</button>
</Link>
<Link to="/admin">
    <button className="button">Admin</button>
  </Link>

          <button className="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>



      {/* MAIN CONTENT AREA */}
      <div className="container">

        {/* BANNER */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="banner"
          className="banner"
        />

        {/* SEARCH + FILTER BAR */}
        <div style={{ display: "flex", gap: 12, marginTop: 15 }}>
          <input
            className="input"
            placeholder="Search trips or destinations..."
            style={{ flex: 1 }}
          />

          <button className="button">Group By</button>
          <button className="button">Filter</button>
          <button className="button">Sort By</button>
        </div>


        {/* TOP REGIONAL SELECTIONS */}
        <h3 style={{ marginTop: 30 }}>Top Regional Selections</h3>

        <div className="grid">
          {["Paris", "Tokyo", "Rome", "Bali"].map((city) => (
            <div className="card" key={city}>
              <img
                src={`https://source.unsplash.com/400x400/?${city}`}
                alt={city}
                style={{
                  width: "100%",
                  height: 140,
                  borderRadius: 10,
                  objectFit: "cover"
                }}
              />
              <h4 style={{ marginTop: 8 }}>{city}</h4>
            </div>
          ))}
        </div>


        {/* PREVIOUS TRIPS */}
        <h3 style={{ marginTop: 30 }}>Previous Trips</h3>

        <div className="grid">
          {[1, 2, 3].map((n) => (
            <div className="card" key={n}>
              <img
                src="https://source.unsplash.com/400x400/?travel"
                alt="trip"
                style={{
                  width: "100%",
                  height: 140,
                  borderRadius: 10,
                  objectFit: "cover"
                }}
              />
              <p>Trip Summary</p>
            </div>
          ))}
        </div>


        {/* PLAN TRIP BUTTON */}
        <div style={{ textAlign: "right", marginTop: 30 }}>
          <Link to="/create-trip">
            <button className="button">
              Plan New Trip
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
