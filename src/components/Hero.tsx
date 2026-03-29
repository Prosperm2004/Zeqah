import { motion } from "motion/react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.12, 0.23, 0.17, 0.99],
      },
    },
  };

  return (
    <section className="pt-[74px] flex flex-col md:flex-row w-full min-h-[800px] px-5 md:px-13">
      <div className="flex-1 flex flex-col justify-center p-10 md:p-15 border-l border-border-custom max-w-[668px]">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.12, 0.23, 0.17, 0.99] }}
          className="inline-flex items-center gap-2 px-2.5 py-1.5 border border-border-custom rounded-sm mb-10 w-fit"
        >
          <div className="w-1 h-1 bg-accent" />
          <span className="text-[10px] font-mono tracking-wider text-white uppercase">NOW LIVE IN BETA</span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-2 mb-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-normal leading-[1.0] tracking-[-0.01em] text-white">
            <motion.span variants={itemVariants} className="inline-block mr-4">Stop guessing</motion.span>
            <motion.span variants={itemVariants} className="inline-block">your future.</motion.span>
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-normal leading-[1.0] tracking-[-0.01em] text-secondary-text">
            <motion.span variants={itemVariants} className="inline-block mr-4">Start following</motion.span>
            <motion.span variants={itemVariants} className="inline-block">a clear path.</motion.span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl text-muted-text max-w-[548px] mb-10 leading-[1.4] tracking-[-0.01em]"
        >
          Zeqah guides you from secondary school to university — showing you exactly what to do, when to do it, and how to do it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.5, ease: [0.12, 0.23, 0.17, 0.99] }}
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-4 bg-accent text-background font-medium rounded-sm hover:opacity-90 transition-opacity"
          >
            Get Started Free
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 2, ease: [0.12, 0.23, 0.17, 0.99] }}
        className="flex-1 relative min-h-[400px] md:min-h-full overflow-hidden"
      >
        <img 
          src="https://framerusercontent.com/images/tOSxMrVYGDi3hlwbxeZ7gVRjJxY.webp?width=1336&height=1642" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
