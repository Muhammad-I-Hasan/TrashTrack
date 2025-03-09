import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import TrashSchedule from "./pages/TrashSchedule";

function App() {
  return (
    <div>
      {/* Navigation Links */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/settings">Settings</Link> | <Link to="/trashSchedule">Trash Schedule</Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TrashSchedule" element={<TrashSchedule />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;