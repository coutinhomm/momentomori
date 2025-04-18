import React, { useEffect, useState } from 'react';

interface SquareProps {
  passed: boolean;
  index: number;
  isDownload?: boolean;
}

const Square: React.FC<SquareProps> = ({ passed, index, isDownload = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (!isDownload) {
      const delay = Math.random() * 500 + (index * 1);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [index, isDownload]);

  if (isDownload) {
    return (
      <div 
        className={`w-2 h-2 m-[1px] ${passed ? 'bg-black' : 'bg-base-300'}`}
      />
    );
  }

  return (
    <div 
      className={`w-2 h-2 m-[1px] transition-all duration-100
        ${passed ? 'bg-black' : 'bg-base-300'}
        ${isVisible 
          ? 'opacity-100 transform scale-100' 
          : 'opacity-0 transform scale-0'
        }
      `}
      style={{
        transitionDelay: `${index * 1}ms`,
        transform: isVisible ? 'none' : 'translateY(-4px) scale(0.8)',
      }}
    />
  );
};

export default Square;