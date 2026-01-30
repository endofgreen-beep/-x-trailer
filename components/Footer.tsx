import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-500 md:bg-none md:bg-accent py-12">
      <div className="max-w-7xl mx-auto px-6">
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