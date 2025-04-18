import React, { useEffect, useState } from 'react';
import SquareGroup from './SquareGroup';
import { isWeekPassed, calculateWeeksLived } from '../utils/dateCalculations';

interface LifeGridProps {
  birthDate: Date;
}

const LifeGrid: React.FC<LifeGridProps> = ({ birthDate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const totalWeeks = 4000;
  const weeksLived = calculateWeeksLived(birthDate);
  
  const groupIndices = Array.from(
    { length: Math.ceil(totalWeeks / 20) }, 
    (_, i) => i * 20
  );
  
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, [birthDate]);

  return (
    <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>      
      <div className="flex flex-wrap bg-[#FFF348] p-8 rounded mb-12 max-w-[900px] mx-auto justify-center">
        {groupIndices.map(startIndex => (
          <SquareGroup 
            key={startIndex}
            startIndex={startIndex}
            birthDate={birthDate}
            isDayPassed={isWeekPassed}
          />
        ))}
      </div>
    </div>
  );
};

export default LifeGrid;