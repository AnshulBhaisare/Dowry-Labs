import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Learn.css";

function Learn() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="learn-page">

      {/* HERO BANNER */}
      <section className="learn-hero">
        <div className="learn-hero-overlay">
          <h1>Learn About The Dowry System</h1>
          <p>
            Education is the first step toward change. Understand what dowry is,
            its history, impact, and how you can take action.
          </p>
        </div>
      </section>

      {/* WHAT IS DOWRY */}
      <section className="learn-section" id="what-is-dowry">
        <div className="learn-container">
          <div className="section-badge">📖 Definition</div>
          <h2>What Is Dowry?</h2>
          <p>
            Dowry refers to the assets — cash, property, gold, vehicles, or other
            valuables — that the bride's family gives to the groom or his family
            at the time of marriage. While it was historically considered a gift,
            it has evolved into a coercive demand system that exploits families
            and endangers women.
          </p>
          <div className="info-cards">
            <div className="info-card">
              <span className="info-icon">💰</span>
              <h3>Cash &amp; Gold</h3>
              <p>Large sums of money and jewellery demanded before or during the wedding.</p>
            </div>
            <div className="info-card">
              <span className="info-icon">🏠</span>
              <h3>Property</h3>
              <p>Land, houses, or commercial assets transferred as part of the deal.</p>
            </div>
            <div className="info-card">
              <span className="info-icon">🚗</span>
              <h3>Vehicles</h3>
              <p>Cars, bikes, and other luxury items demanded by the groom's family.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="learn-section learn-section-alt" id="history">
        <div className="learn-container">
          <div className="section-badge">🕰️ History</div>
          <h2>Historical Background</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Ancient Period</h3>
                <p>
                  In ancient India, "Stridhan" was a voluntary gift given to the
                  bride to ensure her financial security. It was her personal property.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Medieval Period</h3>
                <p>
                  The practice shifted under feudal systems. Dowry became a way to
                  consolidate wealth between families and establish social alliances.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Colonial Era</h3>
                <p>
                  British land ownership laws marginalized women further, making dowry
                  a transaction rather than a gift. Women had no inheritance rights.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Modern Day</h3>
                <p>
                  Despite the Dowry Prohibition Act (1961), the practice persists.
                  Demands have escalated with consumerism and social pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="learn-section" id="impact">
        <div className="learn-container">
          <div className="section-badge">⚠️ Impact</div>
          <h2>Impact of Dowry</h2>
          <div className="impact-grid">
            <div className="impact-card impact-severe">
              <h3>8,618+</h3>
              <p>Dowry deaths reported annually in India (NCRB data)</p>
            </div>
            <div className="impact-card impact-high">
              <h3>Mental Health</h3>
              <p>Depression, anxiety, and PTSD among brides subjected to dowry harassment</p>
            </div>
            <div className="impact-card impact-medium">
              <h3>Financial Ruin</h3>
              <p>Families sell land, take loans, and fall into debt traps to pay dowry</p>
            </div>
            <div className="impact-card impact-low">
              <h3>Gender Inequality</h3>
              <p>Reinforces the perception that daughters are a burden on families</p>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF DOWRY VIOLENCE */}
      <section className="learn-section learn-section-alt" id="types">
        <div className="learn-container">
          <div className="section-badge">🔍 Types</div>
          <h2>Types of Dowry-Related Violence</h2>
          <div className="types-list">
            <div className="type-item">
              <span className="type-number">01</span>
              <div>
                <h3>Physical Violence</h3>
                <p>Beating, burning, and physical torture by the groom's family when demands are not met.</p>
              </div>
            </div>
            <div className="type-item">
              <span className="type-number">02</span>
              <div>
                <h3>Emotional Abuse</h3>
                <p>Constant taunting, humiliation, and mental harassment of the bride.</p>
              </div>
            </div>
            <div className="type-item">
              <span className="type-number">03</span>
              <div>
                <h3>Economic Exploitation</h3>
                <p>Continuous demands for money even after marriage, draining the bride's family.</p>
              </div>
            </div>
            <div className="type-item">
              <span className="type-number">04</span>
              <div>
                <h3>Social Isolation</h3>
                <p>Cutting off the bride from her family and support networks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN DO */}
      <section className="learn-section" id="take-action">
        <div className="learn-container">
          <div className="section-badge">✊ Take Action</div>
          <h2>What You Can Do</h2>
          <div className="action-grid">
            <div className="action-card">
              <span className="action-icon">📢</span>
              <h3>Spread Awareness</h3>
              <p>Talk about dowry in your community. Share resources and educate others.</p>
            </div>
            <div className="action-card">
              <span className="action-icon">📞</span>
              <h3>Report Incidents</h3>
              <p>Call Women Helpline 1091 or Police 100 to report dowry demands.</p>
            </div>
            <div className="action-card">
              <span className="action-icon">⚖️</span>
              <h3>Know the Law</h3>
              <p>Understand the Dowry Prohibition Act and Section 498A IPC.</p>
              <Link to="/laws" className="action-link">Read Laws →</Link>
            </div>
            <div className="action-card">
              <span className="action-icon">🤝</span>
              <h3>Support Organizations</h3>
              <p>Volunteer or donate to NGOs fighting against dowry.</p>
              <Link to="/resources" className="action-link">View Resources →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="learn-cta">
        <h2>Ready to Make a Difference?</h2>
        <p>Use our AI-powered calculator to understand dowry demands and take the first step.</p>
        <div className="learn-cta-buttons">
          <Link to="/calculator" className="primary-btn">Try the Calculator</Link>
          <Link to="/laws" className="secondary-btn">Know Your Rights</Link>
        </div>
      </section>

    </div>
  );
}

export default Learn;
