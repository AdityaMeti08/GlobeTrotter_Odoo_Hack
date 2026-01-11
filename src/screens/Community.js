import { useState } from "react";
import "../index.css";

export default function Community() {

  const [search, setSearch] = useState("");

  const posts = [
    {
      id: 1,
      user: "Rahul",
      avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      title: "Amazing Paragliding in Manali!",
      text: "The view from the top was unbelievable — must try!",
      tag: "Adventure"
    },
    {
      id: 2,
      user: "Priya",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
      title: "Tokyo Food Tour",
      text: "The sushi and ramen here are next-level 🤤",
      tag: "Food"
    },
    {
      id: 3,
      user: "James",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922511.png",
      title: "Paris Night Walk",
      text: "Eiffel Tower looks magical at night ✨",
      tag: "Culture"
    }
  ];

  const filtered = posts.filter(
    p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.text.toLowerCase().includes(search.toLowerCase()) ||
      p.user.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h2>GlobalTrotter — Community</h2>

      {/* SEARCH + FILTER */}
      <div style={{ display: "flex", gap: 12 }}>
        <input
          className="input"
          placeholder="Search experiences..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1 }}
        />

        <button className="button">Group By</button>
        <button className="button">Filter</button>
        <button className="button">Sort By</button>
      </div>

      <h3 style={{ marginTop: 20, textAlign: "center" }}>Community Tab</h3>


      {/* POSTS */}
      {filtered.map(post => (
        <div
          key={post.id}
          className="card"
          style={{ display: "flex", gap: 15, marginTop: 15 }}
        >

          {/* AVATAR */}
          <img
            src={post.avatar}
            alt="avatar"
            width="60"
            style={{ borderRadius: "50%", height: 60 }}
          />

          {/* CONTENT */}
          <div>
            <b>{post.user}</b>
            <h3>{post.title}</h3>
            <p>{post.text}</p>

            <button className="button">
              View Details
            </button>
          </div>

        </div>
      ))}

    </div>
  );
}
