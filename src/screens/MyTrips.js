import { useState } from "react";
import { Link } from "react-router-dom";   // << ADD THIS
import "../index.css";
import { auth } from "../middleware/auth.js";


export default function MyTrips() {

  const [search, setSearch] = useState("");

  const [trips] = useState([
    { id: 1, name: "Paris Adventure", start: "2026-01-02", end: "2026-01-10", summary: "Romantic & cultural trip" },
    { id: 2, name: "Tokyo Explorer", start: "2025-12-01", end: "2025-12-10", summary: "Tech + culture + food" },
    { id: 3, name: "Goa Getaway", start: "2024-12-20", end: "2024-12-25", summary: "Beach relaxation" }
  ]);

  const today = new Date();

  const ongoing = trips.filter(
    t => new Date(t.start) <= today && today <= new Date(t.end)
  );

  const upcoming = trips.filter(
    t => new Date(t.start) > today
  );

  const completed = trips.filter(
    t => new Date(t.end) < today
  );

  function TripCard({ trip }) {
    return (
      <div className="card" style={{ marginTop: 10 }}>
        <h3>{trip.name}</h3>

        <p>{trip.summary}</p>

        <p>
          <b>{trip.start}</b> — <b>{trip.end}</b>
        </p>

        {/* VIEW ITINERARY BUTTON — CORRECT PLACE */}
        <Link to={`/trip/${trip.id}/view`}>
          <button className="button" style={{ marginTop: 10 }}>
            View Itinerary
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container">

      <h2>GlobalTrotter — My Trips</h2>

      {/* SEARCH BAR */}
      <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
        <input
          className="input"
          placeholder="Search trips..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="button">Group By</button>
        <button className="button">Filter</button>
        <button className="button">Sort By</button>
      </div>

      {/* ONGOING */}
      <h3 style={{ marginTop: 25 }}>Ongoing</h3>
      {ongoing.length === 0 && <p>No ongoing trips</p>}
      {ongoing.map(t => <TripCard key={t.id} trip={t} />)}

      {/* UPCOMING */}
      <h3 style={{ marginTop: 25 }}>Upcoming</h3>
      {upcoming.length === 0 && <p>No upcoming trips</p>}
      {upcoming.map(t => <TripCard key={t.id} trip={t} />)}

      {/* COMPLETED */}
      <h3 style={{ marginTop: 25 }}>Completed</h3>
      {completed.length === 0 && <p>No completed trips yet</p>}
      {completed.map(t => <TripCard key={t.id} trip={t} />)}

    </div>
  );
}
