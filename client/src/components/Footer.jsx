import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#" className="nav-logo">
            <div className="nav-logo-icon">SM</div>
            <div className="nav-logo-text">
              <strong>DZ Infotech</strong>
              <span>Est. 2003 · Bhavnagar, Gujarat</span>
            </div>
          </a>
          <p>
            Surat's most trusted financial advisor. Over 21 years of building wealth, securing families, and enabling
            financial dreams across India and abroad.
          </p>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Life Insurance</a></li>
            <li><a href="#services">Health & Mediclaim</a></li>
            <li><a href="#services">Mutual Funds & SIP</a></li>
            <li><a href="#services">PMS & AIF</a></li>
            <li><a href="#services">Retirement Planning</a></li>
            <li><a href="#services">NRI Investments</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#testimonials">Client Stories</a></li>
            <li><a href="#calculator">Calculators</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="disclaimer-box">
        <strong>Regulatory Disclosures:</strong> DZ Infotech is an IRDA licensed insurance advisor and AMFI
        registered Mutual Fund Distributor (ARN Registered). Insurance is the subject matter of solicitation. Mutual Fund
        investments are subject to market risks — please read all scheme-related documents carefully before investing.
        Past performance is not indicative of future results. The information provided on this website is for general
        informational purposes only and does not constitute financial advice. Please consult your advisor before making
        investment decisions. AMFI Registered Mutual Fund Distributor | IRDA Licensed | Grievance: SEBI SCORES Portal.
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2024 DZ Infotech, Bhavnagar. All rights reserved.</p>
        <p className="footer-copy" style={{ color: 'var(--gold-light)', opacity: 1 }}>
          Your Future, Our Expertise — Growth · Trust · Success
        </p>
      </div>
    </footer>
  );
}
