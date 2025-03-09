import Navbar from "../components/Navbar";
import "../App.css";
import SearchBar from "../components/SearchBar";
import LocationSelector from "../components/LocationSelector";
import LocationOption from "../components/LocationOption";

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
        <SearchBar />
        <div
          className="tsMap"
          style={{
            height: "35vh",
          }}
        >
          map goes here
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
