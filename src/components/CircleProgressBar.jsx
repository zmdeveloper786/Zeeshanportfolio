import React from "react";

const CircleProgressBar = ({ progress, size = 100, strokeWidth = 10, color = "#FACC15",text }) => {
  const radius = size / 2 - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  // Calculate the position of the highlighted point
  const angle = (progress / 100) * 360;
  const radians = (angle - 90) * (Math.PI / 180); // Adjust for starting position
  const highlightX = size / 2 + radius * Math.cos(radians);
  const highlightY = size / 2 + radius * Math.sin(radians);

  return (
    <div>
    <div className="relative flex items-center justify-center">
      {/* SVG Circle */}
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#1f2937" // Tailwind gray-800
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color} // Progress color
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-300"
          strokeLinecap="round"
        />
        {/* Highlighted Point */}
        <circle
          cx={highlightX}
          cy={highlightY}
          r={strokeWidth / 2} // Adjust size of the point
          fill={color}
        />
      </svg>
      {/* Percentage Display */}
      <div className="absolute text-white font-bold">
        <span className="text-xl">{progress}%</span>
      </div>
     
    </div>
    <div className="text-white text-center font-bold">
{text}
    </div>
  
    </div>
  );
};

export default CircleProgressBar;
