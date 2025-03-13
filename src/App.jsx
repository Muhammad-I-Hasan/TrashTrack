import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import TrashSchedule from "./pages/TrashSchedule";
import LocateDepot from "./pages/LocateDepot";
import CreateLabels from "./pages/CreateLabels";
import WasteScanner from "./pages/WasteScanner";

function App() {
  return (
    <div>
      {/* Navigation Links */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/settings">Settings</Link> | <Link to="/trashSchedule">Trash Schedule</Link> | <Link to="/locateDepot">Locate Depot</Link> | <Link to="/createLabels">Create Labels</Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trashSchedule" element={<TrashSchedule />} />
        <Route path="/locateDepot" element={<LocateDepot />} />
        <Route path="/createLabels" element={<CreateLabels />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/waste-scanner" element={<WasteScanner />} />
      </Routes>
    </div>
  );
}

export default App;