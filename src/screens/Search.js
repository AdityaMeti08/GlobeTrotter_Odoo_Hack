import { useState } from "react";
import "../index.css";

export default function Search() {

  const [query, setQuery] = useState("");

  // Dummy search results (later → MySQL data)
  const activities = [
    { id: 1, name: "Paragliding", place: "Manali", price: "₹3500", duration: "30 mins" },
    { id: 2, name: "Scuba Diving", place: "Goa", price: "₹5000", duration: "45 mins" },
    { id: 3, name: "Desert Safari", place: "Dubai", price: "₹4000", duration: "3 hrs" },
    { id: 4, name: "Sky Diving", place: "Dubai", price: "₹20,000", duration: "1 hr" },
    { id: 5, name: "River Rafting", place: "Rishikesh", price: "₹2500", duration: "2 hrs" },
  ];

  const filtered = activities.filter(a =>
    a.name.toLowerCase().includes(query.toLowerCase()) ||
    a.place.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">

      <h2>GlobalTrotter — Search</h2>

      {/* SEARCH BAR & FILTERS */}
      <div style={{ display: "flex", gap: 12 }}>
        <input
          className="input"
          placeholder="Search city or activity..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ flex: 1 }}
        />

        <button className="button">Group By</button>
        <button className="button">Filter</button>
        <button className="button">Sort By</button>
      </div>


      {/* RESULTS */}
      <h3 style={{ marginTop: 20 }}>Results</h3>

      {filtered.length === 0 && <p>No results found</p>}

      {filtered.map(item => (
        <div className="card" key={item.id} style={{ marginBottom: 10 }}>
          <h3>{item.name}</h3>
          <p><b>Location:</b> {item.place}</p>
          <p><b>Price:</b> {item.price}</p>
          <p><b>Duration:</b> {item.duration}</p>

          <button className="button">
            Add to Trip
          </button>
        </div>
      ))}

    </div>
  );
}
