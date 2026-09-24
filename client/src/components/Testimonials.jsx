import React, { useEffect } from 'react';

const testimonials = [
  {
    avatar: 'RD',
    name: 'Rajesh Desai',
    detail: 'Diamond Merchant, Surat · Client since 2017',
    text: 'I had been putting off financial planning for years. Dhanlaxmi advisor sat with me for two hours, understood my goals, and designed a complete plan — SIP, term insurance, and a retirement corpus. Today, 7 years later, my portfolio has grown beautifully. The guidance was genuinely life-changing.'
  },
  {
    avatar: 'PM',
    name: 'Priya Mehta',
    detail: 'NRI Client, London UK · Client since 2019',
    text: 'As an NRI in the UK, finding a reliable financial advisor in India was always my worry. Dhanlaxmi sorted my NRI investments, repatriation-friendly insurance, and tax planning — all remotely and flawlessly. They feel like a trusted family advisor, not just an agent.'
  },
  {
    avatar: 'NK',
    name: 'Nirav Kothari',
    detail: 'Textile Entrepreneur, Surat · Client since 2016',
    text: 'I started a ₹5,000 SIP on their recommendation when I was 26. Now at 34, I have a corpus I never imagined possible. They also sorted our family mediclaim and my wife\'s term plan. The claim support during hospitalization last year was absolutely outstanding — they handled everything.'
  }
];

export default function Testimonials() {
  useEffect(() => {
    const cards = document.querySelectorAll('.testimonial-card');
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const dx = e.clientX - rect.left - rect.width / 2;
      const dy = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(1000px) rotateY(${dx / 30}deg) rotateX(${-dy / 30}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    const handleMouseLeave = (card) => {
      card.style.transform = `perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)`;
    };

    cards.forEach(card => {
      card.onmousemove = (e) => handleMouseMove(e, card);
      card.onmouseleave = () => handleMouseLeave(card);
    });
  }, []);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-header">
        <div className="section-tag">Client Stories</div>
        <h2 className="section-title">2,000+ Families Trust Us<br />With Their Financial Future</h2>
        <p className="section-sub">Real families, real results. Here's what our clients across Surat, Ahmedabad, and beyond have to say.</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card reveal" key={i}>
            <span className="quote-mark">"</span>
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.avatar}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-detail">{t.detail}</div>
              </div>
              <div className="verified">✔ Verified</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
