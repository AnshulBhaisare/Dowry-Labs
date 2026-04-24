import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    age: "",
    gender: 0,
    marital_status: 0,
    education_level: 3,
    profession_type: 2,
    income: "",
    experience: "",
    residential_properties: 0,
    commercial_properties: 0,
    industrial_properties: 0,
    land_area_sqft: 0,
    vehicle_score: 0,
    city_tier: 2,
    marriage_type: 0
  });

  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value)
    });
  };

  // ✅ VALIDATION
  const validate = () => {
    let err = {};

    if (!formData.age) err.age = "Age is required";
    if (!formData.income) err.income = "Income is required";
    if (!formData.experience) err.experience = "Experience is required";

    if (formData.age < 18) err.age = "Age must be 18+";
    if (formData.income < 0) err.income = "Invalid income";
    if (formData.experience < 0) err.experience = "Invalid experience";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    const payload = {
      ...formData,
      total_properties:
        formData.residential_properties +
        formData.commercial_properties +
        formData.industrial_properties
    };

    try {
      const res = await axios.post("http://127.0.0.1:8000/predict", payload);
      setResult(res.data);
    } catch (err) {
      alert("Backend error");
    }
  };

  return (
    <div className="container">
      <h1>💀 Dowry Labs</h1>
      <p>AI Based Dowry Calculator</p>

      {/* AGE */}
      <label>Age</label>
      <input name="age" type="number" onChange={handleChange} />
      {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}

      {/* GENDER */}
      <label>Gender</label>
      <select name="gender" onChange={handleChange}>
        <option value={0}>Male</option>
        <option value={1}>Female</option>
        <option value={2}>Trans</option>
      </select>

      {/* EDUCATION */}
      <label>Education</label>
      <select name="education_level" onChange={handleChange}>
        <option value={0}>In School</option>
        <option value={1}>High School</option>
        <option value={2}>Diploma</option>
        <option value={3}>Bachelor</option>
        <option value={4}>Master</option>
      </select>

      {/* PROFESSION */}
      <label>Profession</label>
      <select name="profession_type" onChange={handleChange}>
        <option value={0}>Unemployed</option>
        <option value={1}>Student</option>
        <option value={2}>Private Job</option>
        <option value={3}>Government Job</option>
        <option value={4}>Business</option>
      </select>

      {/* INCOME */}
      <label>Monthly Income (₹)</label>
      <input name="income" type="number" onChange={handleChange} />
      {errors.income && <p style={{ color: "red" }}>{errors.income}</p>}

      {/* EXPERIENCE */}
      <label>Experience (Years)</label>
      <input name="experience" type="number" onChange={handleChange} />
      {errors.experience && <p style={{ color: "red" }}>{errors.experience}</p>}

      {/* PROPERTIES */}
      <label>Residential Properties (Count)</label>
      <input name="residential_properties" type="number" onChange={handleChange} />

      <label>Commercial Properties (Count)</label>
      <input name="commercial_properties" type="number" onChange={handleChange} />

      <label>Industrial Properties (Count)</label>
      <input name="industrial_properties" type="number" onChange={handleChange} />

      {/* LAND */}
      <label>Land Area (sqft)</label>
      <input name="land_area_sqft" type="number" onChange={handleChange} />

      {/* VEHICLE */}
      <label>Vehicle</label>
      <select name="vehicle_score" onChange={handleChange}>
        <option value={0}>None</option>
        <option value={1}>Bike</option>
        <option value={2}>Car</option>
        <option value={3}>Both</option>
      </select>

      {/* CITY */}
      <label>City Tier</label>
      <select name="city_tier" onChange={handleChange}>
        <option value={1}>Rural</option>
        <option value={2}>Tier 2</option>
        <option value={3}>Metro</option>
      </select>

      {/* MARRIAGE TYPE */}
      <label>Marriage Type</label>
      <select name="marriage_type" onChange={handleChange}>
        <option value={0}>Same Caste/Religion</option>
        <option value={1}>Intercaste</option>
        <option value={2}>Interreligion</option>
      </select>

      <button onClick={handleSubmit}>Calculate</button>

      {/* RESULT */}
      {result && (
        <div className="result">
          <h3>Result</h3>
          <p>💰 Dowry: ₹{result.dowry_amount}</p>
          <p>💎 Jewellery: ₹{result.jewellery_amount}</p>
          <p>🚗 Vehicle: {result.vehicle_demand}</p>
          <p>📊 Score: {result.demand_score}</p>
        </div>
      )}
    </div>
  );
}

export default App;