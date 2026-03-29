import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-40 px-5 md:px-13 border-b border-border-custom bg-accent">
      <div className="max-w-[1336px] mx-auto border-x border-black/10 p-10 md:p-20 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-normal tracking-[-0.02em] leading-[1.1] text-background mb-10">
          Stop feeling lost.<br />
          Start moving forward.
        </h2>
        <a 
          href="#" 
          className="inline-flex items-center gap-2 px-8 py-5 bg-background text-white font-medium rounded-sm hover:opacity-90 transition-opacity text-lg"
        >
          Start Your Journey
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
