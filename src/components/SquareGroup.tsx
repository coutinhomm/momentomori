import React from 'react';
import Square from './Square';

interface SquareGroupProps {
  startIndex: number;
  birthDate: Date;
  isDayPassed: (birthDate: Date, weekIndex: number) => boolean;
  isDownload?: boolean;
}

const SquareGroup: React.FC<SquareGroupProps> = ({ 
  startIndex, 
  birthDate, 
  isDayPassed,
  isDownload = false
}) => {
  const squares = Array.from({ length: 20 }, (_, i) => {
    const weekIndex = startIndex + i;
    if (weekIndex >= 4000) return null; // Don't render squares beyond 4000
    return (
      <Square 
        key={weekIndex} 
        passed={isDayPassed(birthDate, weekIndex)} 
        index={weekIndex}
        isDownload={isDownload}
      />
    );
  }).filter(Boolean); // Remove null values

  if (isDownload) {
    return <div className="flex">{squares}</div>;
  }

  return (
    <div className="flex">
      {squares}
    </div>
  );
};

export default SquareGroup;