import React, { useState } from 'react';

function fmt(n) {
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + 'Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + 'L';
  return '₹' + n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function SipCalculator() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const P = parseFloat(amount);
  const r = parseFloat(rate) / 100 / 12;
  const n = parseInt(years) * 12;
  const corpus = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const invested = P * n;
  const gain = corpus - invested;
  const mult = corpus / invested;

  const gainPct = Math.round((gain / corpus) * 100);
  const circ = 2 * Math.PI * 41; // ~257.6
  const gainOffset = circ * (1 - gainPct / 100);

  return (
    <div className="calc-body" id="calc-sip">
      <div className="calc-inputs">
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '22px', color: 'var(--navy)', marginBottom: '8px' }}>
          SIP Return Calculator
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '10px' }}>
          Estimate the wealth your monthly SIP can create over time.
        </p>
        <div className="calc-field">
          <label>Monthly Investment <span className="val">{fmt(amount)}</span></label>
          <input
            type="range"
            min="500"
            max="100000"
            step="500"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, var(--gold) ${((amount - 500) / (100000 - 500)) * 100}%, var(--border) ${((amount - 500) / (100000 - 500)) * 100}%)`
            }}
          />
        </div>
        <div className="calc-field">
          <label>Expected Return (% p.a.) <span className="val">{rate}%</span></label>
          <input
            type="range"
            min="6"
            max="20"
            step="0.5"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, var(--gold) ${((rate - 6) / (20 - 6)) * 100}%, var(--border) ${((rate - 6) / (20 - 6)) * 100}%)`
            }}
          />
        </div>
        <div className="calc-field">
          <label>Investment Period <span className="val">{years} yrs</span></label>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, var(--gold) ${((years - 1) / (30 - 1)) * 100}%, var(--border) ${((years - 1) / (30 - 1)) * 100}%)`
            }}
          />
        </div>
      </div>
      <div className="calc-result">
        <div className="calc-result-card">
          <h4>Total Corpus at Maturity</h4>
          <div className="result-main">{fmt(corpus)}</div>
          <div className="result-label">Estimated maturity value</div>
        </div>
        <div className="result-breakdown">
          <h5>Breakdown</h5>
          <div className="breakdown-row"><span>Total Invested</span><strong>{fmt(invested)}</strong></div>
          <div className="breakdown-row"><span>Wealth Gained</span><strong style={{ color: 'var(--gold)' }}>{fmt(gain)}</strong></div>
          <div className="breakdown-row"><span>Returns Multiplier</span><strong>{mult.toFixed(2)}×</strong></div>
        </div>
        <div className="calc-chart-wrap">
          <svg className="donut-svg" viewBox="0 0 100 100">
            <circle className="donut-track" cx="50" cy="50" r="41" />
            <circle
              className="donut-fill"
              cx="50"
              cy="50"
              r="41"
              strokeDasharray="258"
              strokeDashoffset={gainOffset}
            />
          </svg>
          <div className="donut-label">
            <span className="donut-pct">{gainPct}%</span>
            <span className="donut-text">Gains</span>
          </div>
        </div>
        <div className="chart-legend">
          <div className="legend-dot">Gains</div>
          <div className="legend-dot navy">Principal</div>
        </div>
      </div>
    </div>
  );
}
