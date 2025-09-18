
"use client";

import SidebarLayout from "./components/SidebarLayout";
import { motion } from "framer-motion";
import { ChartBarIcon, UserGroupIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export default function HomePage() {

  const data = [
    {
      title: "Posts",
      value: "120",
      icon: DocumentTextIcon,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Users",
      value: "75",
      icon: UserGroupIcon,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Engagement",
      value: "89%",
      icon: ChartBarIcon,
      color: "from-blue-500 to-indigo-500",
    },
  ];


  return (
    <SidebarLayout>
      <div className="flex flex-col gap-8">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl p-8 shadow-lg"
        >
          <h1 className="text-3xl font-bold mb-2">Welcome Back! 🎉</h1>
          <p className="text-lg text-white/80">
            Here’s a quick snapshot of your dashboard.
          </p>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-xl shadow-md bg-gradient-to-r ${stat.color} text-white flex items-center gap-4`}
              >
                <Icon className="w-10 h-10" />
                <div>
                  <h3 className="text-lg font-semibold">{stat.title}</h3>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-20">
            Activity Overview
          </h2>
          <div className="flex items-end gap-4 h-40">
            {[30, 200, 80, 150, 90].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: h }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-1 bg-indigo-500 dark:bg-indigo-400 rounded-md "
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </SidebarLayout>
  );
}

