import { motion } from "motion/react";

const testimonials = [
  {
    quote: "“Before Zeqah, I didn’t even know what subjects I needed. Now I feel like I’m finally on track and confident about my future.”",
    author: "Adebayo K.",
    role: "SS3 Student",
    avatar: "https://framerusercontent.com/images/0jetkKMakREJ7zI7I5SF19mOF6g.png",
  },
  {
    quote: "“It feels like someone is guiding me step by step. I no longer miss deadlines, and my parents are finally at peace.”",
    author: "Chidi O.",
    role: "SS2 Student",
    avatar: "https://framerusercontent.com/images/50xDZBfiBDoMRHZYhskYeWI9Pg.png",
  },
  {
    quote: "“The personalized roadmap is a lifesaver. I know exactly what JAMB combinations I need for my dream course.”",
    author: "Fatima S.",
    role: "SS3 Student",
    avatar: "https://framerusercontent.com/images/LcKhCOrQPeE8qwu3FPZsovsNg.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-40 px-5 md:px-13 border-b border-border-custom overflow-hidden">
      <div className="max-w-[1336px] mx-auto border-x border-border-custom">
        <div className="px-10 md:px-15 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 border border-border-custom rounded-sm mb-8">
            <span className="text-[10px] font-mono tracking-wider text-white uppercase">THE TEAM</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal tracking-[-0.01em] leading-[1.1] text-white">
            Meet the people behind<br />
            <span className="text-secondary-text">Zeqah's magic</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`p-10 md:p-15 flex flex-col justify-between gap-10 group cursor-pointer hover:bg-white/5 transition-all duration-300 ${
                i !== testimonials.length - 1 ? "border-b md:border-b-0 md:border-r border-border-custom" : ""
              }`}
            >
              <h4 className="text-xl font-display font-normal leading-[1.2] tracking-[-0.01em] text-white">
                {t.quote}
              </h4>
              <div className="flex items-center gap-3">
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  className="w-11 h-11 rounded-full bg-white grayscale group-hover:grayscale-0 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-sm font-medium text-accent tracking-[-0.01em]">{t.author}</p>
                  <p className="text-[10px] text-muted-text font-mono uppercase tracking-[-0.01em]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
