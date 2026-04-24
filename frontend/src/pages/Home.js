import React from "react";
import "./Home.css";

function Home() {
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
            <button className="primary-btn">Start Calculation</button>
            <button className="secondary-btn">Know Your Rights</button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="illustration"
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

          <div className="feature-card">
            <h3>Calculator</h3>
            <p>Estimate dowry using AI model.</p>
          </div>

          <div className="feature-card">
            <h3>For Groom</h3>
            <p>See demand trends based on profession.</p>
          </div>

          <div className="feature-card">
            <h3>For Bride</h3>
            <p>Understand financial burden.</p>
          </div>

          <div className="feature-card">
            <h3>Regional Data</h3>
            <p>Explore trends across states.</p>
          </div>

          <div className="feature-card">
            <h3>Laws</h3>
            <p>Know your legal rights.</p>
          </div>

          <div className="feature-card">
            <h3>Resources</h3>
            <p>Helplines and support.</p>
          </div>

        </div>
      </section>

      {/* CALCULATOR PREVIEW */}
      <section className="preview">
        <div className="preview-left">
          <h2>Dowry Calculator</h2>
          <p>
            Our AI model analyzes multiple social and financial factors
            to estimate dowry demand.
          </p>

          <ul>
            <li>✔ AI Powered</li>
            <li>✔ Real Data</li>
            <li>✔ Educational Use</li>
          </ul>
        </div>

        <div className="preview-right">
          <div className="mock-card">
            <p>Step 1 of 5</p>
            <p>Personal Information</p>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="story">
        <div className="story-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2910/2910791.png"
            alt="story"
          />
        </div>

        <div className="story-right">
          <h2>The Story Behind The Dowry System</h2>
          <p>
            Dowry is not just a tradition—it is a social evil that has
            impacted millions of lives. Understand its history and impact.
          </p>

          <button className="secondary-btn">Read More</button>
        </div>
      </section>

      {/* STATES */}
      <section className="states">
        <h2>Dowry Insights by State</h2>

        <div className="state-grid">
          <div className="state-card">Bihar</div>
          <div className="state-card">Uttar Pradesh</div>
          <div className="state-card">Punjab</div>
          <div className="state-card">Rajasthan</div>
        </div>
      </section>

      {/* HELP */}
      <section className="help">
        <h2>Need Help?</h2>

        <div className="help-grid">
          <div>1091</div>
          <div>181</div>
          <div>100</div>
          <div>1098</div>
        </div>
      </section>

    </div>
  );
}

export default Home;