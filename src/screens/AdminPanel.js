import { useState } from "react";
import "../index.css";

export default function AdminPanel() {

  const [tab, setTab] = useState("users");

  const users = [
    { id: 1, name: "Rahul", trips: 5 },
    { id: 2, name: "Priya", trips: 3 },
    { id: 3, name: "James", trips: 7 }
  ];

  const popularCities = [
    { city: "Paris", count: 120 },
    { city: "Tokyo", count: 95 },
    { city: "Goa", count: 80 },
  ];

  const popularActivities = [
    { name: "Paragliding", count: 140 },
    { name: "Scuba Diving", count: 100 },
    { name: "Food Tour", count: 85 }
  ];

  return (
    <div className="container">

      <h2>GlobalTrotter — Admin Dashboard</h2>

      {/* SEARCH + FILTER */}
      <div style={{ display: "flex", gap: 12 }}>
        <input className="input" placeholder="Search..." style={{ flex: 1 }} />
        <button className="button">Group By</button>
        <button className="button">Filter</button>
        <button className="button">Sort By</button>
      </div>


      {/* NAV TABS */}
      <div style={{ display: "flex", gap: 10, marginTop: 15 }}>
        <button className="button" onClick={() => setTab("users")}>Manage Users</button>
        <button className="button" onClick={() => setTab("cities")}>Popular Cities</button>
        <button className="button" onClick={() => setTab("activities")}>Popular Activities</button>
        <button className="button" onClick={() => setTab("analytics")}>User Trends & Analytics</button>
      </div>


      {/* CONTENT AREA */}
      <div className="card" style={{ marginTop: 20 }}>

        {/* MANAGE USERS */}
        {tab === "users" && (
          <>
            <h3>Users & Trips</h3>
            {users.map(u => (
              <div key={u.id} className="card" style={{ marginTop: 10 }}>
                <b>{u.name}</b>
                <p>Trips created: {u.trips}</p>
                <button className="button">View Trips</button>
              </div>
            ))}
          </>
        )}


        {/* POPULAR CITIES */}
        {tab === "cities" && (
          <>
            <h3>Most Visited Cities</h3>
            {popularCities.map(c => (
              <div key={c.city} className="card" style={{ marginTop: 10 }}>
                <b>{c.city}</b> — {c.count} trips
              </div>
            ))}
          </>
        )}


        {/* POPULAR ACTIVITIES */}
        {tab === "activities" && (
          <>
            <h3>Popular Activities</h3>
            {popularActivities.map(a => (
              <div key={a.name} className="card" style={{ marginTop: 10 }}>
                <b>{a.name}</b> — {a.count} users
              </div>
            ))}
          </>
        )}


        {/* ANALYTICS */}
        {tab === "analytics" && (
          <>
            <h3>User Trends & Analytics</h3>

            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Analytics"
              style={{ width: "100%", borderRadius: 10, marginTop: 10 }}
            />

            <p style={{ marginTop: 10 }}>
              Visual summary of user activity, trip creation, and travel preferences.
            </p>
          </>
        )}

      </div>

    </div>
  );
}
