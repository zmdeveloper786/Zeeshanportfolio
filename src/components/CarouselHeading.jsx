import React, { useState, useEffect } from "react";

const CarouselHeading = () => {
  const headings = [
    "Web Developer",
    "UI/UX Designer",
    "Web Designer",
 
  ];

  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    let interval;
    if (!isErasing) {
      // Typing effect
      interval = setInterval(() => {
        setCurrentText((prevText) => {
          const nextText = headings[currentIndex].slice(0, prevText.length + 1);
          if (nextText === headings[currentIndex]) {
            clearInterval(interval); // Stop typing when done
            setTimeout(() => {
              setIsErasing(true); // Start erasing after a short delay
            }, 1000); // Delay before erasing starts
          }
          return nextText;
        });
      }, 100);
    } else {
      // Backspace effect
      interval = setInterval(() => {
        setCurrentText((prevText) => {
          const nextText = prevText.slice(0, prevText.length - 1);
          if (nextText === "") {
            clearInterval(interval); // Stop erasing when done
            setIsErasing(false); // Start typing again
            setCurrentIndex((prevIndex) => (prevIndex + 1) % headings.length); // Change heading
          }
          return nextText;
        });
      }, 50);
    }

    return () => clearInterval(interval); // Clear interval when component is unmounted
  }, [currentText, isErasing, currentIndex, headings]);

  return (
  <div className="relative w-full h-16 sm:h-20 md:h-24">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
    {currentText}
  </h1>
</div>

  );
};

export default CarouselHeading;
