import { motion } from "motion/react";

const items = [
  { name: "WAEC", icon: "https://framerusercontent.com/images/SCfYTs2RdICvufFcOsC4Ig9MCM.png" },
  { name: "JAMB", icon: "https://framerusercontent.com/images/G5vHAcwJyCuESVQdt76oTgrQq0.png" },
  { name: "NECO", icon: "https://framerusercontent.com/images/ghl7zywsNxmbyYCaSSjzJ8v1IOU.png" },
  { name: "UNILAG", icon: "https://framerusercontent.com/images/3Exg2YDPiEWZF0v2qsFpwudrKgA.png" },
  { name: "UI", icon: "https://framerusercontent.com/images/nfheXmSkSAr3TO1PN7P1Cx9rbqs.png" },
  { name: "OAU", icon: "https://framerusercontent.com/images/NE5tgUfD8xAsLfCytBBNZwbZF0.png" },
  { name: "ABU", icon: "https://framerusercontent.com/images/NVyonyQKpeOPDDKBrh1nx1KeYdk.png" },
  { name: "UNN", icon: "https://framerusercontent.com/images/S3BvCNxLtR9W4hMCy2lAwd4rY.png" },
  { name: "LASU", icon: "https://framerusercontent.com/images/yyCTiduxK9nvrFYEXSHaKiLpdCI.png" },
  { name: "Covenant", icon: "https://framerusercontent.com/images/PqYgpyWpJRkfh9kzYOhVcnKAUzc.png" },
  { name: "Babcock", icon: "https://framerusercontent.com/images/GJ7NqgstfYxcogrjsgG2t0P7f8.png" },
  { name: "FUTA", icon: "https://framerusercontent.com/images/Fe3UaPdtNgCd0ddxAC0dWdXW7c.png" },
];

export default function Ticker() {
  return (
    <section className="border-y border-border-custom bg-surface h-20 flex items-center px-5 md:px-13 overflow-hidden">
      <div className="w-full max-w-[1336px] mx-auto flex items-center h-full">
        <div className="flex items-center gap-2.5 px-10 border-x border-border-custom h-full min-w-fit whitespace-nowrap">
          <div className="w-1 h-1 bg-accent" />
          <span className="text-[10px] font-mono tracking-wider text-white uppercase">SUPPORTED EXAMS & UNIVERSITIES</span>
        </div>
        
        <div className="flex-1 overflow-hidden relative h-full">
          <motion.div 
            className="flex items-center h-full"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...items, ...items].map((item, i) => (
              <div key={i} className="flex-shrink-0 px-8 h-20 border-r border-border-custom flex items-center justify-center">
                <span className="text-secondary-text font-display font-medium tracking-tight opacity-50 hover:opacity-100 transition-opacity cursor-default">
                  {item.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
