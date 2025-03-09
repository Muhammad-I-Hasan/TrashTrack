import Navbar from "../components/Navbar";
import "../App.css";
import SearchBar from "../components/SearchBar";
import LocationSelector from "../components/LocationSelector";
import DepotOption from "../components/DepotOption";

export default function LocateDepot() {
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
      <Navbar pageTitle={"Locate Depot"} />
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
            <DepotOption name={'Depot 1'} distance={2}/>
            <DepotOption name={'Depot 2'} distance={5}/>
            <DepotOption name={'Depot 3'} distance={10}/>
            <DepotOption name={'Depot 4'} distance={11}/>
            <DepotOption name={'Depot 5'} distance={25}/>
          </LocationSelector>
        </div>
      </div>
    </div>
  );
}
