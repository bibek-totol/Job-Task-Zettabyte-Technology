"use client";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PostCardProps } from "../type";
import { useState } from "react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

export default function PostCard({ id, title, body }: PostCardProps) {
  const [buttonColor, setButtonColor] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="relative bg-white dark:bg-gray-900 h-[230px] shadow-md rounded-lg p-5 hover:shadow-xl transition-shadow"
    >
    
        <h2 className="text-xl font-semibold mb-2 text-indigo-600 hover:underline">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{body}</p>
        <motion.button
          onMouseEnter={() => setButtonColor(true)}
          onMouseLeave={() => setButtonColor(false)}
          className={`shadow-lg ${buttonColor? "shadow-indigo-500" : "shadow-indigo-800"} relative overflow-hidden  bottom-2 right-4 mt-4 text-white py-2 px-4 rounded-md ${buttonColor ? "bg-gradient-to-r from-indigo-800 to-purple-600 " : "bg-indigo-500"} `}
        >
        

        <AnimatePresence>
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={
                buttonColor
                ? { scale: 70, opacity: 1 }
                : { scale: 0, opacity: 0 }
            }
          
            transition={{ duration: 0.8, ease: "linear" }}
            className={`absolute top-0 left-0 w-full h-full ${buttonColor && "bg-indigo-500 "} rounded`}
            style={{ transformOrigin: "bottom left", transformBox: "fill-box" }} 
          />
           </AnimatePresence>

          <Link href={`/posts/${id}`}>
          <span className="relative z-10 cursor-pointer">View Details</span>
          </Link>
        </motion.button>
    
    </motion.div>
  );
}
