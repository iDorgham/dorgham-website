'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverScaleProps {
  children: ReactNode;
  scale?: number;
  duration?: number;
  className?: string;
  as?: 'div' | 'span' | 'a' | 'button';
}

export default function HoverScale({ 
  children, 
  scale = 1.05, 
  duration = 0.2,
  className = '',
  as = 'div'
}: HoverScaleProps) {
  const MotionComponent = motion[as] as any;

  return (
    <MotionComponent
      whileHover={{ 
        scale,
        transition: { duration }
      }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}