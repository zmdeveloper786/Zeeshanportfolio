import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorEnlarged, setCursorEnlarged] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  const [dotSize, setDotSize] = useState(10); // Default size of the dot
  const [outlineSize, setOutlineSize] = useState(40); // Default size of the outline

  // Update cursor position on mouse move
  const handleMouseMove = (e) => {
    setCursorPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };

  // Handle hover on links (for enlarging cursor)
  const handleMouseEnter = () => {
    setCursorEnlarged(true);
  };

  const handleMouseLeave = () => {
    setCursorEnlarged(false);
  };

  const handleMouseDown = () => {
    setCursorEnlarged(true);
  };

  const handleMouseUp = () => {
    setCursorEnlarged(false);
  };

  // Cursor visibility and animation based on the state
  useEffect(() => {
    // Update the dot size based on whether it's enlarged or not
    const newDotSize = cursorEnlarged ? 20 : 10; // Adjust the size as per need
    const newOutlineSize = cursorEnlarged ? 40 : 20; // Adjust the size of the outline

    setDotSize(newDotSize);
    setOutlineSize(newOutlineSize);

    // Add event listeners for mouse events
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', () => setCursorVisible(true));
    document.addEventListener('mouseleave', () => setCursorVisible(false));
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Mouseover and mouseout for anchor elements
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup listeners
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', () => setCursorVisible(true));
      document.removeEventListener('mouseleave', () => setCursorVisible(false));
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorEnlarged]);

  return (
    <>
      {cursorVisible && (
        <>
          <div
            className="cursor-dot"
            style={{
              top: `${cursorPosition.y}px`,
              left: `${cursorPosition.x}px`,
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              transform: 'translate(-50%, -50%)',
            }}
          ></div>
          <div
            className="cursor-dot-outline"
            style={{
              top: `${cursorPosition.y}px`,
              left: `${cursorPosition.x}px`,
              width: `${outlineSize}px`,
              height: `${outlineSize}px`,
              transform: 'translate(-50%, -50%)',
            }}
          ></div>
        </>
      )}
    </>
  );
};

export default Cursor;
