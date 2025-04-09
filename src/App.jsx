import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import TrashSchedule from "./pages/TrashSchedule";
import LocateDepot from "./pages/LocateDepot";
import CreateLabels from "./pages/CreateLabels";
import WasteScanner from "./pages/WasteScanner";
import Catalog from "./pages/Catalog";
import WaterBottleCatalogPage from "./pages/WaterBottleCatalogPage";
import CatalogSelect from "./pages/CatalogSelect"
import ItemDetail from "./pages/ItemDetailPage"

import { LoadScript } from "@react-google-maps/api";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; // or VITE_GOOGLE_MAPS_API_KEY if using Vite

function App() {
  return (
    <div>
      {/* Navigation Links */}
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/settings">Settings</Link> | <Link to="/trashSchedule">Trash Schedule</Link> | <Link to="/locateDepot">Locate Depot</Link> | <Link to="/Catalog">Catalog</Link> | <Link to="/createLabels">Create Labels</Link>
      
      </nav> */}

      {/* Define Routes */}
      <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trashSchedule" element={<TrashSchedule />} />
          <Route path="/locateDepot" element={<LocateDepot />} />
          <Route path="/createLabels" element={<CreateLabels />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/waste-scanner" element={<WasteScanner />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/CatalogSelect" element={<CatalogSelect />} />
          <Route path="/waterBottleCatalog" element={<WaterBottleCatalogPage />} />
          <Route path="/catalog/:itemName" element={<ItemDetail />} />
      </Routes>
      </LoadScript>
    </div>
  );
}

export default App;