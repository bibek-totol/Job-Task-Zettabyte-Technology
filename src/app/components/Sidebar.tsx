"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  UserGroupIcon,
  DocumentTextIcon,
  SunIcon,
  MoonIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Variants } from "framer-motion";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Posts", href: "/posts", icon: DocumentTextIcon },
  { name: "Users", href: "/users", icon: UserGroupIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const { theme, setTheme } = useTheme();


  const itemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    closed: {
      y: -1000,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };
  

  return (
    <motion.aside
      animate={{ width: isOpen ? 220 : 70 }}
      transition={{ duration: 0.4, ease: "linear" }}
      className="h-screen sticky top-0 left-0 flex flex-col border-r border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg shadow-lg"
    >
    
      <div className="flex items-center justify-between p-4">
        <motion.button
          whileTap={{  rotate: 360, transition: { duration: 0.3, ease: "linear" }}}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Bars3Icon className="h-8 w-8 text-gray-600 dark:text-gray-300" />
        </motion.button>
      </div>

      
      <nav className="flex-1 flex flex-col gap-2 mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ x: 5, y: -5 }}
               
            
                transition={{ duration: 0.2, ease: "linear", type: "tween" }}
    
                className={`flex items-center gap-6 px-4 py-2 rounded-md cursor-pointer transition-colors 
                ${
                  active
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <Icon className="h-6 w-6" />
                <AnimatePresence >
                {isOpen && <motion.span
                 variants={itemVariants}
                 
                 animate={isOpen ? "open" : "closed"}
                
                 exit={"closed"}
                 className="font-medium">{item.name}</motion.span>}
                 </AnimatePresence>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 relative bottom-20">
        <motion.button
        whileTap={{ rotateY: 360 }} 
        transition={{ duration: 0.2, repeat:1, ease: "easeInOut" }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6" />
          ) : (
            <MoonIcon className="h-6 w-6" />
          )}
          {isOpen && <span>Toggle Theme</span>}
        </motion.button>
      </div>
    </motion.aside>
  );
}
