"use client";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/auth/login");
  }, [user]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">User Dashboard</h1>
      <button onClick={logout} className="bg-red-500 text-white p-2 mt-4">
        Logout
      </button>
    </div>
  );
};

export default UserDashboard;
