import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Regional.css";

function Regional() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const states = [
    {
      name: "Bihar",
      avgDowry: "₹5–15 Lakh",
      riskLevel: "Very High",
      riskClass: "risk-very-high",
      cases: "1,200+",
      desc: "One of the highest dowry demand states. Demands often include cash, gold, and vehicles.",
      factors: ["Strong caste influence", "Low women's education", "Rural dominance"],
    },
    {
      name: "Uttar Pradesh",
      avgDowry: "₹3–12 Lakh",
      riskLevel: "Very High",
      riskClass: "risk-very-high",
      cases: "2,500+",
      desc: "Highest number of dowry deaths in India. Demands vary by region and caste.",
      factors: ["Large population", "Deep-rooted customs", "Poor law enforcement"],
    },
    {
      name: "Punjab",
      avgDowry: "₹10–30 Lakh",
      riskLevel: "High",
      riskClass: "risk-high",
      cases: "600+",
      desc: "One of the highest average dowry amounts due to cultural expectations of lavish weddings.",
      factors: ["Wealthy families", "Social status focus", "NRI factor"],
    },
    {
      name: "Rajasthan",
      avgDowry: "₹5–20 Lakh",
      riskLevel: "High",
      riskClass: "risk-high",
      cases: "800+",
      desc: "Traditional customs and feudal mindset contribute to high dowry demands.",
      factors: ["Feudal traditions", "Child marriage", "Low female literacy"],
    },
    {
      name: "Madhya Pradesh",
      avgDowry: "₹3–10 Lakh",
      riskLevel: "High",
      riskClass: "risk-high",
      cases: "900+",
      desc: "Dowry demands are prevalent across both urban and rural areas.",
      factors: ["Tribal customs", "Low awareness", "Economic disparity"],
    },
    {
      name: "Haryana",
      avgDowry: "₹8–25 Lakh",
      riskLevel: "High",
      riskClass: "risk-high",
      cases: "500+",
      desc: "Skewed sex ratio and patriarchal mindset make dowry demands very common.",
      factors: ["Gender imbalance", "Khap influence", "Agricultural wealth"],
    },
    {
      name: "West Bengal",
      avgDowry: "₹2–8 Lakh",
      riskLevel: "Medium",
      riskClass: "risk-medium",
      cases: "400+",
      desc: "Dowry is less common in some communities but still prevalent in many.",
      factors: ["Mixed cultures", "Urban-rural divide", "Education impact"],
    },
    {
      name: "Kerala",
      avgDowry: "₹5–20 Lakh",
      riskLevel: "Medium",
      riskClass: "risk-medium",
      cases: "300+",
      desc: "Despite high literacy, dowry is still practiced especially among certain communities.",
      factors: ["Community norms", "High education", "Gold tradition"],
    },
  ];

  return (
    <div className="regional-page">

      {/* HERO */}
      <section className="regional-hero">
        <div className="regional-hero-overlay">
          <h1>Regional Dowry Insights</h1>
          <p>
            Dowry demands vary drastically across Indian states. Explore the data
            to understand regional patterns and risk levels.
          </p>
        </div>
      </section>

      {/* OVERVIEW STATS */}
      <section className="regional-overview">
        <div className="overview-card">
          <h3>28+</h3>
          <p>States Analyzed</p>
        </div>
        <div className="overview-card">
          <h3>₹2L–30L</h3>
          <p>Average Demand Range</p>
        </div>
        <div className="overview-card">
          <h3>8,618</h3>
          <p>Annual Dowry Deaths</p>
        </div>
        <div className="overview-card">
          <h3>80%</h3>
          <p>Marriages Involve Dowry</p>
        </div>
      </section>

      {/* STATE CARDS */}
      <section className="regional-states">
        <div className="regional-container">
          <h2>State-Wise Breakdown</h2>
          <div className="states-grid">
            {states.map((state, i) => (
              <div className="state-detail-card" key={i}>
                <div className="state-card-header">
                  <h3>{state.name}</h3>
                  <span className={`risk-badge ${state.riskClass}`}>
                    {state.riskLevel}
                  </span>
                </div>
                <div className="state-metrics">
                  <div className="state-metric">
                    <span className="metric-label">Avg Dowry</span>
                    <span className="metric-value">{state.avgDowry}</span>
                  </div>
                  <div className="state-metric">
                    <span className="metric-label">Annual Cases</span>
                    <span className="metric-value">{state.cases}</span>
                  </div>
                </div>
                <p className="state-desc">{state.desc}</p>
                <div className="state-factors">
                  {state.factors.map((f, j) => (
                    <span className="factor-tag" key={j}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="regional-cta">
        <h2>Want to See Your Estimated Dowry Demand?</h2>
        <p>Use our AI calculator to understand potential demands based on your profile.</p>
        <div className="regional-cta-buttons">
          <Link to="/calculator" className="primary-btn">Try the Calculator</Link>
          <Link to="/laws" className="secondary-btn">Know Your Rights</Link>
        </div>
      </section>

    </div>
  );
}

export default Regional;
