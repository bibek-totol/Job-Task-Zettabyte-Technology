"use client";
import { motion } from "framer-motion";

export default function PostCardSkeleton({ index }: { index: number }) {
  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-5"
    >
      <div className="animate-pulse space-y-3 h-40">
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
    </motion.div>
  );
}
