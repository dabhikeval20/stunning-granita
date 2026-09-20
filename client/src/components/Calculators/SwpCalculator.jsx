import React, { useState } from 'react';

function fmt(n) {
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + 'Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + 'L';
  return '₹' + n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function SwpCalculator() {
  const [corpus, setCorpus] = useState(5000000);
  const [withdrawal, setWithdrawal] = useState(25000);
  const [rate, setRate] = useState(10);

  const C = parseFloat(corpus);
  const W = parseFloat(withdrawal);
  const r = parseFloat(rate) / 100 / 12;
  const monthlyInt = C * r;
  const surplus = monthlyInt - W;

  let yearsOutText = '∞ Years';
  let surplusColor = 'var(--gold-light)';
  let surplusText = '+' + fmt(surplus);

  if (surplus < 0) {
    const months = Math.log(W / (W - C * r)) / Math.log(1 + r);
    if (!isNaN(months) && isFinite(months)) {
      const yrs = Math.floor(months / 12);
      const mo = Math.floor(months % 12);
      yearsOutText = `${yrs}y ${mo}m`;
    } else {
      yearsOutText = '0 Years';
    }
    surplusColor = '#e53935';
    surplusText = fmt(surplus);
  }

  return (
    <div className="calc-body" id="calc-swp">
      <div className="calc-inputs">
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '22px', color: 'var(--navy)', marginBottom: '8px' }}>
          SWP — Monthly Income Planner
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '10px' }}>
          How long will your corpus last with systematic monthly withdrawals?
        </p>
        <div className="calc-field">
          <label>Retirement Corpus <span className="val">{fmt(corpus)}</span></label>
          <input
            type="range"
            min="500000"
            max="10000000"
            step="100000"
            value={corpus}
            onChange={(e) => setCorpus(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, var(--gold) ${((corpus - 500000) / (10000000 - 500000)) * 100}%, var(--border) ${((corpus - 500000) / (10000000 - 500000)) * 100}%)`
            }}
          />
        </div>
        <div className="calc-field">
          <label>Monthly Withdrawal <span className="val">{fmt(withdrawal)}</span></label>
          <input
            type="range"
            min="5000"
            max="200000"
            step="1000"
            value={withdrawal}
            onChange={(e) => setWithdrawal(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, var(--gold) ${((withdrawal - 5000) / (200000 - 5000)) * 100}%, var(--border) ${((withdrawal - 5000) / (200000 - 5000)) * 100}%)`
            }}
          />
        </div>
        <div className="calc-field">
          <label>Expected Return (% p.a.) <span className="val">{rate}%</span></label>
          <input
            type="range"
            min="4"
            max="16"
            step="0.5"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, var(--gold) ${((rate - 4) / (16 - 4)) * 100}%, var(--border) ${((rate - 4) / (16 - 4)) * 100}%)`
            }}
          />
        </div>
      </div>
      <div className="calc-result">
        <div className="calc-result-card">
          <h4>Corpus Sustains For</h4>
          <div className="result-main">{yearsOutText}</div>
          <div className="result-label">Withdrawal period</div>
        </div>
        <div className="result-breakdown">
          <h5>Monthly Summary</h5>
          <div className="breakdown-row"><span>Monthly Interest Earned</span><strong>{fmt(monthlyInt)}</strong></div>
          <div className="breakdown-row"><span>Monthly Withdrawal</span><strong>{fmt(withdrawal)}</strong></div>
          <div className="breakdown-row"><span>Net Monthly Surplus</span><strong style={{ color: surplusColor }}>{surplusText}</strong></div>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '12px', lineHeight: '1.6' }}>
          If monthly returns exceed withdrawal, your corpus keeps growing — true passive income.
        </p>
      </div>
    </div>
  );
}
