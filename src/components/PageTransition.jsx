// src/components/PageTransition.jsx
import React, { useEffect, useState } from 'react';
import './PageTransition.css'; // Ensure you have the CSS for animations

const PageTransition = ({ children, onAnimationEnd }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onAnimationEnd(); // Call the callback to indicate the animation has ended
    }, 1000); // Duration of the animation

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className={`page-transition ${isAnimating ? 'fade-in' : 'fade-out'}`}>
      {children}
    </div>
  );
};

export default PageTransition;
