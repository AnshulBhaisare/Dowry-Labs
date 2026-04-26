import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleNavigate = (path, state = {}) => {
    navigate(path, { state });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="home">

      {/* ⚠️ DISCLAIMER BAR */}
      <div className="disclaimer">
        ⚠️ Dowry is illegal in India under the Dowry Prohibition Act, 1961.
        This calculator is for educational awareness only.
      </div>

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-left">
          <h1>
            Understand. Calculate.
            <br />
            <span>Make A Change.</span>
          </h1>

          <p>
            AI-powered dowry calculator that estimates demand based on
            real-world social, financial and regional factors.
          </p>

          <div className="hero-buttons">
            <Link to="/calculator" className="primary-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Start Calculation
            </Link>
            <Link to="/laws" className="secondary-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Know Your Rights
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="/assets/hero_scales.png"
            alt="Justice Shield"
          />
        </div>

      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-card">₹2–10L <span>Avg Dowry</span></div>
        <div className="stat-card">80% <span>Marriages Involve Dowry</span></div>
        <div className="stat-card">8,618 <span>Dowry Deaths</span></div>
        <div className="stat-card">5 yrs <span>Max Prison</span></div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Explore More</h2>

        <div className="feature-grid">

          <div className="feature-card" onClick={() => handleNavigate("/calculator")}>
            <span className="feature-icon">🧮</span>
            <h3>Calculator</h3>
            <p>Estimate dowry using AI model.</p>
            <span className="feature-arrow">→</span>
          </div>

          <div className="feature-card" onClick={() => handleNavigate("/calculator", { mode: "groom" })}>
            <span className="feature-icon">👨</span>
            <h3>For Groom</h3>
            <p>See demand trends based on profession.</p>
            <span className="feature-arrow">→</span>
          </div>

          <div className="feature-card" onClick={() => handleNavigate("/calculator", { mode: "bride" })}>
            <span className="feature-icon">👰</span>
            <h3>For Bride</h3>
            <p>Understand financial burden.</p>
            <span className="feature-arrow">→</span>
          </div>

          <div className="feature-card" onClick={() => handleNavigate("/regional")}>
            <span className="feature-icon">🗺️</span>
            <h3>Regional Data</h3>
            <p>Explore trends across states.</p>
            <span className="feature-arrow">→</span>
          </div>

          <div className="feature-card" onClick={() => handleNavigate("/laws")}>
            <span className="feature-icon">⚖️</span>
            <h3>Laws</h3>
            <p>Know your legal rights.</p>
            <span className="feature-arrow">→</span>
          </div>

          <div className="feature-card" onClick={() => handleNavigate("/resources")}>
            <span className="feature-icon">📚</span>
            <h3>Resources</h3>
            <p>Helplines and support.</p>
            <span className="feature-arrow">→</span>
          </div>

        </div>
      </section>

      {/* CALCULATOR PREVIEW */}
      <section className="preview">
        <div className="preview-left">
          <h2>Advanced AI Analysis</h2>
          <p>
            Our deep learning models process socio-economic markers to provide 
            unbiased clarity on traditional demands and their impacts.
          </p>

          <ul>
            <li>✔ Deep Feature Processing</li>
            <li>✔ Regional Data Alignment</li>
            <li>✔ Social Evil Awareness</li>
          </ul>
        </div>

        <div className="preview-right">
          <img src="/assets/preview_ai.png" alt="Regional Data Map" className="preview-image" />
        </div>
      </section>

      <section className="story">
        <div className="story-left">
          <img
            src="/assets/story_book.png"
            alt="The Story of Dowry"
            className="story-image"
          />
        </div>

        <div className="story-right">
          <h2>The Story Behind The Dowry System</h2>
          <p>
            Dowry is not just a tradition—it is a social evil that has
            impacted millions of lives. Understand its history and impact.
          </p>

          <Link to="/learn" className="secondary-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Read More
          </Link>
        </div>
      </section>

      {/* EQUILIBRIUM SECTION */}
      <section className="equilibrium">
        <div className="equilibrium-container">
          <div className="equilibrium-text">
            <h2>Marriage Equilibrium</h2>
            <p>
              We believe in a future where marriage is built on mutual respect, 
              shared dreams, and true equality. Our mission is to tip the scales 
              away from regressive traditions and towards a balanced, fair society.
            </p>
            <div className="equilibrium-quote">
              "Equality is not just a right, it's the foundation of a happy marriage."
            </div>
          </div>
          <div className="equilibrium-visual">
            <img src="/assets/equilibrium.png" alt="Marriage Equilibrium" />
          </div>
        </div>
      </section>


      {/* STATES */}
      <section className="states">
        <h2>Dowry Insights by State</h2>

        <div className="state-grid">
          <div className="state-card" onClick={() => handleNavigate("/regional")}>Bihar</div>
          <div className="state-card" onClick={() => handleNavigate("/regional")}>Uttar Pradesh</div>
          <div className="state-card" onClick={() => handleNavigate("/regional")}>Punjab</div>
          <div className="state-card" onClick={() => handleNavigate("/regional")}>Rajasthan</div>
        </div>
      </section>

      {/* HELP */}
      <section className="help">
        <h2>Need Help?</h2>

        <div className="help-grid">
          <div className="help-card" onClick={() => handleNavigate("/resources")}>
            <span className="help-number">1091</span>
            <span className="help-label">Women Helpline</span>
          </div>
          <div className="help-card" onClick={() => handleNavigate("/resources")}>
            <span className="help-number">181</span>
            <span className="help-label">Women Helpline</span>
          </div>
          <div className="help-card" onClick={() => handleNavigate("/resources")}>
            <span className="help-number">100</span>
            <span className="help-label">Police Emergency</span>
          </div>
          <div className="help-card" onClick={() => handleNavigate("/resources")}>
            <span className="help-number">1098</span>
            <span className="help-label">Child Helpline</span>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;