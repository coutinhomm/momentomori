import React, { useState, useEffect, useRef } from 'react';
import BirthDateInput from './components/BirthDateInput';
import LifeGrid from './components/LifeGrid';
import { Linkedin } from 'lucide-react';

function App() {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [calculatedDate, setCalculatedDate] = useState<Date | null>(null);
  const [showTitle, setShowTitle] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [darkScreen, setDarkScreen] = useState(true);
  const [exitGlitch, setExitGlitch] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setTimeout(() => setShowTitle(true), 500);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.25;
        audioRef.current.play().catch(error => {
          console.log('Audio playback failed:', error);
        });
      }
    }, 750);
    setTimeout(() => {
      setExitGlitch(true);
    }, 2000);
    setTimeout(() => {
      setShowTitle(false);
      setDarkScreen(false);
    }, 3500);
    setTimeout(() => setShowInput(true), 5000);
  }, []);

  const handleCalculate = (date: Date) => {
    setCalculatedDate(date);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-1000 ${darkScreen ? 'bg-black' : 'bg-base-100'}`}>
      <audio
        ref={audioRef}
        src="https://iciszibsfhqighxywueb.supabase.co/storage/v1/object/public/momento-mori//glitch.ogg"
        preload="auto"
      />
      {showTitle ? (
        <div className="flex-grow flex items-center justify-center">
          <div className="transition-opacity duration-1000 opacity-100">
            <h2 className="text-3xl font-bold text-center">
              <span className={`glitch text-secondary ${exitGlitch ? 'glitch-exit' : ''}`}>
                Remember that you have to die
                <span aria-hidden="true">Remember that you have to die</span>
                <span aria-hidden="true">Remember that you have to die</span>
              </span>
            </h2>
          </div>
        </div>
      ) : (
        <main className={`flex-grow flex flex-col ${calculatedDate ? 'overflow-auto' : 'overflow-hidden'}`}>
          <div className={`transition-opacity duration-1000 ${showInput ? 'opacity-100' : 'opacity-0'} 
            ${calculatedDate ? 'mt-8' : 'flex-grow flex items-center justify-center'}`}>
            <div className="container mx-auto px-4">
              <BirthDateInput 
                birthDate={birthDate}
                onBirthDateChange={setBirthDate}
                onCalculate={handleCalculate}
              />
              {calculatedDate && <LifeGrid birthDate={calculatedDate} />}
            </div>
          </div>
        </main>
      )}
      <div className="fixed bottom-4 right-4">
        <a
          href="https://www.linkedin.com/in/coutinhomm/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-circle btn-ghost btn-sm opacity-50 hover:opacity-100 transition-opacity"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

export default App;