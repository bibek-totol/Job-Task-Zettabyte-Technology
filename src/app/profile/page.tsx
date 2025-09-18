"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect, useRef } from "react";
import SidebarLayout from "@/app/components/SidebarLayout";


export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const hasShownToast = useRef(false); 

  useEffect(() => {
    console.log(status);
    if (status === "unauthenticated" && !hasShownToast.current) {
      hasShownToast.current = true; 

      toast.error("You must be signed in to view this page!", {
        style: {
          background: "#fef2f2",
          color: "#b91c1c",
          fontWeight: "500",
        },
        icon: "⚠️",
      });

      setTimeout(() => {
        router.push("/");
      }, 500);
    }

   

    
  }, [status,router]);
  

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return null;

  return (
    <SidebarLayout>
    <div className="p-6">
      <h1 className="text-3xl font-bold text-indigo-600">Profile</h1>
      <div className="mt-4 space-y-2">
        <p>
          <span className="font-semibold">Name:</span> {session.user?.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {session.user?.email}
        </p>
        {session.user?.image && (
          <img
            src={session.user.image}
            alt="profile"
            className="h-20 w-20 rounded-full mt-2"
          />
        )}
      </div>
    </div>
    </SidebarLayout>
  );
}
