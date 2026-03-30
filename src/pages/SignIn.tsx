import React from "react";
import { Link } from "react-router-dom";
import SigninForm from "../components/SigninForm";

export default function SignIn() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-4 py-20 overflow-hidden">
      <div className="hero-gradient pointer-events-none fixed inset-0"></div>
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_60%,rgba(191,245,73,0.03),transparent)]"></div>
      <div 
        className="pointer-events-none fixed inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }}
      ></div>
      
      <div className="relative z-10 w-full max-w-[420px] mb-8 text-center space-y-6">
        <div className="flex justify-center flex-col items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent shadow-[0_0_20px_rgba(191,245,73,0.3)]">
              <span className="text-2xl font-bold text-background">Z</span>
            </div>
            <span>Zeqah</span>
          </Link>
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-white">Welcome back</h1>
            <p className="text-base text-white-64">Sign in to your account to continue</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[420px]">
        <SigninForm />
        <div className="mt-8 text-center text-sm text-white-40">
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold text-accent hover:text-accent/80 transition-colors">
            Sign up
          </Link>
        </div>
      </div>

      <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
