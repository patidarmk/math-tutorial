import Header from "@/components/Header";
import { MadeWithApplaa } from "@/components/made-with-applaa";
import { Outlet } from "@tanstack/react-router";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <MadeWithApplaa />
    </div>
  );
}