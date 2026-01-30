import React, { useEffect, useRef } from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import { FadeIn } from './FadeIn';

const VkIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    stroke="none"
    className={className}
  >
     <path d="M15 2H9C3.48 2 2 3.48 2 9v6c0 5.52 1.48 7 7 7h6c5.52 0 7-1.48 7-7V9c0-5.52-1.48-7-7-7zm2.6 11.78c.36.34.82.88.94 1.15.17.38.1.58-.2.58h-1.5c-1.1 0-1.63-.57-1.98-1.2-.5-.9-.98-.9-1.24-.76-.23.13-.18.84-.18 1.25 0 .33-.06.84-.79.84-2.17 0-4.04-2.64-5.26-6.6-.08-.26.24-.26.4-.26h1.5c.37 0 .5.16.63.51.72 2.08 1.93 3.89 2.42 3.89.18 0 .26-.08.26-.53v-1.8c-.06-.8-.47-.88-.47-1.17 0-.14.12-.28.32-.28h2.05c.28 0 .38.14.38.45v2.33c0 .25.11.34.18.25.37-.51 1.28-2.6 1.28-2.6s.1-.25.41-.25h1.5c.44 0 .53.22.43.53-.35 1.07-2.07 3.52-2.3 3.86z" />
  </svg>
);

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const bg = bgRef.current;
      if (!section || !bg) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const offset = (progress - 0.5) * 80;
        bg.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
         <div
            ref={bgRef}
            className="absolute -inset-y-20 inset-x-0 w-full bg-cover bg-no-repeat bg-center opacity-40 will-change-transform"
            style={{
              backgroundImage: "url('https://iili.io/fri1D1p.jpg')",
              backgroundPosition: "center 35%"
            }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8">Свяжитесь с нами</h2>
                <p className="text-gray-300 text-lg font-light">
                Готовы обсудить конфигурацию вашего идеального прицепа? Свяжитесь с нами любым удобным способом.
                </p>
            </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <FadeIn delay={100} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/20 transition-all group">
                <div className="p-4 bg-white/10 rounded-full mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                    <Phone size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Телефон</h3>
                <a href="tel:+79518501526" className="text-xl font-semibold text-white hover:text-gray-300 transition-colors">
                    +7 (951) 850-15-26
                </a>
            </FadeIn>

            {/* Email */}
            <FadeIn delay={200} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/20 transition-all group">
                <div className="p-4 bg-white/10 rounded-full mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                    <Mail size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Email</h3>
                <a href="mailto:info@x-trailer.com" className="text-xl font-semibold text-white hover:text-gray-300 transition-colors">
                    info@x-trailer.com
                </a>
            </FadeIn>

            {/* VK Group */}
            <FadeIn delay={300} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/20 transition-all group">
                <div className="p-4 bg-white/10 rounded-full mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                    <VkIcon size={32} />
                </div>
                <h3 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">ВКонтакте</h3>
                <a
                    href="https://vk.com/krasiviepricepy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-white hover:text-gray-300 transition-colors"
                >
                    vk.com/krasiviepricepy
                </a>
            </FadeIn>

            {/* Telegram */}
            <FadeIn delay={400} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/20 transition-all group">
                <div className="p-4 bg-white/10 rounded-full mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                    <Send size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Telegram</h3>
                <a 
                    href="https://t.me/krasiviepricepy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-white hover:text-gray-300 transition-colors"
                >
                    @krasiviepricepy
                </a>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};