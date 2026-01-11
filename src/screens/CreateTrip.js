import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function CreateTrip() {

  const navigate = useNavigate();

  const [trip, setTrip] = useState({
    destination: "",
    start: "",
    end: ""
  });

  function handleChange(e) {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  }

  function handleSave() {

    // if (!trip.destination || !trip.start || !trip.end) {
    //   alert("Please fill all fields 🙂");
    //   return;
    // }

    // later: call backend & get real trip id
    const fakeTripId = 1;

    navigate(`/trip/${fakeTripId}/build`);
  }

  return (
    <div className="container">

      <h2 style={{ fontWeight: 700, marginBottom: 10 }}>GlobalTrotter</h2>

      <div className="card">

        <h3>Plan a New Trip</h3>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 15 }}>

          <div>
            <label>Destination</label>
            <input
              className="input"
              placeholder="Enter a city/place"
              name="destination"
              value={trip.destination}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Trip Start Date</label>
            <input
              type="date"
              className="input"
              name="start"
              value={trip.start}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Trip End Date</label>
            <input
              type="date"
              className="input"
              name="end"
              value={trip.end}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 20 }}>
        <h3>Suggestions for Places / Activities</h3>

        <div className="grid">
          {["museum","beach","food","mountains","shopping","temple"].map(item => (
            <div className="card" key={item}>
              <img
                src={`https://source.unsplash.com/400x400/?${item}`}
                alt={item}
                style={{ width: "100%", height: 140, borderRadius: 10, objectFit: "cover" }}
              />
              <p style={{ marginTop: 5, fontWeight: 500 }}>{item.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "right", marginTop: 20 }}>
        <button className="button" onClick={handleSave}>
          Continue — Build Itinerary
        </button>
      </div>

    </div>
  );
}
