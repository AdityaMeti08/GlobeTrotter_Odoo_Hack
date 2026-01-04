export default function CreateTrip() {
  return (
    <div className="container card">
      <h2 className="title">Create A New Trip</h2>

      <input className="input" placeholder="Trip Name" />
      <textarea className="input" placeholder="Trip Description" />

      <div style={{ display: "flex", gap: 15 }}>
        <input className="input" type="date" />
        <input className="input" type="date" />
      </div>

      <button className="button" style={{ marginTop: 10 }}>
        Save Trip
      </button>
    </div>
  );
}
