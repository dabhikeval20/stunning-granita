import React, { useState } from 'react';

function fmt(n) {
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + 'Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + 'L';
  return '₹' + n.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function PremiumCalculator() {
  const [age, setAge] = useState(32);
  const [sum, setSum] = useState(10000000);
  const [tenure, setTenure] = useState(20);

  const baseRate = (0.0004 + (age - 18) * 0.000015) * (sum / 10000000);
  const annual = Math.round(baseRate * sum * 100) / 100;
  const daily = (annual / 365).toFixed(1);
  const totalPaid = annual * tenure;

  return (
    <div className="calc-body" id="calc-insurance">
      <div className="calc-inputs">
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '22px', color: 'var(--navy)', marginBottom: '8px' }}>
          Term Plan Premium Estimator
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '10px' }}>
          Get a rough idea of your annual term insurance premium.
        </p>
        <div className="calc-field">
          <label>Your Age <span className="val">{age} yrs</span></label>
          <input
            type="range"
            min="18"
            max="60"
            step="1"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, var(--gold) ${((age - 18) / (60 - 18)) * 100}%, var(--border) ${((age - 18) / (60 - 18)) * 100}%)`
            }}
          />
        </div>
        <div className="calc-field">
          <label>Sum Assured <span className="val">{fmt(sum)}</span></label>
          <input
            type="range"
            min="2500000"
            max="50000000"
            step="2500000"
            value={sum}
            onChange={(e) => setSum(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, var(--gold) ${((sum - 2500000) / (50000000 - 2500000)) * 100}%, var(--border) ${((sum - 2500000) / (50000000 - 2500000)) * 100}%)`
            }}
          />
        </div>
        <div className="calc-field">
          <label>Policy Tenure <span className="val">{tenure} yrs</span></label>
          <input
            type="range"
            min="10"
            max="40"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            style={{
              background: `linear-gradient(to right, var(--gold) ${((tenure - 10) / (40 - 10)) * 100}%, var(--border) ${((tenure - 10) / (40 - 10)) * 100}%)`
            }}
          />
        </div>
      </div>
      <div className="calc-result">
        <div className="calc-result-card">
          <h4>Estimated Annual Premium</h4>
          <div className="result-main">{fmt(annual)}</div>
          <div className="result-label">Approximate (male, non-smoker)</div>
        </div>
        <div className="result-breakdown">
          <h5>Coverage Details</h5>
          <div className="breakdown-row"><span>Sum Assured</span><strong>{fmt(sum)}</strong></div>
          <div className="breakdown-row"><span>Daily Cost</span><strong>₹{daily}/day</strong></div>
          <div className="breakdown-row"><span>Total Premium Paid</span><strong>{fmt(totalPaid)} over {tenure}yrs</strong></div>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '12px', fontStyle: 'italic' }}>
          *Indicative only. Contact us for exact quotes. Premiums vary by insurer, health status, and smoking habits.
        </p>
      </div>
    </div>
  );
}
