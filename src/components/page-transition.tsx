"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 1.2,
          ease: "easeInOut"
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: 'circle(0% at 50% 50%)',
          },
          animateState: {
            opacity: 1,
            clipPath: ['circle(0% at 50% 50%)', 'circle(110% at 50% 50%)'],
            transition: {
              duration: 1.2,
              ease: "easeOut"
            }
          },
          exitState: {
            clipPath: ['circle(110% at 50% 50%)', 'circle(0% at 50% 50%)'],
            transition: {
              duration: 0.8,
              ease: "easeIn"
            }
          },
        }}
        className="relative h-full"
      >
        {children}
        
        {/* Add animated gradient overlay during transition */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
