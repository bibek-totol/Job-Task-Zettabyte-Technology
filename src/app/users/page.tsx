"use client";

import SidebarLayout from "@/app/components/SidebarLayout";
import { useFetch } from "@/app/hooks/useFetch";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { User } from "../type";

export default function UsersPage() {
  const [endpoint, setEndpoint] = useState(
    "https://jsonplaceholder.typicode.com/users"
  );

  const { data: users, loading, error } = useFetch<User[]>(endpoint);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <SidebarLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
          Users
        </h1>

       
        <div className="flex gap-4">
          <button
            onClick={() =>
              setEndpoint("https://jsonplaceholder.typicode.com/users")
            }
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Load Users 
          </button>
          <button
            onClick={() =>
              setEndpoint("https://jsonplaceholder.typicode.com/invalid-posts")
            }
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Trigger Error 
          </button>
        </div>

        {loading && <p className="animate-pulse">Loading users...</p>}
        {error && <p className="text-red-500 font-semibold">{error}</p>}

        {users && !error && (
  <div className="overflow-x-auto rounded-md shadow">
    {/* Table for medium+ screens */}
    <table className="hidden md:table w-full border-collapse bg-white dark:bg-gray-900">
      <thead className="bg-gray-100 dark:bg-gray-800 text-left">
        <tr>
          <th className="px-6 py-3 font-semibold">Name</th>
          <th className="px-6 py-3 font-semibold">Email</th>
          <th className="px-6 py-3 font-semibold">Company</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <motion.tr
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setSelectedUser(user)}
            className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <td className="px-6 py-4 border-t">{user.name}</td>
            <td className="px-6 py-4 border-t text-indigo-600 dark:text-indigo-400">
              {user.email}
            </td>
            <td className="px-6 py-4 border-t">{user.company.name}</td>
          </motion.tr>
        ))}
      </tbody>
    </table>

    
    <div className="md:hidden space-y-4">
      {users.map((user, i) => (
        <motion.div
          key={user.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          onClick={() => setSelectedUser(user)}
          className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition"
        >
          <p className="font-bold text-lg text-indigo-600 dark:text-indigo-400">
            {user.name}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Company:</span> {user.company.name}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
)}


        
        <AnimatePresence>
          {selectedUser && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-start ml-20 lg:ml-0 lg:justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-lg relative w-1/2 lg:w-full"
              >
                <button
                  onClick={() => setSelectedUser(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                >
                  ✖
                </button>

                <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                  {selectedUser.name}
                </h2>

                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    {selectedUser.email}
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    {selectedUser.phone}
                  </p>
                  <p>
                    <span className="font-semibold">Website:</span>{" "}
                    {selectedUser.website}
                  </p>
                  <p>
                    <span className="font-semibold">Company:</span>{" "}
                    {selectedUser.company.name}
                  </p>
                  <p className="italic text-sm text-gray-500">
                    {`"${selectedUser.company.catchPhrase}"`}
                  </p>
                  <p>
                    <span className="font-semibold">Address:</span>{" "}
                    {selectedUser.address.suite}, {selectedUser.address.street},{" "}
                    {selectedUser.address.city} - {selectedUser.address.zipcode}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SidebarLayout>
  );
}
