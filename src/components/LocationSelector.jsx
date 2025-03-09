import React from 'react';
import "../App.css";
import LocationOption from './LocationOption';
export default function LocationSelector() {
  return (
    <div>
        <LocationOption name={"Bankview Calgary"}/>
        <LocationOption name={"Marda Loop Calgary"}/>
        <LocationOption name={"South Point Calgary"}/>
        <LocationOption name={"North Point Calgary"}/>
    </div>
  );
}
