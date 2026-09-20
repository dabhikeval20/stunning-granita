import React from 'react';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-visual reveal">
          <div className="about-img-container">
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏛️</div>
              <h3 style={{ fontSize: '24px', color: 'var(--gold-light)' }}>DZ Infotech Headquarters</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginTop: '8px' }}>Bhavnagar & Surat, Gujarat</p>
            </div>
          </div>
          <div className="about-years-badge">
            <span className="big-num">21</span>
            <span className="small-txt">Years of<br />Trust</span>
          </div>
          <div className="about-mdrt">
            <strong>🏆 MDRT Achiever</strong>
            <span>Million Dollar Round Table</span>
          </div>
        </div>

        <div className="about-content">
          <div className="section-tag reveal">Who We Are</div>
          <h2 className="section-title reveal">Bhavnagar's Most Trusted<br />Financial Partner</h2>
          <p className="about-desc reveal">
            Based in <strong>Bhavnagar, Gujarat</strong>, DZ Infotech has been providing expert insurance and
            investment solutions since <strong>2003</strong>. As an <strong>MDRT Achiever</strong>, we specialize in life
            insurance, mediclaim, mutual funds, motor insurance, PMS, AIF, tax-saving strategies, retirement planning, and
            NRI-focused investments.
            <br /><br />
            With over <strong>2,000 families</strong> served across India and abroad, we focus on personalized service,
            technology-driven tools, and clear financial guidance. Our mission is to help clients achieve their life goals
            and secure the financial future of over <strong>5,000 families</strong> in the next decade.
          </p>

          <div className="credentials-list reveal">
            <div className="cred-item">
              <span className="cred-icon">🏆</span>
              <div className="cred-text">
                <strong>MDRT Achiever — Million Dollar Round Table</strong>
                <span>International standard of excellence in financial advisory</span>
              </div>
            </div>
            <div className="cred-item">
              <span className="cred-icon">📋</span>
              <div className="cred-text">
                <strong>IRDA Licensed Insurance Advisor</strong>
                <span>Authorized to advise on life, health & general insurance</span>
              </div>
            </div>
            <div className="cred-item">
              <span className="cred-icon">📊</span>
              <div className="cred-text">
                <strong>AMFI Registered Mutual Fund Distributor</strong>
                <span>ARN certified for MF & SIP advisory across India</span>
              </div>
            </div>
            <div className="cred-item">
              <span className="cred-icon">🌍</span>
              <div className="cred-text">
                <strong>NRI Investment Specialist</strong>
                <span>Dedicated expertise for diaspora investment planning</span>
              </div>
            </div>
          </div>

          <div className="about-mission reveal">
            <p>"Your future, our expertise — growth, trust, success together. We don't just manage money; we nurture financial journeys, one family at a time."</p>
            <cite>— DZ Infotech, Bhavnagar · Est. 2003</cite>
          </div>
        </div>
      </div>
    </section>
  );
}
