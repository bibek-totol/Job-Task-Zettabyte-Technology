"use client";

import { motion } from "framer-motion";
import { useFetch } from "../hooks/useFetch";
import SidebarLayout from "../components/SidebarLayout";
import { Post } from "../type";
import PostCard from "../components/PostCard";
import PostCardSkeleton from "../components/PostCardSkeleton";
import { useScheduleLoading } from "../hooks/useScheduleLoading";
import { useState } from "react";

export default function PostsPage() {

  const [endpoint, setEndpoint] = useState(
    "https://jsonplaceholder.typicode.com/posts"
  );
   
    const { data: posts, loading, error } = useFetch<Post[]>(endpoint);


    const [scheduleLoading] = useScheduleLoading(loading, 1700);
    
    
  
    return (
      <SidebarLayout>
        <h1 className="text-2xl font-bold mb-6">Posts</h1>
        <div className="flex gap-4">
          <button
            onClick={() =>
              setEndpoint("https://jsonplaceholder.typicode.com/posts")
            }
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Load Posts 
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
  
       
        {error && <p className="text-red-500 font-semibold">{error}</p>}
  
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
          initial="hidden"
          animate="visible"
        >
          {scheduleLoading
            ? Array.from({ length: 9 }).map((_, i) => (
                <PostCardSkeleton key={i} index={i} />
              ))
            : (posts && !error && posts.map((post) => (
                <PostCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  body={post.body}
                 
                />
              )))}
        </motion.div>
      </SidebarLayout>
    );
  }