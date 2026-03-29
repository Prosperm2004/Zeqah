import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "FREE",
    price: "$0",
    period: "/month",
    description: "Free Forever",
    features: [
      "2,000 words per week",
      "Works in any app",
      "AI auto-formatting",
      "GDPR compliant",
    ],
    buttonText: "Get Started",
    accent: false,
  },
  {
    name: "PRO",
    price: "$20",
    period: "/month",
    description: "Billed Monthly",
    features: [
      "Unlimited usage",
      "Lightning mode (Ultrafast, raw transcriptions)",
      "Custom transcription formatting",
      "Support for 100+ languages",
      "Custom snippets",
      "Agent Mode access (Beta)",
    ],
    buttonText: "Get Started",
    accent: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-40 px-5 md:px-13 border-b border-border-custom">
      <div className="max-w-[1336px] mx-auto border-x border-border-custom">
        <div className="px-10 md:px-15 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 border border-border-custom rounded-sm mb-8">
            <span className="text-[10px] font-mono tracking-wider text-white uppercase">NOW LIVE IN BETA</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal tracking-[-0.01em] leading-[1.1] text-white">
            Start writing<br />
            <span className="text-secondary-text">5x faster today</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`p-10 md:p-15 flex flex-col gap-10 ${
                i === 0 ? "border-b md:border-b-0 md:border-r border-border-custom" : "bg-[#212121]"
              }`}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-1.5 border border-border-custom rounded-sm w-fit">
                  <div className="w-1 h-1 bg-secondary-text" />
                  <span className="text-[10px] font-mono tracking-wider text-white">{plan.name}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h4 className="text-4xl font-display font-medium text-white tracking-[-0.01em]">{plan.price}</h4>
                  <span className="text-secondary-text text-sm tracking-[-0.01em]">{plan.period}</span>
                </div>
                <p className="text-secondary-text text-sm tracking-[-0.01em]">{plan.description}</p>
              </div>

              <a 
                href="#" 
                className={`w-full py-4 rounded-sm font-medium flex items-center justify-center gap-2 transition-opacity hover:opacity-90 ${
                  plan.accent ? "bg-accent text-background" : "bg-border-custom text-white"
                }`}
              >
                {plan.buttonText}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <div className="space-y-6">
                <p className="text-sm text-white tracking-[-0.01em]">
                  Get started instantly.<br />
                  <span className="text-muted-text">No credit card required</span>
                </p>
                <div className="h-px bg-border-custom w-full" />
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-sm bg-gradient-to-br from-[#232323] to-black flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm text-white leading-[1.3] tracking-[-0.01em]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
