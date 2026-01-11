import { useParams } from "react-router-dom";
import "../index.css";

export default function ItineraryView() {

  const { id } = useParams();

  // Dummy itinerary — replace with DB later
  const itinerary = [
    {
      day: 1,
      items: [
        { name: "Arrival & Hotel Check-in", cost: 2500 },
        { name: "City Walking Tour", cost: 1800 },
        { name: "Dinner at Local Restaurant", cost: 1200 }
      ]
    },
    {
      day: 2,
      items: [
        { name: "Paragliding Adventure", cost: 5000 },
        { name: "Beach & Relaxation", cost: 0 },
        { name: "Seafood Dinner", cost: 2200 }
      ]
    }
  ];

  function getDayTotal(items) {
    return items.reduce((sum, x) => sum + x.cost, 0);
  }

  const totalTripCost = itinerary.reduce(
    (sum, day) => sum + getDayTotal(day.items),
    0
  );

  return (
    <div className="container">

      <h2>GlobalTrotter — Trip #{id}</h2>

      {/* SEARCH + FILTER BAR */}
      <div style={{ display: "flex", gap: 12 }}>
        <input
          className="input"
          placeholder="Search activity..."
          style={{ flex: 1 }}
        />

        <button className="button">Group By</button>
        <button className="button">Filter</button>
        <button className="button">Sort By</button>
      </div>


      {/* TITLE */}
      <h2 style={{ textAlign: "center", marginTop: 20 }}>
        Itinerary for Selected Place
      </h2>

      <h3 style={{ textAlign: "center" }}>Physical Activity & Expense</h3>


      {/* DAY-WISE LOOP */}
      {itinerary.map(day => (
        <div key={day.day} style={{ marginTop: 25 }}>

          {/* DAY LABEL */}
          <div className="card" style={{ background: "#eef3ff" }}>
            <b>Day {day.day}</b>
          </div>

          {/* ACTIVITIES */}
          {day.items.map((item, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 1fr",
                gap: 15,
                alignItems: "center",
                marginTop: 10
              }}
            >
              <div className="card">
                {item.name}
              </div>

              <div className="card">
                ₹ {item.cost}
              </div>
            </div>
          ))}

          {/* DAY TOTAL */}
          <div
            className="card"
            style={{ marginTop: 10, background: "#f5fff2" }}
          >
            <b>Total for Day {day.day}: ₹ {getDayTotal(day.items)}</b>
          </div>
        </div>
      ))}


      {/* GRAND TOTAL */}
      <div
        className="card"
        style={{ marginTop: 25, background: "#fff3d1" }}
      >
        <h3>Total Trip Cost: ₹ {totalTripCost}</h3>
      </div>

    </div>
  );
}
