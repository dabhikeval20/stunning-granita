import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-accent"></div>
      <div className="hero-content">
        <div className="hero-eyebrow">MDRT Achiever · Since 2003</div>
        <h1>
          Your Wealth,
          <em>Professionally</em>
          Secured.
        </h1>
        <p className="hero-sub">
          Surat's most trusted financial partner for over 21 years. We craft personalized insurance and investment
          strategies for 2,000+ families across India and abroad.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn-primary">Book Free Consultation →</a>
          <a href="#calculator" className="btn-secondary">Try SIP Calculator</a>
        </div>
        <div className="credentials-badge reveal">
          <div className="badge-item">
            <span className="badge-val">21+</span>
            <span className="badge-label">Years</span>
          </div>
          <div className="badge-divider"></div>
          <div className="badge-item">
            <span className="badge-val">2000+</span>
            <span className="badge-label">Families</span>
          </div>
          <div className="badge-divider"></div>
          <div className="badge-item">
            <span className="badge-val">₹500Cr+</span>
            <span className="badge-label">Managed</span>
          </div>
          <div className="badge-divider"></div>
          <div className="mdrt-badge">MDRT<br />Achiever</div>
        </div>
      </div>

      <div className="hero-visual reveal">
        <div className="hero-card">
          <div className="hero-card-header">
            <h3>Our Expertise</h3>
            <p>Comprehensive Financial Solutions</p>
          </div>
          <div className="hero-card-body">
            <div className="mini-service">
              <div className="mini-service-icon">🛡️</div>
              <div className="mini-service-text">
                <strong>Life & Health Insurance</strong>
                <span>LIC · Tata · Mediclaim · Term Plans</span>
              </div>
            </div>
            <div className="mini-service">
              <div className="mini-service-icon">📈</div>
              <div className="mini-service-text">
                <strong>Mutual Funds & SIP</strong>
                <span>Equity · Debt · ELSS · PMS · AIF</span>
              </div>
            </div>
            <div className="mini-service">
              <div className="mini-service-icon">🏦</div>
              <div className="mini-service-text">
                <strong>Retirement & NRI Planning</strong>
                <span>Pension · Bonds · Gold Bonds</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse-icon"><div className="mouse-wheel"></div></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
