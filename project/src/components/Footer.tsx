import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 mt-12 bg-neutral text-neutral-content">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Memento Mori. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-error" /> in the cyberpunk future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;