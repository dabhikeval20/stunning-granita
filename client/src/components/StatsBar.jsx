import React, { useEffect, useRef, useState } from 'react';

function CounterItem({ target, suffix, label, icon }) {
  const [count, setCount] = useState(0);
  const itemRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            let current = 0;
            const step = target / 60;
            const timer = setInterval(() => {
              current = Math.min(current + step, target);
              setCount(current);
              if (current >= target) clearInterval(timer);
            }, 24);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, [target]);

  const displayVal = target >= 1000
    ? count.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : Math.ceil(count);

  return (
    <div className="stat-item reveal" ref={itemRef}>
      <span className="stat-icon">{icon}</span>
      <span className="stat-number">{displayVal}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-inner">
        <CounterItem icon="🏆" target={21} suffix="+" label="Years of Expertise" />
        <CounterItem icon="👨‍👩‍👧‍👦" target={2000} suffix="+" label="Families Secured" />
        <CounterItem icon="📂" target={15} suffix="+" label="Product Categories" />
        <CounterItem icon="🌍" target={12} suffix="+" label="States Served" />
      </div>
    </div>
  );
}
