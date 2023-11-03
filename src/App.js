import "./App.css";
import "./styles.css";
import ZipCode from "./components/Input";
import LocationInfo from "./components/Location";
import { useState } from "react";

const App = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchLocation = async (zipCode) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.zippopotam.us/in/${zipCode}`);
      if (response.ok) {
        const data = await response.json();
        const info = data.places[0];
        setLocation({
          country: data.country,
          state: info.state,
          placeName: info["place name"],
        });
        setError("");
      } else {
        setError("Location Not Found");
        setLocation(null);
      }
    } catch (err) {
      setError("An Error Occurred");
      setLocation(null);
    } finally {
      setLoading(false);
    }
  };
  const clearLocation = () => {
    setLocation(null);
  };
  return (
    <div className="App ">
      <h2>Zip Code Information App</h2>
      <ZipCode onZipCodeSubmit={fetchLocation} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <LocationInfo location={location} clearLocation={clearLocation} />
    </div>
  );
};
export default App;
