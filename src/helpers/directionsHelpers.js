// distanceHelpers.js
export async function getDistanceMatrixDistance(origin, destination, apiKey) {
  const originsParam = `${origin.lat},${origin.lng}`;
  const destinationsParam = `${destination.lat},${destination.lng}`;
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${originsParam}&destinations=${destinationsParam}&key=${apiKey}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    // Check if the API call was successful and a route was found
    if (
      data.rows &&
      data.rows[0] &&
      data.rows[0].elements &&
      data.rows[0].elements[0].status === "OK"
    ) {
      // distance.value is in meters; convert to kilometers
      const km = data.rows[0].elements[0].distance.value / 1000;
      // Optionally, you can round to 2 decimals:
      return km.toFixed(2);
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching distance matrix:", error);
    return null;
  }
}
