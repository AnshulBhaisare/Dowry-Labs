import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Resources.css";

function Resources() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
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

  const helplines = [
    { name: "Women Helpline", number: "1091", desc: "24/7 national helpline for women in distress", icon: "📞" },
    { name: "Women Helpline (Short)", number: "181", desc: "Dedicated short code for women's assistance", icon: "☎️" },
    { name: "Police Emergency", number: "100", desc: "Immediate police assistance in emergencies", icon: "🚔" },
    { name: "Child Helpline", number: "1098", desc: "Support for children affected by domestic violence", icon: "👶" },
    { name: "National Commission for Women", number: "011-26944880", desc: "Official commission handling women's grievances", icon: "🏛️" },
    { name: "Domestic Violence Helpline", number: "181", desc: "Dedicated line for domestic violence complaints", icon: "🛡️" },
  ];

  const organizations = [
    {
      name: "National Commission for Women (NCW)",
      desc: "Government body to review constitutional and legal safeguards for women.",
      url: "https://ncw.gov.in/",
      type: "Government",
    },
    {
      name: "All India Women's Conference (AIWC)",
      desc: "One of India's oldest women's organizations working on education and empowerment.",
      url: "https://aiwc.org.in/",
      type: "NGO",
    },
    {
      name: "Jagori",
      desc: "Women's training, documentation, and communication centre based in Delhi.",
      url: "https://jagori.org/",
      type: "NGO",
    },
    {
      name: "Sakshi",
      desc: "Organization working to combat violence against women through legal support.",
      url: "https://sakshi.org.in/",
      type: "NGO",
    },
    {
      name: "National Legal Services Authority (NALSA)",
      desc: "Provides free legal aid to women and economically weaker sections.",
      url: "https://nalsa.gov.in/",
      type: "Government",
    },
    {
      name: "One Stop Centre (Sakhi)",
      desc: "Integrated support for women affected by violence — medical, legal, and counseling.",
      url: "https://wcd.gov.in/",
      type: "Government",
    },
  ];

  const articles = [
    {
      title: "Understanding the Dowry Prohibition Act, 1961",
      source: "Legal Services India",
      desc: "A comprehensive breakdown of the act, its sections, and penalties.",
      url: "https://www.legalserviceindia.com/legal/article-4375-the-dowry-prohibition-act-1961.html",
    },
    {
      title: "Dowry Deaths in India — NCRB Statistics",
      source: "National Crime Records Bureau",
      desc: "Official statistics on dowry-related crimes and deaths across states.",
      url: "https://ncrb.gov.in/en/crime-in-india",
    },
    {
      title: "The Social Impact of Dowry on Indian Families",
      source: "Economic & Political Weekly",
      desc: "Research paper analyzing the sociological effects of dowry demands.",
      url: "https://www.epw.in/",
    },
    {
      title: "How AI Can Help Fight Social Evils",
      source: "MIT Technology Review",
      desc: "Exploring how technology and data science can create awareness.",
      url: "https://www.technologyreview.com/",
    },
  ];

  const caseStudies = [
    {
      title: "Nisha Sharma Case (2003)",
      location: "Delhi, India",
      desc: "Nisha Sharma filed a dowry case against her groom during the wedding ceremony when his family demanded ₹12 lakh. The case became a landmark example of women standing up against dowry.",
      outcome: "Groom's family arrested; case became a national movement for anti-dowry awareness.",
      url: "https://en.wikipedia.org/wiki/Nisha_Sharma_dowry_case",
    },
    {
      title: "Vishaka vs. State of Rajasthan (1997)",
      location: "Rajasthan, India",
      desc: "A landmark Supreme Court case that laid down guidelines for the prevention of sexual harassment at the workplace, driven by the assault on a social worker fighting child marriage and dowry.",
      outcome: "Led to the creation of POSH Act 2013 — a watershed moment in Indian women's rights.",
      url: "https://en.wikipedia.org/wiki/Vishaka_v._State_of_Rajasthan",
    },
    {
      title: "State of HP vs. Nikku Ram (1995)",
      location: "Himachal Pradesh, India",
      desc: "A dowry death case where the bride was burned to death within a year of marriage. The court convicted the husband and in-laws based on circumstantial evidence.",
      outcome: "Conviction under Section 304B IPC; reinforced the legal presumption against the accused in dowry deaths.",
      url: "https://indiankanoon.org/doc/695995/",
    },
  ];

  const campaigns = [
    {
      name: "Beti Bachao, Beti Padhao",
      org: "Government of India",
      desc: "National campaign to address declining child sex ratio and promote education of girls, directly combating dowry-driven gender discrimination.",
      icon: "🎓",
      url: "https://www.pmindia.gov.in/en/major_initiatives/beti-bachao-beti-padhao/",
    },
    {
      name: "Bell Bajao! (Ring the Bell)",
      org: "Breakthrough India",
      desc: "Award-winning campaign encouraging men and boys to take a stand against domestic violence by simply ringing the doorbell when they witness abuse.",
      icon: "🔔",
      url: "https://inbreakthrough.org/",
    },
    {
      name: "Laadli Media Awards",
      org: "Population First",
      desc: "Annual awards recognizing journalists and media professionals who report on gender issues, including dowry, with sensitivity and impact.",
      icon: "📰",
      url: "https://populationfirst.org/",
    },
    {
      name: "No Dowry Campaign",
      org: "Narayan Seva Sansthan",
      desc: "Grassroots movement led by young Indians pledging to reject dowry in their own marriages and spreading awareness through social media.",
      icon: "✊",
      url: "https://www.narayanseva.org/dowry-system-in-india/",
    },
  ];

  return (
    <div className="resources-page">

      {/* HERO */}
      <section className="resources-hero">
        <div className="resources-hero-overlay">
          <h1>Resources &amp; Support</h1>
          <p>
            Access helplines, organizations, and reading material to fight against
            dowry and support those affected.
          </p>
        </div>
      </section>

      {/* HELPLINES */}
      <section className="resources-section" id="helplines">
        <div className="resources-container">
          <div className="section-badge-res">📞 Emergency Helplines</div>
          <h2>Immediate Help</h2>
          <p className="section-desc">If you or someone you know is in danger, call these numbers immediately.</p>
          <div className="helplines-grid">
            {helplines.map((h, i) => (
              <div className="helpline-card" key={i}>
                <span className="helpline-icon">{h.icon}</span>
                <div>
                  <h3>{h.name}</h3>
                  <p className="helpline-number">{h.number}</p>
                  <p className="helpline-desc">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANIZATIONS */}
      <section className="resources-section resources-section-alt" id="organizations">
        <div className="resources-container">
          <div className="section-badge-res">🏛️ Organizations</div>
          <h2>Support Organizations</h2>
          <p className="section-desc">NGOs and government bodies working to eliminate dowry and support victims.</p>
          <div className="org-grid">
            {organizations.map((org, i) => (
              <div className="org-card" key={i} onClick={() => window.open(org.url, "_blank")} style={{ cursor: "pointer" }}>
                <span className={`org-type ${org.type === "Government" ? "org-gov" : "org-ngo"}`}>
                  {org.type}
                </span>
                <h3>{org.name}</h3>
                <p>{org.desc}</p>
                <span className="org-link">
                  Visit Website →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* READING MATERIAL / BLOGS & ARTICLES */}
      <section className="resources-section" id="articles">
        <div className="resources-container">
          <div className="section-badge-res">📚 Blogs &amp; Articles</div>
          <h2>Articles &amp; Research</h2>
          <p className="section-desc">Educate yourself with these important readings on dowry.</p>
          <div className="articles-list">
            {articles.map((a, i) => (
              <div className="article-card" key={i} onClick={() => window.open(a.url, "_blank")} style={{ cursor: "pointer" }}>
                <div className="article-num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{a.title}</h3>
                  <p className="article-source">{a.source}</p>
                  <p>{a.desc}</p>
                  <span className="org-link" style={{ marginTop: "10px", display: "inline-block" }}>
                    Read Article →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="resources-section resources-section-alt" id="case-studies">
        <div className="resources-container">
          <div className="section-badge-res">📋 Case Studies</div>
          <h2>Landmark Cases</h2>
          <p className="section-desc">Real cases that shaped India's fight against dowry and violence against women.</p>
          <div className="case-studies-list">
            {caseStudies.map((cs, i) => (
              <div className="case-study-card" key={i} onClick={() => window.open(cs.url, "_blank")} style={{ cursor: "pointer" }}>
                <div className="case-study-header">
                  <h3>{cs.title}</h3>
                  <span className="case-study-location">📍 {cs.location}</span>
                </div>
                <p className="case-study-desc">{cs.desc}</p>
                <div className="case-study-outcome" style={{ marginBottom: "15px" }}>
                  <span className="outcome-label">⚖️ Outcome:</span>
                  <p>{cs.outcome}</p>
                </div>
                <span className="org-link">
                  View Full Case Details →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARENESS CAMPAIGNS */}
      <section className="resources-section" id="campaigns">
        <div className="resources-container">
          <div className="section-badge-res">📢 Awareness Campaigns</div>
          <h2>Campaigns Making a Difference</h2>
          <p className="section-desc">National and grassroots campaigns actively fighting dowry and gender-based violence.</p>
          <div className="campaigns-grid">
            {campaigns.map((c, i) => (
              <div className="campaign-card" key={i} onClick={() => window.open(c.url, "_blank")} style={{ cursor: "pointer" }}>
                <span className="campaign-icon">{c.icon}</span>
                <h3>{c.name}</h3>
                <p className="campaign-org">{c.org}</p>
                <p style={{ marginBottom: "12px" }}>{c.desc}</p>
                <span className="org-link">
                  Join Campaign →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT US */}
      <section className="resources-section resources-section-alt" id="contact">
        <div className="resources-container">
          <div className="section-badge-res">✉️ Contact Us</div>
          <h2>Get in Touch</h2>
          <p className="section-desc">Have questions, feedback, or need support? Reach out to us.</p>
          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-icon">📧</span>
              <h3>Email</h3>
              <p>support@dowrylabs.org</p>
              <p className="contact-note">We respond within 24 hours</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">📞</span>
              <h3>Helpline</h3>
              <p>1091 (Women Helpline)</p>
              <p className="contact-note">Available 24/7</p>
            </div>
            <div className="contact-card">
              <span className="contact-icon">📍</span>
              <h3>Address</h3>
              <p>Dowry Labs Foundation</p>
              <p className="contact-note">India</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="resources-cta">
        <h2>Knowledge is Power</h2>
        <p>Understand your rights and spread awareness to end dowry.</p>
        <div className="resources-cta-buttons">
          <Link to="/laws" className="primary-btn">Know Your Rights</Link>
          <Link to="/calculator" className="secondary-btn">Try the Calculator</Link>
        </div>
      </section>

    </div>
  );
}

export default Resources;
