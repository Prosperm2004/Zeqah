import { motion } from "motion/react";
import { Target, MapPin, FolderOpen, Brain } from "lucide-react";

const features = [
  {
    title: "Personalized Roadmap",
    description: "Know exactly what to do at every stage of your journey, from SS1 to University admission.",
    icon: Target,
  },
  {
    title: "Admission Tracking",
    description: "Stay on top of WAEC, JAMB, and Post-UTME deadlines. Never miss a critical date again.",
    icon: MapPin,
  },
  {
    title: "Document Safety",
    description: "Keep all your important results, certificates, and admission letters organized and secure.",
    icon: FolderOpen,
  },
  {
    title: "Smart Guidance",
    description: "Get personalized recommendations based on your specific academic goals and chosen path.",
    icon: Brain,
  },
];

export default function Features() {
  return (
    <section className="border-b border-border-custom px-5 md:px-13">
      <div className="max-w-[1336px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-x border-border-custom">
        {features.map((feature, i) => (
          <div 
            key={i} 
            className={`p-10 md:p-12 flex flex-col gap-6 cursor-pointer hover:bg-white/5 transition-all duration-300 group ${
              i !== features.length - 1 ? "border-b lg:border-b-0 lg:border-r border-border-custom" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#232323] to-black group-hover:from-accent/20 group-hover:to-accent/5 transition-colors duration-300 flex items-center justify-center">
              <feature.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-display font-medium text-white tracking-[-0.01em] leading-[1.2]">
              {feature.title}
            </h3>
            <p className="text-muted-text text-sm leading-[1.4] tracking-[-0.01em]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
