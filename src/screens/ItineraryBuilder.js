import { useState } from "react";
import "../index.css";

export default function ItineraryBuilder() {

  const [sections, setSections] = useState([
    { title: "Section 1", details: "", start: "", end: "", budget: "" }
  ]);

  function addSection() {
    setSections([
      ...sections,
      {
        title: `Section ${sections.length + 1}`,
        details: "",
        start: "",
        end: "",
        budget: ""
      }
    ]);
  }

  function handleChange(index, field, value) {
    const copy = [...sections];
    copy[index][field] = value;
    setSections(copy);
  }

  function saveItinerary() {
    console.log("Saving itinerary:", sections);
    alert("Itinerary saved (dummy for now 🚀)");
  }

  return (
    <div className="container">

      {/* HEADER */}
      <h2 style={{ fontWeight: 700 }}>GlobalTrotter</h2>

      <div className="card" style={{ marginTop: 10 }}>

        <h3>Build Your Trip Itinerary</h3>

        {/* SECTION LIST */}
        {sections.map((section, index) => (
          <div className="card" key={index} style={{ marginTop: 15 }}>

            <h4>{section.title}</h4>

            <textarea
              className="input"
              rows={3}
              placeholder="Describe this part of your trip. Example: travel, hotel stay, activity, sightseeing, adventure, food tour etc."
              value={section.details}
              onChange={(e) => handleChange(index, "details", e.target.value)}
            />

            <div style={{ display: "flex", gap: 15, marginTop: 10 }}>
              <div style={{ flex: 1 }}>
                <label>Date Range</label>
                <input
                  type="text"
                  className="input"
                  placeholder="e.g. 10-Jan to 12-Jan"
                  value={section.start}
                  onChange={(e) => handleChange(index, "start", e.target.value)}
                />
              </div>

              <div style={{ flex: 1 }}>
                <label>Budget for this section</label>
                <input
                  type="number"
                  className="input"
                  placeholder="₹"
                  value={section.budget}
                  onChange={(e) => handleChange(index, "budget", e.target.value)}
                />
              </div>
            </div>

          </div>
        ))}

        {/* ADD SECTION BUTTON */}
        <div style={{ textAlign: "center", marginTop: 15 }}>
          <button className="button" onClick={addSection}>
            + Add another Section
          </button>
        </div>

        {/* SAVE ITINERARY */}
        <div style={{ textAlign: "right", marginTop: 20 }}>
          <button className="button" onClick={saveItinerary}>
            Save Itinerary
          </button>
        </div>

      </div>
    </div>
  );
}
