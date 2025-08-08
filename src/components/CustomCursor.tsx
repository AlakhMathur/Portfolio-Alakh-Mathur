import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-doraemon"
        style={{
          left: `${position.x - 16}px`,
          top: `${position.y - 16}px`,
        }}
      />
      <div
        className="cursor-doraemon-outline"
        style={{
          left: `${position.x - 24}px`,
          top: `${position.y - 24}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;
