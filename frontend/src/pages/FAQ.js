import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FAQ.css";

function FAQ() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const faqs = [
    {
      category: "General",
      items: [
        {
          q: "What is dowry?",
          a: "Dowry refers to the assets — cash, property, gold, vehicles, or other valuables — given by the bride's family to the groom or his family at the time of marriage. It is illegal under Indian law."
        },
        {
          q: "Is dowry legal in India?",
          a: "No. The Dowry Prohibition Act of 1961 makes both giving and receiving dowry a punishable offence, with imprisonment up to 5 years and a fine."
        },
        {
          q: "What is the difference between dowry and gifts?",
          a: "Gifts are voluntary and given without demand. Dowry is demanded directly or indirectly as a condition for the marriage. Any gift given under pressure is considered dowry."
        },
        {
          q: "Why does dowry still exist?",
          a: "Deep-rooted social customs, gender inequality, desire for social status, weak enforcement of laws, and societal pressure all contribute to the continued practice of dowry."
        },
      ],
    },
    {
      category: "Legal",
      items: [
        {
          q: "What is Section 498A IPC?",
          a: "Section 498A deals with cruelty by the husband or his relatives. It is a cognizable, non-bailable offence punishable with up to 3 years of imprisonment."
        },
        {
          q: "What is Section 304B IPC?",
          a: "Section 304B deals with dowry death. If a woman dies within 7 years of marriage under abnormal circumstances involving dowry harassment, it is treated as dowry death with minimum 7 years imprisonment."
        },
        {
          q: "Can a woman file a complaint anonymously?",
          a: "While FIRs require identity, you can initially approach women helplines (1091) or the Women's Commission anonymously for guidance before filing."
        },
        {
          q: "What evidence is needed to prove dowry harassment?",
          a: "Evidence can include text messages, call recordings, emails, witness testimonies, medical reports, bank statements showing coerced transfers, and any written agreements."
        },
      ],
    },
    {
      category: "About This Tool",
      items: [
        {
          q: "What is Dowry Labs?",
          a: "Dowry Labs is an AI-powered educational platform that estimates dowry demand based on real-world social, financial, and regional factors. It is built for awareness only."
        },
        {
          q: "Does this tool promote dowry?",
          a: "Absolutely not. This tool exposes the ugly reality of dowry by calculating what might be demanded based on data. The aim is to shock and educate."
        },
        {
          q: "How accurate is the calculator?",
          a: "The calculator uses a machine learning model trained on survey data and research patterns. It provides estimates for educational purposes only — actual demands vary widely."
        },
        {
          q: "Is my data stored anywhere?",
          a: "No. All calculations happen in real-time and your inputs are not stored, logged, or shared with anyone."
        },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let globalIndex = 0;

  return (
    <div className="faq-page">

      {/* HERO */}
      <section className="faq-hero">
        <div className="faq-hero-overlay">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about dowry, the law, and how this
            platform helps spread awareness.
          </p>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="faq-content">
        <div className="faq-container">
          {faqs.map((category, catIdx) => (
            <div className="faq-category" key={catIdx}>
              <h2 className="faq-category-title">{category.category}</h2>
              <div className="faq-list">
                {category.items.map((item, i) => {
                  const idx = globalIndex++;
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      className={`faq-item ${isOpen ? "faq-open" : ""}`}
                      key={i}
                      onClick={() => toggle(idx)}
                    >
                      <div className="faq-question">
                        <span>{item.q}</span>
                        <span className={`faq-arrow ${isOpen ? "faq-arrow-open" : ""}`}>
                          ▼
                        </span>
                      </div>
                      <div className={`faq-answer ${isOpen ? "faq-answer-show" : ""}`}>
                        <p>{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="faq-cta">
        <h2>Still Have Questions?</h2>
        <p>Explore our resources or reach out to helplines for immediate support.</p>
        <div className="faq-cta-buttons">
          <Link to="/resources" className="primary-btn">View Resources</Link>
          <Link to="/learn" className="secondary-btn">Learn More</Link>
        </div>
      </section>

    </div>
  );
}

export default FAQ;
