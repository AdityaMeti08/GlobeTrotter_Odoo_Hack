import "../index.css";

export default function Profile() {

  const user = {
    name: "Aditya",
    email: "aditya@example.com",
    phone: "+91 9876543210",
    city: "Bengaluru",
    country: "India"
  };

  return (
    <div className="container">

      <h2>GlobalTrotter — Profile</h2>

      {/* USER INFO CARD */}
      <div className="card" style={{ display: "flex", gap: 20 }}>

        {/* PROFILE IMAGE */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          width="120"
          style={{ borderRadius: "50%" }}
          alt="user"
        />

        {/* DETAILS */}
        <div style={{ flex: 1 }}>
          <h3>{user.name}</h3>

          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone}</p>
          <p><b>Location:</b> {user.city}, {user.country}</p>

          <button className="button">
            Edit Profile
          </button>
        </div>
      </div>



      {/* PREPLANNED TRIPS */}
      <h3 style={{ marginTop: 30 }}>Pre-Planned Trips</h3>

      <div className="grid">
        {[1,2,3].map(id => (
          <div className="card" key={id}>
            <img
              src="https://source.unsplash.com/400x400/?travel"
              alt=""
              style={{ width: "100%", height: 140, borderRadius: 10, objectFit: "cover" }}
            />
            <button className="button" style={{ marginTop: 8 }}>
              View
            </button>
          </div>
        ))}
      </div>



      {/* PREVIOUS TRIPS */}
      <h3 style={{ marginTop: 30 }}>Previous Trips</h3>

      <div className="grid">
        {[1,2].map(id => (
          <div className="card" key={id}>
            <img
              src="https://source.unsplash.com/400x400/?beach"
              alt=""
              style={{ width: "100%", height: 140, borderRadius: 10, objectFit: "cover" }}
            />
            <button className="button" style={{ marginTop: 8 }}>
              View
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
