import React, { useState } from "react";

const ZipCode = ({ onZipCodeSubmit }) => {
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onZipCodeSubmit(zipCode);
  };
  return (
    <>
      <form className="item" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default ZipCode;
