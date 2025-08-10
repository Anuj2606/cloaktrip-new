'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'app/styles/nprogress.css'; 

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleStart = () => {
      NProgress.start();
    };

    const handleDone = () => {
      NProgress.done();
    };

    // These events don't exist in app router, so we manually use history
    // For now, we'll just run NProgress during mount
    handleStart();
    const timeout = setTimeout(handleDone, 300); // Match your animation duration

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
