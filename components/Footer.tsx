import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Mobile: gradient, Desktop: solid accent */}
      <div className="absolute inset-0 bg-black md:bg-accent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter text-white">
            X-TRAILER
          </div>
          
          <div className="text-gray-300 text-sm font-light">
            © {new Date().getFullYear()} X-Trailer. Все права защищены.
          </div>

          <div className="flex gap-6 items-center">
            <a 
                href="https://vk.com/krasiviepricepy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 font-medium hover:text-white transition-colors"
            >
                VK
            </a>
            <div className="w-px h-4 bg-gray-700 hidden md:block"></div>
            <a 
                href="mailto:info@x-trailer.com" 
                className="text-gray-300 hover:text-white transition-colors"
            >
                Email
            </a>
            <div className="w-px h-4 bg-gray-700 hidden md:block"></div>
            <a href="https://t.me/krasiviepricepy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};