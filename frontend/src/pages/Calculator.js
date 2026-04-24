import React, { useState } from "react";
import axios from "axios";
import "./Calculator.css";

function Calculator() {
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState("groom");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    age: "",
    profession_type: 2,
    education_level: 3,
    income: "",
    city_tier: 2,
    marital_status: 0,
    residential_properties: 0,
    commercial_properties: 0,
    industrial_properties: 0,
    land_area_sqft: 0,
    vehicle_score: 0,
    marriage_type: 0
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value === "" ? "" : Number(e.target.value)
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // ✅ FIXED VALIDATION (allows 0)
  const validateStep1 = () => {
    if (formData.age === "" || formData.income === "") {
      alert("Please fill all required fields");
      return false;
    }
    return true;
  };

  const handlePredict = async () => {
    const payload = {
      ...formData,
      total_properties:
        formData.residential_properties +
        formData.commercial_properties +
        formData.industrial_properties
    };

    try {
      setLoading(true);
      const res = await axios.post("http://127.0.0.1:8000/predict", payload);
      setResult(res.data);
      setLoading(false);
      setStep(4);
    } catch (err) {
      alert("Backend error");
      setLoading(false);
    }
  };

  return (
    <div className="calculator">

      <h1>Dowry Calculator</h1>

      {/* MODE TOGGLE */}
      <div className="mode-toggle">
        <button
          className={mode === "groom" ? "active" : ""}
          onClick={() => setMode("groom")}
        >
          👨 For Groom
        </button>

        <button
          className={mode === "bride" ? "active" : ""}
          onClick={() => setMode("bride")}
        >
          👰 For Bride
        </button>
      </div>

      {/* STEP INDICATOR */}
      <div className="steps">
        {[1, 2, 3, 4, 5].map((s) => (
          <div key={s} className={step >= s ? "step active" : "step"}>
            {s}
          </div>
        ))}
      </div>

      <div className="card">

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2>Personal Information</h2>

            <div className="grid">

              <div className="field">
                <label>Age</label>
                <input
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label>Profession</label>
                <select name="profession_type" value={formData.profession_type} onChange={handleChange}>
                  <option value={0}>Unemployed</option>
                  <option value={1}>Student</option>
                  <option value={2}>Private Job</option>
                  <option value={3}>Government Job</option>
                  <option value={4}>Business</option>
                </select>
              </div>

              <div className="field">
                <label>Education</label>
                <select name="education_level" value={formData.education_level} onChange={handleChange}>
                  <option value={0}>In School</option>
                  <option value={1}>High School</option>
                  <option value={2}>Diploma</option>
                  <option value={3}>Bachelor</option>
                  <option value={4}>Master</option>
                </select>
              </div>

              <div className="field">
                <label>Monthly Income (₹)</label>
                <input
                  name="income"
                  type="number"
                  value={formData.income}
                  onChange={handleChange}
                />
              </div>

              <div className="field">
                <label>City Tier</label>
                <select name="city_tier" value={formData.city_tier} onChange={handleChange}>
                  <option value={1}>Rural</option>
                  <option value={2}>Tier 2</option>
                  <option value={3}>Metro</option>
                </select>
              </div>

              <div className="field">
                <label>Marital Status</label>
                <select name="marital_status" value={formData.marital_status} onChange={handleChange}>
                  <option value={0}>Single</option>
                  <option value={1}>Married</option>
                  <option value={2}>Divorced</option>
                </select>
              </div>

            </div>

            <div className="btn-group">
              <button className="primary-btn" onClick={() => validateStep1() && nextStep()}>
                Next →
              </button>
            </div>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <h2>Assets</h2>

            <div className="grid">

              <input name="residential_properties" type="number" value={formData.residential_properties} onChange={handleChange}/>
              <input name="commercial_properties" type="number" value={formData.commercial_properties} onChange={handleChange}/>
              <input name="industrial_properties" type="number" value={formData.industrial_properties} onChange={handleChange}/>
              <input name="land_area_sqft" type="number" value={formData.land_area_sqft} onChange={handleChange}/>

              <select name="vehicle_score" value={formData.vehicle_score} onChange={handleChange}>
                <option value={0}>None</option>
                <option value={1}>Bike</option>
                <option value={2}>Car</option>
                <option value={3}>Both</option>
              </select>

            </div>

            <div className="btn-group">
              <button className="secondary-btn" onClick={prevStep}>← Back</button>
              <button className="primary-btn" onClick={nextStep}>Next →</button>
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2>Final Step</h2>

            <select name="marriage_type" value={formData.marriage_type} onChange={handleChange}>
              <option value={0}>Same</option>
              <option value={1}>Intercaste</option>
              <option value={2}>Interreligion</option>
            </select>

            <div className="btn-group">
              <button className="secondary-btn" onClick={prevStep}>← Back</button>
              <button className="primary-btn" onClick={handlePredict}>
                {loading ? "Calculating..." : "Generate 🚀"}
              </button>
            </div>
          </>
        )}

        {/* STEP 4 */}
        {step === 4 && result && (
          <>
            <h2>AI Result</h2>

            <div className="result-grid">
              <div className="result-card high">
                <h3>💰 Dowry</h3>
                <p>₹{result.dowry_amount}</p>
              </div>

              <div className="result-card">
                <h3>💎 Jewellery</h3>
                <p>₹{result.jewellery_amount}</p>
              </div>

              <div className="result-card">
                <h3>🚗 Vehicle</h3>
                <p>{result.vehicle_demand}</p>
              </div>

              <div className="result-card score">
                <h3>📊 Score</h3>
                <p>{result.demand_score}</p>
              </div>
            </div>

            <button className="primary-btn" onClick={nextStep}>Next →</button>
          </>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <>
            <h2>Feedback</h2>

            <div className="btn-group">
              <button className="primary-btn">👍 Agree</button>
              <button className="secondary-btn">👎 Disagree</button>
            </div>

            <textarea placeholder="Optional feedback..." />
          </>
        )}

      </div>
    </div>
  );
}

export default Calculator;