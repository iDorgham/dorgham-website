'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  rounded?: boolean;
}

export default function Skeleton({ 
  width = '100%', 
  height = '20px', 
  className = '',
  rounded = true
}: SkeletonProps) {
  return (
    <motion.div
      className={`bg-gray-700 ${rounded ? 'rounded' : ''} ${className}`}
      style={{ width, height }}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

interface SkeletonCardProps {
  className?: string;
}

export function SkeletonCard({ className = '' }: SkeletonCardProps) {
  return (
    <div className={`bg-gray-800 rounded-lg p-6 ${className}`}>
      <Skeleton height="24px" className="mb-4" />
      <Skeleton height="16px" className="mb-2" />
      <Skeleton height="16px" className="mb-2" />
      <Skeleton height="16px" width="60%" />
    </div>
  );
}
