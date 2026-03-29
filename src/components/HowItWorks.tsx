import { motion } from "motion/react";
import { UserPlus, Map, CheckCircle, GraduationCap } from "lucide-react";

const steps = [
  {
    title: "1. Choose your path",
    description: "Select your academic direction (Science, Art, or Commercial) based on your interests.",
    icon: UserPlus,
  },
  {
    title: "2. Get your roadmap",
    description: "Zeqah builds a personalized journey for you, mapping out every milestone.",
    icon: Map,
  },
  {
    title: "3. Follow your steps",
    description: "Complete tasks, track your progress, and stay ahead of every requirement.",
    icon: CheckCircle,
  },
  {
    title: "4. Reach your goal",
    description: "Move confidently toward university admission with everything in place.",
    icon: GraduationCap,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-40 px-5 md:px-13 border-b border-border-custom bg-surface/10">
      <div className="max-w-[1336px] mx-auto border-x border-border-custom">
        <div className="px-10 md:px-15 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 border border-border-custom rounded-sm mb-8">
            <span className="text-[10px] font-mono tracking-wider text-white uppercase">THE PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal tracking-[-0.01em] leading-[1.1] text-white">
            Your journey, simplified
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`p-10 flex flex-col gap-8 ${
                i !== steps.length - 1 ? "border-b lg:border-b-0 lg:border-r border-border-custom" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <step.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-display font-medium text-white tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
