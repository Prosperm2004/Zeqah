import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border-custom h-[74px] flex items-center justify-center px-5 md:px-13">
      <div className="w-full max-w-[1336px] flex items-center justify-between border-x border-border-custom h-full px-10">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-display font-bold tracking-tighter text-white cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm">
            Zeqah
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm font-medium text-muted-text hover:text-white transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm px-2 py-1">Home</a>
          <a href="#pricing" className="text-sm font-medium text-muted-text hover:text-white transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm px-2 py-1">Pricing</a>
          <a href="#faq" className="text-sm font-medium text-muted-text hover:text-white transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded-sm px-2 py-1">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/signup" 
            className="hidden sm:block text-sm font-medium px-4 py-2 border border-border-custom rounded-sm hover:bg-white/5 transition-colors duration-200 text-white cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
          >
            Sign Up
          </Link>
          <Link 
            to="/signin" 
            className="text-sm font-medium px-4 py-2 bg-accent text-background rounded-sm hover:opacity-90 hover:shadow-[0_0_15px_rgba(191,245,73,0.3)] transition-all duration-200 flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:ring-accent focus-visible:outline-none"
          >
            Sign In
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
