import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Laws.css";

function Laws() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Small delay to let the page render first
      setTimeout(() => {
        const el = document.getElementById(location.hash.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const laws = [
    {
      id: "dowry-prohibition-act",
      icon: "📜",
      title: "Dowry Prohibition Act, 1961",
      sections: [
        { name: "Section 2", desc: "Defines 'dowry' as any property or valuable security given in connection with marriage." },
        { name: "Section 3", desc: "Penalty for giving or taking dowry — imprisonment up to 5 years and fine of ₹15,000 or amount of dowry." },
        { name: "Section 4", desc: "Penalty for demanding dowry — imprisonment of 6 months to 2 years and fine up to ₹10,000." },
        { name: "Section 6", desc: "Dowry received must be transferred to the woman within 3 months of receipt." },
      ],
    },
    {
      id: "section-498a",
      icon: "⚖️",
      title: "Section 498A — Indian Penal Code",
      sections: [
        { name: "Cruelty by Husband", desc: "Husband or his relatives subjecting a woman to cruelty can be imprisoned up to 3 years and fined." },
        { name: "Cognizable Offence", desc: "Police can arrest without warrant. It is non-bailable and non-compoundable." },
        { name: "What is Cruelty?", desc: "Any conduct likely to drive a woman to suicide or cause grave injury to her life, limb, or health." },
      ],
    },
    {
      id: "domestic-violence-act",
      icon: "🛡️",
      title: "Protection of Women from Domestic Violence Act, 2005",
      sections: [
        { name: "Section 3", desc: "Defines domestic violence including physical, sexual, verbal, emotional, and economic abuse." },
        { name: "Section 12", desc: "Application to Magistrate for protection orders, residence orders, and monetary relief." },
        { name: "Section 18", desc: "Magistrate can pass protection orders prohibiting the respondent from committing domestic violence." },
        { name: "Section 20", desc: "Monetary relief including expenses, loss of earnings, medical expenses, and compensation." },
      ],
    },
    {
      id: "section-304b",
      icon: "🔒",
      title: "Section 304B — Indian Penal Code (Dowry Death)",
      sections: [
        { name: "Definition", desc: "Death of a woman within 7 years of marriage under abnormal circumstances is treated as dowry death." },
        { name: "Presumption", desc: "If cruelty or harassment for dowry is proven before death, husband/relatives are presumed guilty." },
        { name: "Punishment", desc: "Minimum 7 years imprisonment, extendable to life imprisonment." },
      ],
    },
  ];

  return (
    <div className="laws-page">

      {/* HERO */}
      <section className="laws-hero">
        <div className="laws-hero-overlay">
          <h1>Know the Laws That Protect You</h1>
          <p>
            India has strong legal provisions against dowry. Understanding them is
            your first line of defense.
          </p>
        </div>
      </section>

      {/* KEY STATS */}
      <section className="laws-stats">
        <div className="laws-stat">
          <h3>1961</h3>
          <p>Year the Dowry Prohibition Act was enacted</p>
        </div>
        <div className="laws-stat">
          <h3>5 Years</h3>
          <p>Maximum imprisonment for giving/taking dowry</p>
        </div>
        <div className="laws-stat">
          <h3>₹15,000</h3>
          <p>Minimum fine or amount of dowry, whichever is more</p>
        </div>
        <div className="laws-stat">
          <h3>Non-Bailable</h3>
          <p>Section 498A is a non-bailable offence</p>
        </div>
      </section>

      {/* LAWS DETAIL */}
      <section className="laws-detail">
        <div className="laws-container">
          {laws.map((law, index) => (
            <div className="law-block" key={index} id={law.id}>
              <div className="law-header">
                <span className="law-icon">{law.icon}</span>
                <h2>{law.title}</h2>
              </div>
              <div className="law-sections">
                {law.sections.map((sec, i) => (
                  <div className="law-section-card" key={i}>
                    <h4>{sec.name}</h4>
                    <p>{sec.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO FILE */}
      <section className="laws-howto">
        <div className="laws-container">
          <h2>How to File a Complaint</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">1</div>
              <h3>Gather Evidence</h3>
              <p>Collect all evidence — messages, recordings, witnesses, medical reports.</p>
            </div>
            <div className="step-card">
              <div className="step-num">2</div>
              <h3>Visit Police Station</h3>
              <p>Go to the nearest police station and file an FIR under relevant sections.</p>
            </div>
            <div className="step-card">
              <div className="step-num">3</div>
              <h3>Contact Women's Cell</h3>
              <p>Approach the Women's Cell or Women's Commission in your state.</p>
            </div>
            <div className="step-card">
              <div className="step-num">4</div>
              <h3>Seek Legal Aid</h3>
              <p>Contact free legal aid services or NGOs for legal representation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="laws-cta">
        <h2>Don't Suffer in Silence</h2>
        <p>If you or someone you know is affected by dowry, take action today.</p>
        <div className="laws-cta-buttons">
          <Link to="/resources" className="primary-btn">Get Help &amp; Resources</Link>
          <Link to="/faq" className="secondary-btn">Read the FAQ</Link>
        </div>
      </section>

    </div>
  );
}

export default Laws;
