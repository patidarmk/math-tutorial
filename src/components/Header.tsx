import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
            Y9
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Year 9 Maths
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link to="/assignments" className="text-gray-700 hover:text-blue-600 font-medium">Assignments</Link>
          <Link to="/progress" className="text-gray-700 hover:text-blue-600 font-medium">Progress Tracker</Link>
          <Link to="/topics" className="text-gray-700 hover:text-blue-600 font-medium">Topics</Link>
          <Link to="/baseline" className="text-gray-700 hover:text-blue-600 font-medium">Baseline Assessment</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        </nav>
      </div>
    </header>
  );
}