"use client";

import SidebarLayout from "@/app/components/SidebarLayout";
import { useFetch } from "@/app/hooks/useFetch";
import { Post } from "@/app/type";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useScheduleLoading } from "@/app/hooks/useScheduleLoading";

export default function PostDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: post, loading, error } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );


  const [scheduleLoading] = useScheduleLoading(loading, 1200);



  return (
    <SidebarLayout>
         <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.back()}
          className="self-start flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-lg hover:bg-indigo-200 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700 transition-colors"
        >
          ⬅ Back
        </motion.button>
      <div className="mt-6 flex flex-col items-center  min-h-screen gap-8">
      
       

       
        <h1 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400">
          Post Details Page
        </h1>

       
        {scheduleLoading ? (
          <div className="max-w-3xl w-full bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-10 border border-gray-100 dark:border-gray-800 animate-pulse space-y-6">
            <div>
              <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </div>

            <div>
              <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-600 rounded"></div>
            </div>

            <div>
              <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-24 w-full bg-gray-200 dark:bg-gray-600 rounded"></div>
            </div>
          </div>
        ):(

            post && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="max-w-3xl w-full bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-10 border border-gray-100 dark:border-gray-800 space-y-6"
                >
                  <div>
                    <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                      Post ID
                    </h2>
                    <p className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {post.id}
                    </p>
                  </div>
      
                  <div>
                    <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                      Title
                    </h2>
                    <p className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                      {post.title}
                    </p>
                  </div>
      
                  <div>
                    <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                      Body
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {post.body}
                    </p>
                  </div>
                </motion.div>
              )
        )}


        {error && <p className="text-red-500">{error}</p>}

      
      </div>
    </SidebarLayout>
  );
}
