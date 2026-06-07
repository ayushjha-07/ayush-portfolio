"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";
import CustomCursor from "./CustomCursor";
import FloatingRecruiterActions from "./FloatingRecruiterActions";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1.5 seconds loading experience
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <FloatingRecruiterActions />
      
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      
      {children}
    </>
  );
}
