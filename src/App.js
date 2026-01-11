
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;




import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import CreateTrip from "./screens/CreateTrip";
import MyTrips from "./screens/MyTrips.js";
import ItineraryBuilder from "./screens/ItineraryBuilder";
import ItineraryView from "./screens/ItineraryView";
import CitySearch from "./screens/CitySearch"
import Register from "./screens/Register";
import Budget from "./screens/Budget";
import Profile from "./screens/Profile";
import Search from "./screens/Search";
import Community from "./screens/Community";
import CalendarView from "./screens/CalendarView";
import AdminPanel from "./screens/AdminPanel";







function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/trip/:id/build" element={<ItineraryBuilder />} />
        <Route path="/trip/:id/view" element={<ItineraryView />} />
        <Route path="/search/city" element={<CitySearch />} />
        <Route path="/trip/:id/budget" element={<Budget />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/community" element={<Community />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/admin" element={<AdminPanel />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
