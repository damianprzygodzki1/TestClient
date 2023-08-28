import "./App.css";
import React, { useState } from "react";
import { getAllCountriesFiltered } from "./services/api";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    population: "",
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
    const {name, population} = formData;
    e.preventDefault();
    await getAllCountriesFiltered(name, population);
  };

  return (
    <div className="App">
      <div className="business-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Filter by name"
            value={formData.name}
            onChange={handleInputChange}
            className="business-input"
          />
          <input
            type="text"
            name="population"
            placeholder="Filter by population"
            value={formData.population}
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
