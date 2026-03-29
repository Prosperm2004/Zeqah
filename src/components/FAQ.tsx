import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is Zeqah only for Science students?",
    answer: "No, Zeqah is for everyone. Whether you're in Science, Art, or Commercial, we build a roadmap tailored to your specific path and goals.",
  },
  {
    question: "How does the admission tracking work?",
    answer: "We monitor the official schedules for WAEC, JAMB, and various universities. You'll get timely alerts for registration, exam dates, and result releases.",
  },
  {
    question: "Can I use Zeqah if I've already graduated secondary school?",
    answer: "Yes! If you're a gap-year student or currently seeking admission, Zeqah helps you stay organized and ensures you don't repeat past mistakes.",
  },
  {
    question: "Is my academic data safe?",
    answer: "Your privacy is our priority. All your documents and results are stored securely and are only accessible by you.",
  },
  {
    question: "Does Zeqah guarantee admission?",
    answer: "While we can't guarantee admission, we significantly increase your chances by ensuring you meet all requirements, follow the right path, and never miss a deadline.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-40 px-5 md:px-13 border-b border-border-custom">
      <div className="max-w-[1336px] mx-auto border-x border-border-custom">
        <div className="px-10 md:px-15 mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 border border-border-custom rounded-sm mb-8">
            <span className="text-[10px] font-mono tracking-wider text-white uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal tracking-[-0.01em] leading-[1.1] text-white">
            Frequently<br />
            <span className="text-secondary-text">asked questions</span>
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto px-10">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border-custom last:border-0">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-display font-medium text-white group-hover:text-accent transition-colors tracking-[-0.01em]">
                  {faq.question}
                </span>
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: openIndex === i ? 90 : 0 }}
                    className="absolute w-4 h-0.5 bg-accent rounded-full" 
                  />
                  <motion.div 
                    animate={{ rotate: openIndex === i ? 90 : 0, opacity: openIndex === i ? 0 : 1 }}
                    className="absolute w-0.5 h-4 bg-accent rounded-full" 
                  />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-muted-text leading-[1.4] tracking-[-0.01em]">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
