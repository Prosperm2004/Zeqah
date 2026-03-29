import { motion } from "motion/react";
import { AlertCircle, HelpCircle, Clock, XCircle } from "lucide-react";

const painPoints = [
  {
    title: "Uncertainty",
    description: "You're not sure which subjects to pick for your dream course.",
    icon: HelpCircle,
  },
  {
    title: "Conflicting Advice",
    description: "You hear different advice from everyone, leaving you more confused.",
    icon: AlertCircle,
  },
  {
    title: "Missed Deadlines",
    description: "You miss important dates for WAEC, JAMB, or Post-UTME registration.",
    icon: Clock,
  },
  {
    title: "Costly Mistakes",
    description: "You make errors in your application that cost you your admission.",
    icon: XCircle,
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-40 px-5 md:px-13 border-b border-border-custom bg-surface/30">
      <div className="max-w-[1336px] mx-auto border-x border-border-custom">
        <div className="px-10 md:px-15 mb-20">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 border border-border-custom rounded-sm mb-8">
            <span className="text-[10px] font-mono tracking-wider text-white uppercase">THE CHALLENGE</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal tracking-[-0.01em] leading-[1.1] text-white mb-6">
            Most students don’t fail because they’re not smart…
          </h2>
          <p className="text-xl text-secondary-text max-w-2xl">
            They fail because they don’t know what to do next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-border-custom">
          {painPoints.map((point, i) => (
            <div 
              key={i} 
              className={`p-10 flex flex-col gap-6 ${
                i !== painPoints.length - 1 ? "border-b lg:border-b-0 lg:border-r border-border-custom" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-sm bg-red-500/10 flex items-center justify-center">
                <point.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-display font-medium text-white tracking-tight">
                {point.title}
              </h3>
              <p className="text-muted-text text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
