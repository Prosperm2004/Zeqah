import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="px-5 md:px-13 border-t border-border-custom">
      <div className="max-w-[1336px] mx-auto border-x border-border-custom p-10 md:p-15 flex flex-col md:flex-row justify-between gap-20 relative overflow-hidden">
        <div className="flex flex-col gap-6 max-w-sm z-10">
          <a href="/" className="text-2xl font-display font-bold tracking-tighter text-white">
            Zeqah
          </a>
          <p className="text-muted-text leading-[1.4] tracking-[-0.01em]">
            Guiding you from secondary school to university with clarity and confidence.
          </p>
          <p className="text-sm text-secondary-text tracking-[-0.01em]">
            © Copyright 2026 Zeqah. All rights reserved.
          </p>
        </div>

        <div className="flex gap-20 z-10">
          <div className="flex flex-col gap-6">
            <p className="font-medium text-white tracking-[-0.01em]">About</p>
            <div className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-sm text-secondary-text hover:text-accent transition-colors tracking-[-0.01em]">How it works</a>
              <a href="#faq" className="text-sm text-secondary-text hover:text-accent transition-colors tracking-[-0.01em]">FAQ</a>
              <a href="#" className="text-sm text-secondary-text hover:text-accent transition-colors tracking-[-0.01em]">Contact</a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-medium text-white tracking-[-0.01em]">Legal</p>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm text-secondary-text hover:text-accent transition-colors tracking-[-0.01em]">Terms of Service</a>
              <a href="#" className="text-sm text-secondary-text hover:text-accent transition-colors tracking-[-0.01em]">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Large decorative logo in background */}
        <div className="absolute -bottom-20 -right-20 opacity-[0.02] pointer-events-none select-none">
          <h2 className="text-[300px] font-display font-bold leading-none tracking-[-0.02em] text-white">
            Zeqah
          </h2>
        </div>
      </div>
    </footer>
  );
}
