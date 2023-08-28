import "./App.css";
import React, { useState } from "react";
import { getAllCountries } from "./services/api";

function App() {
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await getAllCountries();
  };

  return (
    <div className="App">
      <div className="business-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="field1"
            placeholder="Field 1"
            value={formData.field1}
            onChange={handleInputChange}
            className="business-input"
          />
          <input
            type="text"
            name="field2"
            placeholder="Field 2"
            value={formData.field2}
            onChange={handleInputChange}
            className="business-input"
          />
          <input
            type="text"
            name="field3"
            placeholder="Field 3"
            value={formData.field3}
            onChange={handleInputChange}
            className="business-input"
          />
          <input
            type="text"
            name="field4"
            placeholder="Field 4"
            value={formData.field4}
            onChange={handleInputChange}
            className="business-input"
          />
          <button type="submit" className="business-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;