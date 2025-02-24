import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <Navbar />
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Qmee</h1>
        <p className="text-gray-600 mt-2">Your go-to platform for amazing services.</p>
        <a href="/auth/login" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
          Get Started
        </a>
      </section>
    </main>
  );
}
