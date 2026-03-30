import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { LogOut, Globe, User, Loader2 } from "lucide-react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<{ first_name: string; last_name: string; website: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      if (!supabase) {
        console.warn("Supabase is not configured. Redirecting to signin.");
        navigate("/signin");
        return;
      }
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        navigate("/signin");
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("first_name, last_name, website")
        .eq("id", user.id)
        .single();

      if (error) {
        throw error;
      }

      setProfile(data);
    } catch (error) {
      console.error("Error loading user data:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleLogout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-accent animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      <div className="hero-gradient pointer-events-none fixed inset-0"></div>
      
      <nav className="relative z-10 border-b border-white/[0.08] bg-[#0a0a0a]/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <span className="text-lg font-bold text-background">Z</span>
              </div>
              <span>Zeqah</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm text-white-64 hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold">Welcome, {profile?.first_name || 'User'}!</h1>
            <p className="text-white-64 text-lg">Here is your account information saved on Supabase.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 text-accent mb-2">
                <User className="w-5 h-5" />
                <h2 className="font-medium">Profile Details</h2>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-white-40 font-semibold">Full Name</p>
                <p className="text-lg">{profile?.first_name} {profile?.last_name}</p>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 text-accent mb-2">
                <Globe className="w-5 h-5" />
                <h2 className="font-medium">Website</h2>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-white-40 font-semibold">Saved URL</p>
                {profile?.website ? (
                  <a 
                    href={profile.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg text-accent hover:underline block truncate"
                  >
                    {profile.website}
                  </a>
                ) : (
                  <p className="text-lg text-white-40 italic">No website provided</p>
                )}
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-8 border border-white/[0.08] bg-white/[0.02]">
            <div className="max-w-xl">
              <h2 className="text-xl font-medium mb-4">Account Verified</h2>
              <p className="text-white-64 leading-relaxed mb-6">
                Your credentials are secure. Any updates you make here will be synced 
                across your session. Refreshing the page will persist this data 
                seamlessly from the Zeqah cloud database.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-white/[0.05] border border-white/[0.1] rounded-lg hover:bg-white/[0.1] transition-all text-sm font-medium"
              >
                Refresh Data
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
