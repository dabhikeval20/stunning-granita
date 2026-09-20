import React, { useState } from 'react';
import SipCalculator from './SipCalculator';
import SwpCalculator from './SwpCalculator';
import PremiumCalculator from './PremiumCalculator';

export default function CalculatorContainer() {
  const [activeTab, setActiveTab] = useState('sip');

  return (
    <section className="calc-section" id="calculator">
      <div className="calc-wrapper">
        <div className="calc-header">
          <div className="section-tag reveal">Smart Tools</div>
          <h2 className="section-title reveal">
            Plan Your Financial Future<br />With Our Calculators
          </h2>
        </div>

        <div className="calc-tabs reveal">
          <button
            className={`calc-tab ${activeTab === 'sip' ? 'active' : ''}`}
            onClick={() => setActiveTab('sip')}
          >
            SIP Returns
          </button>
          <button
            className={`calc-tab ${activeTab === 'swp' ? 'active' : ''}`}
            onClick={() => setActiveTab('swp')}
          >
            SWP Planner
          </button>
          <button
            className={`calc-tab ${activeTab === 'insurance' ? 'active' : ''}`}
            onClick={() => setActiveTab('insurance')}
          >
            Premium Estimator
          </button>
        </div>

        {activeTab === 'sip' && <SipCalculator />}
        {activeTab === 'swp' && <SwpCalculator />}
        {activeTab === 'insurance' && <PremiumCalculator />}
      </div>
    </section>
  );
}
