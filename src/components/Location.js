import React from "react";

const LocationInfo = ({ location, clearLocation }) => {
  if (!location) {
    return null;
  }

  const { country, state, placeName } = location;
  return (
    <>
      <h2>Location Information</h2>
      <div className="item">
        <p>Country : {country}</p>
        <p>State : {state}</p>
        <p>Place Name : {placeName}</p>
        <button onClick={clearLocation}>Clear</button>
      </div>
    </>
  );
};

export default LocationInfo;
