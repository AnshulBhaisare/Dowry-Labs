import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToHash = (path) => {
    navigate(path);
    // Small delay to allow the page to render before scrolling
    setTimeout(() => {
      const hash = path.split("#")[1];
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 150);
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COLUMN 1 */}
        <div>
          <h3>⚖️ Dowry Labs</h3>
          <p>
            Using AI and data science to create awareness and drive
            change in society.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4>Quick Links</h4>
          <Link to="/" className="footer-link" onClick={scrollTop}>Home</Link>
          <Link to="/calculator" className="footer-link" onClick={scrollTop}>Calculator</Link>
          <Link to="/learn" className="footer-link" onClick={scrollTop}>Learn</Link>
          <Link to="/regional" className="footer-link" onClick={scrollTop}>Regional Data</Link>
          <Link to="/faq" className="footer-link" onClick={scrollTop}>FAQ</Link>
        </div>

        {/* COLUMN 3 — Legal & Support → specific law sections */}
        <div>
          <h4>Legal &amp; Support</h4>
          <span className="footer-link" onClick={() => navigateToHash("/laws#dowry-prohibition-act")}>Dowry Prohibition Act, 1961</span>
          <span className="footer-link" onClick={() => navigateToHash("/laws#section-498a")}>Section 498A IPC</span>
          <span className="footer-link" onClick={() => navigateToHash("/laws#domestic-violence-act")}>Domestic Violence Act</span>
          <span className="footer-link" onClick={() => navigateToHash("/resources#helplines")}>Women Helpline 1091</span>
          <span className="footer-link" onClick={() => navigateToHash("/resources#helplines")}>Police Emergency 100</span>
        </div>

        {/* COLUMN 4 — Resources → specific resource sections */}
        <div>
          <h4>Resources</h4>
          <Link to="/faq" className="footer-link" onClick={scrollTop}>FAQ</Link>
          <span className="footer-link" onClick={() => navigateToHash("/resources#articles")}>Blogs &amp; Articles</span>
          <span className="footer-link" onClick={() => navigateToHash("/resources#case-studies")}>Case Studies</span>
          <span className="footer-link" onClick={() => navigateToHash("/resources#campaigns")}>Awareness Campaigns</span>
          <span className="footer-link" onClick={() => navigateToHash("/resources#contact")}>Contact Us</span>
        </div>

        {/* COLUMN 5 */}
        <div>
          <h4>Newsletter</h4>
          <p>Stay updated with insights and awareness initiatives.</p>

          <div className="newsletter">
            <input placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Dowry Labs. All rights reserved.</p>
        <p>
          This website is for educational awareness only and does not
          promote or support dowry in any form.
        </p>
      </div>

    </footer>
  );
}

export default Footer;