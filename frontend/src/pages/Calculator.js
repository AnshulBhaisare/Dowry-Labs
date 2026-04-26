import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "./Calculator.css";

function Calculator() {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState("groom"); // groom or bride

  useEffect(() => {
    if (location.state && location.state.mode) {
      setMode(location.state.mode);
    }
  }, [location.state]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  
  const [feedbackType, setFeedbackType] = useState(null); // 'pos' or 'neg'
  const [comment, setComment] = useState("");

  const [formData, setFormData] = useState({
    age: "",
    experience: "",
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step, feedbackSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value === "" ? "" : Number(value)
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const validateStep1 = () => {
    if (formData.age === "" || formData.age < 18 || formData.age > 100) {
      alert("Please enter a valid age (18-100)");
      return false;
    }
    if (formData.income === "" || formData.income < 0) {
      alert("Please enter a valid monthly income");
      return false;
    }
    if (formData.experience === "" || formData.experience < 0 || formData.experience > formData.age - 15) {
      alert("Please enter valid years of experience");
      return false;
    }
    return true;
  };

  const handlePredict = async () => {
    const payload = {
      ...formData,
      gender: 0, // In this model, we always calculate based on the Groom's attributes
      total_properties:
        formData.residential_properties +
        formData.commercial_properties +
        formData.industrial_properties
    };

    try {
      setLoading(true);
      setError(null);
      const res = await axios.post("http://127.0.0.1:8000/predict", payload);
      setResult(res.data);
      setLoading(false);
      setStep(4);
    } catch (err) {
      console.error(err);
      setError("Unable to connect to the prediction server. Please try again later.");
      setLoading(false);
    }
  };

  const submitFeedback = async () => {
    if (!feedbackType) {
      alert("Please select if the estimation was accurate or inaccurate.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://127.0.0.1:8000/feedback", {
        type: feedbackType,
        comment: comment,
        mode: mode
      });
      setFeedbackSubmitted(true);
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("There was an error sending your feedback. Please try again.");
      setLoading(false);
    }
  };

  const resetCalculator = () => {
    setStep(1);
    setResult(null);
    setFeedbackSubmitted(false);
    setFeedbackType(null);
    setComment("");
    setFormData({
      age: "",
      experience: "",
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
  };

  const getScoreColor = (score) => {
    if (score < 40) return "#16a34a"; // Green
    if (score < 70) return "#f59e0b"; // Orange
    return "#dc2626"; // Red
  };

  const getVehicleLabel = (val) => {
    if (val === 0) return "No vehicle expected";
    if (val === 1) return "Mid-range car / SUV";
    if (val === 2) return "Luxury Sedan / Luxury SUV";
    return "Not specified";
  };

  return (
    <div className="calculator-container">
      <div className="calc-header">
        <h1>AI Dowry Estimator</h1>
        <p>Using advanced AI to analyze socio-economic factors for awareness.</p>
      </div>

      {/* MODE TOGGLE */}
      {step < 4 && !feedbackSubmitted && (
        <div className="calc-mode-selector-wrapper">
          <p className="selector-label">Whose profile are you analyzing?</p>
          <div className="calc-mode-selector">
            <button
              className={mode === "groom" ? "active" : ""}
              onClick={() => setMode("groom")}
            >
              <span className="icon">👨</span> I am Groom
              <small>(Analyze My Profile)</small>
            </button>

            <button
              className={mode === "bride" ? "active" : ""}
              onClick={() => setMode("bride")}
            >
              <span className="icon">👰</span> I am Bride
              <small>(Analyze Prospective Groom)</small>
            </button>
          </div>
        </div>
      )}

      {/* PROGRESS TRACKER */}
      {!feedbackSubmitted && (
        <div className="progress-bar">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className={`progress-step ${step >= s ? "active" : ""} ${step > s ? "completed" : ""}`}>
              <div className="step-circle">{step > s ? "✓" : s}</div>
              <span className="step-label">
                {s === 1 && "Personal"}
                {s === 2 && "Assets"}
                {s === 3 && "Finalize"}
                {s === 4 && "Result"}
                {s === 5 && "Feedback"}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="calc-card">
        {error && <div className="error-message">{error}</div>}

        {/* THANK YOU VIEW */}
        {feedbackSubmitted ? (
          <div className="step-content thank-you-content">
            <div className="thank-you-header">
              <img src="/assets/thank_you.png" alt="Success" className="thank-you-image" />
              <h2>Your voice matters!</h2>
              <p>Thank you for your feedback. We've received your input and will use it to refine our estimation algorithms.</p>
            </div>

            <div className="next-steps">
              <h3>Continue Your Journey</h3>
              <div className="next-steps-grid">
                <Link to="/learn" className="next-step-card">
                  <span className="step-icon">📖</span>
                  <h4>Educational Guide</h4>
                  <p>Learn about the socio-economic factors of dowry.</p>
                </Link>
                <Link to="/regional" className="next-step-card">
                  <span className="step-icon">📊</span>
                  <h4>Regional Data</h4>
                  <p>Explore dowry trends across different states.</p>
                </Link>
                <Link to="/laws" className="next-step-card">
                  <span className="step-icon">⚖️</span>
                  <h4>Legal Rights</h4>
                  <p>Understand the protections offered by Indian law.</p>
                </Link>
              </div>
            </div>

            <div className="calc-footer center">
              <button className="reset-btn" onClick={resetCalculator}>Start New Calculation</button>
            </div>
          </div>
        ) : (
          <>
            {/* STEP 1: PERSONAL INFO */}
            {step === 1 && (
              <div className="step-content">
                <div className="step-title">
                  <h2>Step 1: {mode === 'groom' ? "Your" : "Groom's"} Career Profile</h2>
                  <p>{mode === 'groom' ? "Tell us about your professional background." : "Tell us about the prospective groom's professional background."}</p>
                </div>

                <div className="input-grid">
                  <div className="input-field">
                    <label>Age (Years) <span>*</span></label>
                    <input name="age" type="number" placeholder="e.g. 28" value={formData.age} onChange={handleChange} />
                  </div>
                  <div className="input-field">
                    <label>Years of Experience <span>*</span></label>
                    <input name="experience" type="number" placeholder="e.g. 5" value={formData.experience} onChange={handleChange} />
                  </div>
                  <div className="input-field">
                    <label>Current Profession <span>*</span></label>
                    <select name="profession_type" value={formData.profession_type} onChange={handleChange}>
                      <option value={0}>Unemployed</option>
                      <option value={1}>Student</option>
                      <option value={2}>Private Sector Job</option>
                      <option value={3}>Government Sector Job</option>
                      <option value={4}>Self-Employed / Business</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label>Monthly Income (₹) <span>*</span></label>
                    <input name="income" type="number" placeholder="e.g. 50000" value={formData.income} onChange={handleChange} />
                  </div>
                  <div className="input-field">
                    <label>Highest Qualification <span>*</span></label>
                    <select name="education_level" value={formData.education_level} onChange={handleChange}>
                      <option value={0}>High School</option>
                      <option value={1}>12th Pass</option>
                      <option value={2}>Diploma</option>
                      <option value={3}>Bachelor's Degree</option>
                      <option value={4}>Master's or Higher</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label>City Category</label>
                    <select name="city_tier" value={formData.city_tier} onChange={handleChange}>
                      <option value={1}>Rural / Small Town</option>
                      <option value={2}>Tier 2 City</option>
                      <option value={3}>Metropolitan City</option>
                    </select>
                  </div>
                  <div className="input-field full-width">
                    <label>Current Marital Status</label>
                    <select name="marital_status" value={formData.marital_status} onChange={handleChange}>
                      <option value={0}>Never Married</option>
                      <option value={1}>Widowed</option>
                      <option value={2}>Divorced</option>
                    </select>
                  </div>
                </div>

                <div className="calc-footer">
                  <button className="next-btn" onClick={() => validateStep1() && nextStep()}>
                    Next: {mode === 'groom' ? "Your" : "Groom's"} Assets →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: ASSETS */}
            {step === 2 && (
              <div className="step-content">
                <div className="step-title">
                  <h2>Step 2: {mode === 'groom' ? "Your" : "Groom's"} Property & Assets</h2>
                  <p>Estimated market value or quantity of assets owned.</p>
                </div>
                <div className="input-grid">
                  <div className="input-field">
                    <label>Residential Properties</label>
                    <input name="residential_properties" type="number" value={formData.residential_properties} onChange={handleChange} placeholder="0" />
                  </div>
                  <div className="input-field">
                    <label>Commercial Properties</label>
                    <input name="commercial_properties" type="number" value={formData.commercial_properties} onChange={handleChange} placeholder="0" />
                  </div>
                  <div className="input-field">
                    <label>Industrial Properties</label>
                    <input name="industrial_properties" type="number" value={formData.industrial_properties} onChange={handleChange} placeholder="0" />
                  </div>
                  <div className="input-field">
                    <label>Land Area (Sq. Ft)</label>
                    <input name="land_area_sqft" type="number" value={formData.land_area_sqft} onChange={handleChange} placeholder="0" />
                  </div>
                  <div className="input-field full-width">
                    <label>Automobiles Owned</label>
                    <select name="vehicle_score" value={formData.vehicle_score} onChange={handleChange}>
                      <option value={0}>None</option>
                      <option value={1}>Two-Wheeler</option>
                      <option value={2}>Single Car</option>
                      <option value={3}>Multiple/Luxury</option>
                    </select>
                  </div>
                </div>
                <div className="calc-footer split">
                  <button className="back-btn" onClick={prevStep}>← Back</button>
                  <button className="next-btn" onClick={nextStep}>Finalize Details →</button>
                </div>
              </div>
            )}

            {/* STEP 3: FINALIZE */}
            {step === 3 && (
              <div className="step-content">
                <div className="step-title">
                  <h2>Step 3: Final Context</h2>
                  <p>Social factors that influence traditional expectations.</p>
                </div>
                <div className="input-field">
                  <label>Proposed Marriage Arrangement</label>
                  <select name="marriage_type" value={formData.marriage_type} onChange={handleChange}>
                    <option value={0}>Same Community</option>
                    <option value={1}>Inter-caste</option>
                    <option value={2}>Inter-religion</option>
                  </select>
                </div>
                <div className="calc-footer split">
                  <button className="back-btn" onClick={prevStep}>← Back</button>
                  <button className="next-btn highlight" onClick={handlePredict} disabled={loading}>
                    {loading ? "Analyzing..." : "Generate AI Prediction 🚀"}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: RESULT */}
            {step === 4 && result && (
              <div className="step-content result-content">
                <div className="result-header">
                  <div className="badge">AI Estimation Ready</div>
                  <h2>{mode === 'groom' ? "Your" : "Groom's"} Estimation Result</h2>
                  <p>Based on the {mode === 'groom' ? "provided details" : "groom's profile"}, here is the estimated breakdown.</p>
                </div>
                <div className="result-summary">
                  <div className="main-stat">
                    <h3>₹ {result.dowry_amount?.toLocaleString('en-IN')}</h3>
                    <span>Total Estimated Demand</span>
                  </div>
                  <div className="score-meter">
                    <div className="meter-label">Demand Intensity Score</div>
                    <div className="meter-bg">
                      <div className="meter-fill" style={{ width: `${result.demand_score}%`, backgroundColor: getScoreColor(result.demand_score) }}></div>
                    </div>
                    <div className="meter-value" style={{ color: getScoreColor(result.demand_score) }}>{result.demand_score}% Intensity</div>
                  </div>
                </div>
                <div className="result-details">
                  <div className="detail-item"><span className="detail-icon">💍</span><div className="detail-info"><label>Jewellery Component</label><strong>₹ {result.jewellery_amount?.toLocaleString('en-IN')}</strong></div></div>
                  <div className="detail-item"><span className="detail-icon">🚗</span><div className="detail-info"><label>Vehicle Expectation</label><strong>{getVehicleLabel(result.vehicle_demand)}</strong></div></div>
                </div>
                <div className="calc-footer split">
                  <button className="back-btn" onClick={prevStep}>← Adjust Data</button>
                  <button className="next-btn" onClick={nextStep}>Give Feedback →</button>
                </div>
              </div>
            )}

            {/* STEP 5: FEEDBACK */}
            {step === 5 && (
              <div className="step-content">
                <div className="step-title"><h2>Step 5: Your Feedback</h2><p>Was this estimation accurate based on your knowledge?</p></div>
                <div className="feedback-options">
                  <button className={`feedback-btn pos ${feedbackType === 'pos' ? 'selected' : ''}`} onClick={() => setFeedbackType('pos')}>👍 Accurate</button>
                  <button className={`feedback-btn neg ${feedbackType === 'neg' ? 'selected' : ''}`} onClick={() => setFeedbackType('neg')}>👎 Inaccurate</button>
                </div>
                <div className="input-field" style={{ marginTop: "20px" }}>
                  <label>Comments</label>
                  <textarea placeholder="Your thoughts..." value={comment} onChange={(e) => setComment(e.target.value)} style={{ minHeight: "100px", padding: "10px", borderRadius: "10px", border: "1px solid #e2e8f0" }} />
                </div>
                <div className="calc-footer split">
                  <button className="back-btn" onClick={prevStep}>← Back</button>
                  <button className="next-btn highlight" onClick={submitFeedback} disabled={loading}>
                    {loading ? "Sending..." : "Submit Feedback"}
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Calculator;