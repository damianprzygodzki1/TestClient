import "./App.css";
import React, { useState } from "react";
import { getAllCountriesFiltered } from "./services/api";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    population: "",
    dir: "",
    limit: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    const {name, population, dir, limit} = formData;
    e.preventDefault();
    await getAllCountriesFiltered(name, population, dir, limit);
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
            name="dir"
            placeholder="Direction of sorting"
            value={formData.dir}
            onChange={handleInputChange}
            className="business-input"
          />
          <input
            type="text"
            name="limit"
            placeholder="Limit"
            value={formData.limit}
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
