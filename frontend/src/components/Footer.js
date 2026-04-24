import React from "react";
import "./Footer.css";

function Footer() {
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
          <p>Home</p>
          <p>Calculator</p>
          <p>For Groom</p>
          <p>For Bride</p>
          <p>Regional Data</p>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4>Legal & Support</h4>
          <p>Dowry Prohibition Act, 1961</p>
          <p>Section 498A IPC</p>
          <p>Domestic Violence Act</p>
          <p>Women Helpline 1091</p>
          <p>Police Emergency 100</p>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h4>Resources</h4>
          <p>FAQ</p>
          <p>Blogs & Articles</p>
          <p>Case Studies</p>
          <p>Awareness Campaigns</p>
          <p>Contact Us</p>
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
        <p>© 2025 Dowry Labs. All rights reserved.</p>
        <p>
          This website is for educational awareness only and does not
          promote or support dowry in any form.
        </p>
      </div>

    </footer>
  );
}

export default Footer;