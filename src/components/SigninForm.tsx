import React, { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Loader2, Mail, Lock } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function SigninForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'password' | 'magic-link'>('password');
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!supabase) {
      setError("Please configure Supabase environment variables to enable login.");
      setIsLoading(false);
      return;
    }

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (activeTab === 'password') {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
        setIsLoading(false);
      } else {
        navigate("/dashboard");
      }
    } else {
      const { error: magicLinkError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (magicLinkError) {
        setError(magicLinkError.message);
        setIsLoading(false);
      } else {
        setError("Magic link sent! Check your email.");
        setIsLoading(false);
      }
    }
  };

  const signInWithGoogle = async () => {
    if (!supabase) {
      setError("Supabase is not configured.");
      return;
    }
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
  };

  return (
    <div className="w-full glass-panel rounded-2xl p-6 md:p-8 space-y-6">
      <button
        onClick={signInWithGoogle}
        className="w-full flex items-center justify-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm font-medium hover:bg-white/[0.06] transition-all text-white"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Sign in with Google
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-white/[0.08]"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-[#0a0a0a] px-2 text-muted-foreground">or continue with email</span>
        </div>
      </div>

      <div className="flex p-1 bg-white/[0.03] border border-white/[0.08] rounded-xl">
        <button
          onClick={() => setActiveTab('password')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
            activeTab === 'password'
              ? 'bg-white/[0.08] text-white shadow-sm'
              : 'text-white-40 hover:text-white-64'
          }`}
        >
          Password
        </button>
        <button
          onClick={() => setActiveTab('magic-link')}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
            activeTab === 'magic-link'
              ? 'bg-white/[0.08] text-white shadow-sm'
              : 'text-white-40 hover:text-white-64'
          }`}
        >
          Magic Link
        </button>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        {error && (
          <div className={`p-3 rounded-lg border text-xs text-center ${
            error.includes("sent") 
            ? "bg-accent/10 border-accent/20 text-accent" 
            : "bg-destructive/10 border-destructive/20 text-destructive"
          }`}>
            {error}
          </div>
        )}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-white-64">
            Email
          </label>
          <input
            id="email"
            name="email"
            placeholder="you@example.com"
            type="email"
            required
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-white placeholder:text-white-40"
          />
        </div>

        {activeTab === 'password' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
               <label htmlFor="password" className="text-sm font-medium text-white-64">
                Password
              </label>
              <Link to="/forgot-password" title="Forgot password?" className="text-xs text-muted-foreground hover:text-accent transition-colors">
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              name="password"
              placeholder="Enter your password"
              type="password"
              required
              className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all text-white placeholder:text-white-40"
            />
          </div>
        )}

        <button
          disabled={isLoading}
          type="submit"
          className="w-full mt-2 bg-accent text-background font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 glow-green hover:bg-accent/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              {activeTab === 'password' ? 'Sign In' : 'Send Magic Link'}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
