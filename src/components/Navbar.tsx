import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-border-custom h-[74px] flex items-center justify-center px-5 md:px-13">
      <div className="w-full max-w-[1336px] flex items-center justify-between border-x border-border-custom h-full px-10">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-display font-bold tracking-tighter text-white">
            Zeqah
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm font-medium text-muted-text hover:text-white transition-colors">Home</a>
          <a href="#pricing" className="text-sm font-medium text-muted-text hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="text-sm font-medium text-muted-text hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="#" 
            className="hidden sm:block text-sm font-medium px-4 py-2 border border-border-custom rounded-sm hover:bg-white/5 transition-colors text-white"
          >
            Sign Up
          </a>
          <a 
            href="#" 
            className="text-sm font-medium px-4 py-2 bg-accent text-background rounded-sm hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            Sign In
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
