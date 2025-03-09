import Navbar from "../components/Navbar";
import "../App.css";
import SearchBar from "../components/SearchBar";
import LocationSelector from "../components/LocationSelector";

export default function TrashSchedule() {
    return (
      <div className="page">
        <Navbar pageTitle={"Trash Schedule"}/>
        <div className="content">
            <SearchBar />
            <div className="tsMap">
                map goes Header
            </div>
            <LocationSelector />
        </div>
        

      </div>
    );
  }