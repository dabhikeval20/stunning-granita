import React from 'react';

const servicesData = [
  {
    num: '01',
    image: '/images/services/life-term-insurance.webp',
    alt: 'Indian family protected by life insurance planning',
    title: 'Life & Term Insurance',
    desc: "Secure your family's future with best-in-class life cover. We compare LIC, Tata, HDFC, and more to find the perfect plan matching your life stage and goals.",
    tags: ['LIC', 'Tata AIA', 'Term Plan', 'Jeevan Veemo']
  },
  {
    num: '02',
    image: '/images/services/health-mediclaim.webp',
    alt: 'Family healthcare and mediclaim planning',
    title: 'Health & Mediclaim',
    desc: 'Cashless hospitalization, family floater plans, critical illness covers, and overseas mediclaim designed for NRIs and frequent travellers. No medical worries, ever.',
    tags: ['Mediclaim', 'Family Floater', 'Overseas', 'Critical Illness']
  },
  {
    num: '03',
    image: '/images/services/mutual-funds-sip.webp',
    alt: 'Long-term mutual fund investment and SIP planning',
    title: 'Mutual Funds & SIP',
    desc: 'Systematic, goal-based investing through curated mutual fund portfolios. Whether you seek growth, stability, or tax savings — we build the right SIP strategy for you.',
    tags: ['SIP', 'ELSS', 'Equity', 'Debt']
  },
  {
    num: '04',
    image: '/images/services/pms-aif.webp',
    alt: 'Professional portfolio and alternative investment management',
    title: 'PMS & AIF',
    desc: 'For high-net-worth individuals seeking superior returns. Portfolio Management Services and Alternative Investment Funds with professional oversight and absolute transparency.',
    tags: ['PMS', 'AIF', 'HNI', 'Structured Products']
  },
  {
    num: '05',
    image: '/images/services/retirement-pension.webp',
    alt: 'Retirement and pension planning for a couple',
    title: 'Retirement & Pension Planning',
    desc: 'Retire worry-free. We engineer your SWP, pension plans, and retirement corpus to ensure a comfortable, dignified life — backed by 21 years of planning expertise.',
    tags: ['SWP', 'Pension', 'NPS', 'Retirement Fund']
  },
  {
    num: '06',
    image: '/images/services/tax-wealth-planning.webp',
    alt: 'Tax and wealth planning strategy',
    title: 'Tax & Wealth Planning',
    desc: 'Smart tax-saving strategies through ELSS, bonds, and structured products. Tax-free wealth creation combined with NRI investment advisory for diaspora families.',
    tags: ['Tax Planning', 'Gold Bonds', 'NRI Investments', '80C']
  }
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <div>
          <div className="section-tag reveal">What We Offer</div>
          <h2 className="section-title reveal">Comprehensive Financial<br />Solutions Under One Roof</h2>
        </div>
        <p className="section-sub reveal" style={{ textAlign: 'right' }}>
          From protecting your family today to building generational wealth — we have every financial tool you need.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((s, idx) => (
          <div className="service-card reveal" key={idx}>
            <div className="service-card-image-wrap">
              <img
                src={s.image}
                alt={s.alt}
                loading="lazy"
                className="service-card-image"
              />
            </div>
            <div className="service-card-content">
              <div className="service-card-meta">
                <span className="service-num">{s.num}</span>
              </div>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t, i) => (
                  <span className="service-tag" key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

