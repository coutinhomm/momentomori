import React, { useState, KeyboardEvent } from 'react';
import { formatDateForInput } from '../utils/dateCalculations';

interface BirthDateInputProps {
  birthDate: Date | null;
  onBirthDateChange: (date: Date) => void;
  onCalculate: (date: Date) => void;
}

const BirthDateInput: React.FC<BirthDateInputProps> = ({ 
  birthDate, 
  onBirthDateChange,
  onCalculate
}) => {
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    if (!isNaN(newDate.getTime())) {
      onBirthDateChange(newDate);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && birthDate) {
      handleCalculate();
    }
  };

  const playCalculateSound = () => {
    if (!hasCalculated) {
      const audio = new Audio('https://iciszibsfhqighxywueb.supabase.co/storage/v1/object/public/momento-mori//futurist.mp3');
      audio.volume = 0.1;
      audio.play().catch(error => {
        console.log('Audio playback failed:', error);
      });
      setHasCalculated(true);
    }
  };

  const handleCalculate = () => {
    if (birthDate) {
      playCalculateSound();
      onCalculate(birthDate);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-8 text-center">
      <h2 className="text-xl mb-8 text-black">Enter your date of birth to see how many weeks you've already lost</h2>
      
      <div className="flex gap-4 justify-center">
        <div className="form-control w-3/4">
          <input
            type="date"
            className="input input-bordered input-primary w-full [&::-webkit-calendar-picker-indicator]:hidden"
            value={birthDate ? formatDateForInput(birthDate) : ''}
            onChange={handleDateChange}
            onKeyPress={handleKeyPress}
            max={formatDateForInput(new Date())}
          />
        </div>
        <button
          className="btn btn-primary"
          disabled={!birthDate}
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default BirthDateInput;