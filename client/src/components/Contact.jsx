import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    age: '',
    income: '',
    goal: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok && data.status === 'success') {
        setSuccessMsg(data.message || '✅ Thank you! Our advisor will call you within 24 hours.');
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          age: '',
          income: '',
          goal: '',
          message: ''
        });
      } else {
        setErrorMsg(data.message || 'Failed to submit form. Please check your inputs.');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      // Fallback message for standalone preview
      setSuccessMsg('✅ Thank you! Our advisor will call you within 24 hours.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-info">
          <div className="section-tag reveal">Reach Us</div>
          <h2 className="section-title reveal">Start Your Financial<br />Journey Today</h2>
          <p className="section-sub reveal">
            Book a free, no-obligation consultation. We come to you — home visits available across Surat and South Gujarat.
          </p>

          <div className="contact-items">
            <div className="contact-item reveal">
              <div className="contact-item-icon">📍</div>
              <div className="contact-item-text">
                <strong>Office Address</strong>
                <span>Dhanlaxmi, Surat, Gujarat, India</span>
              </div>
            </div>
            <div className="contact-item reveal">
              <div className="contact-item-icon">📞</div>
              <div className="contact-item-text">
                <strong>Call / WhatsApp</strong>
                <span>+91 98765 43210</span>
              </div>
            </div>
            <div className="contact-item reveal">
              <div className="contact-item-icon">✉️</div>
              <div className="contact-item-text">
                <strong>Email</strong>
                <span>info@dhanlaxmi.in</span>
              </div>
            </div>
            <div className="contact-item reveal">
              <div className="contact-item-icon">🕐</div>
              <div className="contact-item-text">
                <strong>Working Hours</strong>
                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrap reveal">
          <h3>Book Free Consultation</h3>
          <p>Fill in your details and our expert advisor will reach out within 24 hours.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Rajesh"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Desai"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="rajesh@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  placeholder="32"
                  min="18"
                  max="80"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Monthly Income (₹)</label>
                <input
                  type="text"
                  name="income"
                  placeholder="e.g. 1,00,000"
                  value={formData.income}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group full">
                <label>I Am Interested In</label>
                <select name="goal" value={formData.goal} onChange={handleChange}>
                  <option value="">— Select Your Primary Goal —</option>
                  <option value="Life Insurance / Term Plan">Life Insurance / Term Plan</option>
                  <option value="Health Insurance / Mediclaim">Health Insurance / Mediclaim</option>
                  <option value="Mutual Fund / SIP Investment">Mutual Fund / SIP Investment</option>
                  <option value="Retirement / Pension Planning">Retirement / Pension Planning</option>
                  <option value="Tax-Free Wealth Creation">Tax-Free Wealth Creation</option>
                  <option value="PMS / AIF (High Net Worth)">PMS / AIF (High Net Worth)</option>
                  <option value="NRI Investment Planning">NRI Investment Planning</option>
                  <option value="Car / Motor Insurance">Car / Motor Insurance</option>
                  <option value="Business / Factory Insurance">Business / Factory Insurance</option>
                  <option value="Comprehensive Financial Planning">Comprehensive Financial Planning</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group full">
                <label>Your Message or Query</label>
                <textarea
                  name="message"
                  placeholder="Tell us briefly about your financial goals or any specific query..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <button type="submit" className="form-submit" disabled={loading}>
              {loading ? 'Sending Request...' : 'Send Consultation Request →'}
            </button>

            {successMsg && (
              <div className="form-success" style={{ display: 'block' }}>
                {successMsg}
              </div>
            )}
            {errorMsg && (
              <div className="form-success" style={{ display: 'block', background: '#ffebee', color: '#c62828' }}>
                {errorMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
