import { motion } from "motion/react";

export default function VideoSection() {
  return (
    <section className="py-20 md:py-40 px-5 md:px-13 border-b border-border-custom">
      <div className="max-w-[1336px] mx-auto border-x border-border-custom pt-40">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.12, 0.23, 0.17, 0.99] }}
          className="text-center mb-20 px-10"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 border border-border-custom rounded-sm mb-8">
            <span className="text-[10px] font-mono tracking-wider text-accent uppercase">SEE HOW IT WORKS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal tracking-[-0.01em] leading-[1.1] text-white">
            See how Zeqah guides you<br />
            <span className="text-secondary-text">step by step</span>
          </h2>
          <p className="mt-6 text-muted-text text-lg">From choosing your subjects to securing admission.</p>
        </motion.div>

        <div className="px-10 pb-20">
          <div className="aspect-video w-full bg-[#1a1a1a] rounded-sm overflow-hidden border border-border-custom">
            <iframe 
              className="w-full h-full"
              src="https://fast.wistia.net/embed/iframe/tms7h1oyf9" 
              title="Zeqah Demo"
              allow="autoplay; fullscreen" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
