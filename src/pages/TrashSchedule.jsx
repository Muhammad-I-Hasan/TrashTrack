import Navbar from "../components/Navbar";
import "../App.css";
import SearchBar from "../components/SearchBar";
import LocationSelector from "../components/LocationSelector";
import LocationOption from "../components/LocationOption";
import mapImage from "../images/map.jpg"; // Adjust the path as needed
import { Button } from "@mui/material";

export default function TrashSchedule() {
  return (
    <div
      className="page"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Navbar pageTitle={"Trash Schedule"} />
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Search Bar and Button positioned the same */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",  // explicitly set to row
            alignItems: "center",  // vertically centers both items
            justifyContent: "center",
            gap: "10px",         // optional spacing between the search bar and button
            marginTop: "1rem"
          }}
        >
          <SearchBar />
          <Button>Edit Alerts</Button>
        </div>

        <div
          className="tsMap"
          style={{
            height: "35vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img 
            src={mapImage} 
            alt="Trash Schedule Map" 
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover", 
              borderRadius: "10px", 
              border: "1px solid #ccc" 
            }} 
          />
        </div>
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            paddingBottom: "5rem"  // Add extra bottom padding
          }}
        >
          <LocationSelector>
            <LocationOption name={"Bankview Calgary"}/>
            <LocationOption name={"Marda Loop Calgary"}/>
            <LocationOption name={"South Point Calgary"}/>
            <LocationOption name={"North Point Calgary"}/>
            <LocationOption name={"Marda Loop Calgary"}/>
            <LocationOption name={"South Point Calgary"}/>
            <LocationOption name={"North Point Calgary"}/>
          </LocationSelector>
        </div>
      </div>
    </div>
  );
}
