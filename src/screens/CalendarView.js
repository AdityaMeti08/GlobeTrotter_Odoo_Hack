import { useState } from "react";
import "../index.css";

export default function CalendarView() {

  const [monthOffset, setMonthOffset] = useState(0);

  const today = new Date();
  const viewDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);

  const yyyy = viewDate.getFullYear();
  const mm = viewDate.getMonth();

  const monthName = viewDate.toLocaleString("default", { month: "long" });

  // Dummy trips — replace later with MySQL data
  const trips = [
    { name: "Paris Trip", start: "2026-01-05", end: "2026-01-10" },
    { name: "NYC Getaway", start: "2026-01-15", end: "2026-01-22" },
    { name: "Japan Adventure", start: "2026-01-18", end: "2026-01-25" },
  ];

  function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  const totalDays = daysInMonth(yyyy, mm);
  const firstDay = new Date(yyyy, mm, 1).getDay();

  function getTripOnDay(day) {
    const dateStr = `${yyyy}-${String(mm + 1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;

    return trips.filter(t =>
      new Date(t.start) <= new Date(dateStr) &&
      new Date(t.end) >= new Date(dateStr)
    );
  }

  return (
    <div className="container">

      <h2>GlobalTrotter — Calendar View</h2>

      {/* SEARCH + FILTER */}
      <div style={{ display: "flex", gap: 12 }}>
        <input className="input" placeholder="Search trips..." style={{ flex: 1 }} />
        <button className="button">Group By</button>
        <button className="button">Filter</button>
        <button className="button">Sort By</button>
      </div>


      {/* MONTH HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
        <button className="button" onClick={() => setMonthOffset(m => m - 1)}>←</button>

        <h2>{monthName} {yyyy}</h2>

        <button className="button" onClick={() => setMonthOffset(m => m + 1)}>→</button>
      </div>


      {/* CALENDAR GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 8,
          marginTop: 15
        }}
      >
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
          <div key={d} style={{ textAlign: "center", fontWeight: 600 }}>{d}</div>
        ))}

        {/* blanks before first day */}
        {[...Array(firstDay)].map((_,i) => <div key={"b"+i}></div>)}

        {/* days */}
        {[...Array(totalDays)].map((_,i) => {
          const day = i + 1;
          const dayTrips = getTripOnDay(day);

          return (
            <div key={day} className="card" style={{ minHeight: 85 }}>
              <b>{day}</b>

              {dayTrips.map((t,idx) => (
                <div key={idx}
                  style={{
                    marginTop: 5,
                    background: "#d6e4ff",
                    padding: "3px 5px",
                    borderRadius: 6,
                    fontSize: 12
                  }}
                >
                  {t.name}
                </div>
              ))}
            </div>
          );
        })}
      </div>

    </div>
  );
}
