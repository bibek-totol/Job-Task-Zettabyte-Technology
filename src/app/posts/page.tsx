"use client";

import { motion } from "framer-motion";
import { useFetch } from "../hooks/useFetch";
import SidebarLayout from "../components/SidebarLayout";
import { Post } from "../type";
import PostCard from "../components/PostCard";
import PostCardSkeleton from "../components/PostCardSkeleton";
import { useEffect, useState } from "react";
import { useScheduleLoading } from "../hooks/useScheduleLoading";

export default function PostsPage() {
    const { data: posts, loading, error } = useFetch<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );


    const [scheduleLoading] = useScheduleLoading(loading, 1700);
    
  
    return (
      <SidebarLayout>
        <h1 className="text-2xl font-bold mb-6">Posts</h1>
  
        {error && <p className="text-red-500">{error}</p>}
  
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
        >
          {scheduleLoading
            ? Array.from({ length: 9 }).map((_, i) => (
                <PostCardSkeleton key={i} index={i} />
              ))
            : posts?.map((post) => (
                <PostCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  body={post.body}
                 
                />
              ))}
        </motion.div>
      </SidebarLayout>
    );
  }