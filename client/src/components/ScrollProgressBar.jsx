import React, { useEffect } from 'react';

export default function ScrollProgressBar() {
  useEffect(() => {
    const handleScroll = () => {
      const progressBar = document.getElementById('progress-bar');
      if (!progressBar) return;
      const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      progressBar.style.width = `${pct}%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div id="progress-bar"></div>;
}
