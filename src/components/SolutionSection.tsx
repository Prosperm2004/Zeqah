import { motion } from "motion/react";

export default function SolutionSection() {
  return (
    <section className="py-20 md:py-40 px-5 md:px-13 border-b border-border-custom">
      <div className="max-w-[1336px] mx-auto border-x border-border-custom flex flex-col md:flex-row items-center">
        <div className="flex-1 p-10 md:p-20">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 border border-border-custom rounded-sm mb-8">
            <span className="text-[10px] font-mono tracking-wider text-accent uppercase">THE SOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal tracking-[-0.01em] leading-[1.1] text-white mb-8">
            Zeqah gives you a clear path — from day one
          </h2>
          <div className="space-y-6 text-lg text-secondary-text">
            <p>No more guessing. No more confusion.</p>
            <p>Just a step-by-step system designed for your success, guiding you through every milestone of your academic journey.</p>
          </div>
        </div>
        <div className="flex-1 p-10">
          <div className="aspect-square w-full max-w-md mx-auto bg-surface border border-border-custom rounded-xl relative overflow-hidden group cursor-pointer transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(191,245,73,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-10 border border-dashed border-accent/30 rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent text-background rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <p className="font-display font-medium text-white text-xl">Your Future, Secured</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
