"use client";
import { useRouter } from "next/navigation";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md fixed top-0">
      <h1 className="text-2xl font-bold text-blue-600">Qmee</h1>
      <button
        onClick={() => router.push("/auth/login")}
        className="p-2 rounded-full hover:bg-gray-200"
      >
        <UserCircleIcon className="w-8 h-8 text-gray-700" />
      </button>
    </nav>
  );
}
