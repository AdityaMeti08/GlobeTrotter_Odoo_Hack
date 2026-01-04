import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import CreateTrip from "./screens/CreateTrip";
import MyTrips from "./screens/MyTrips";
import ItineraryBuilder from "./screens/ItineraryBuilder";
import ItineraryView from "./screens/ItineraryView";
import CitySearch from "./screens/CitySearch";
import Budget from "./screens/Budget";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
