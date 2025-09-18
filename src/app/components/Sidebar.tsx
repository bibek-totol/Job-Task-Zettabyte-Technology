"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  UserGroupIcon,
  DocumentTextIcon,
  Bars3Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Variants } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const navItems = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Posts", href: "/posts", icon: DocumentTextIcon },
  { name: "Users", href: "/users", icon: UserGroupIcon },
  { name: "Profile", href: "/profile", icon: UsersIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [isLarge, setIsLarge] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemVariants: Variants = {
    open: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    closed: {
      y: -1000,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <motion.aside
      animate={{ width: isLarge ? (isOpen ? 220 : 70) : 70 }}
      transition={{ duration: 0.4, ease: "linear" }}
      className="h-screen sticky top-0 left-0 flex flex-col border-r border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/70 backdrop-blur-lg shadow-lg"
    >
  
      <div className="flex items-center justify-between p-4">
        <motion.button
          whileTap={{ rotate: 360, transition: { duration: 0.3, ease: "linear" } }}
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
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2, ease: "linear", type: "tween" }}
                className={`flex items-center gap-6 px-4 py-2 rounded-md cursor-pointer transition-colors 
                  ${
                    active
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
              >
                <Icon className="h-6 w-6" />
                <AnimatePresence>
                  {isOpen && isLarge && (
                    <motion.span
                      variants={itemVariants}
                      animate={isOpen ? "open" : "closed"}
                      exit={"closed"}
                      className="font-medium"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800 relative bottom-20">
        {session ? (
          <button
          onClick={() => signOut({ callbackUrl: "/" })}
            className="cursor-pointer flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FcGoogle className="h-8 w-8" />
            {isOpen && isLarge && <span>Logout</span>}
          </button>
        ) : (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={() => signIn("google", { callbackUrl: "/profile" })}
           
          
            className="cursor-pointer flex items-center flex-col lg:flex-row gap-3 w-full px-3 py-2 rounded-md bg-gray-800 text-white"
          >
            <FcGoogle className="h-8 w-8" />
            {isOpen && isLarge && <span>Login with Google</span>}

          </motion.button>

        )}
      </div>
    </motion.aside>
  );
}
