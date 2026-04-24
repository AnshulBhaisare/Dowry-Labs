import React, { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    age: "",
    gender: 0,
    marital_status: 0,
    education_level: 3,
    profession_type: 2,
    income: "",
    experience: "",
    total_properties: 0,
    residential_properties: 0,
    commercial_properties: 0,
    industrial_properties: 0,
    land_area_sqft: 0,
    vehicle_score: 0,
    city_tier: 2,
    marriage_type: 0
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value)
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/predict", formData);
      setResult(res.data);
    } catch (err) {
      alert("Error connecting to backend");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>💀 Dowry Labs</h1>
      <h3>AI Based Dowry Calculator</h3>

      <input name="age" placeholder="Age" onChange={handleChange} /><br /><br />
      <input name="income" placeholder="Income" onChange={handleChange} /><br /><br />
      <input name="experience" placeholder="Experience" onChange={handleChange} /><br /><br />
      <input name="total_properties" placeholder="Total Properties" onChange={handleChange} /><br /><br />

      <button onClick={handleSubmit}>Calculate</button>

      {result && (
        <div>
          <h2>Result</h2>
          <p>Dowry: ₹{result.dowry_amount}</p>
          <p>Jewellery: ₹{result.jewellery_amount}</p>
          <p>Vehicle Demand: {result.vehicle_demand}</p>
          <p>Demand Score: {result.demand_score}</p>
        </div>
      )}
    </div>
  );
}

export default App;