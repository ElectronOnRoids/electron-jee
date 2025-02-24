
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  PenTool,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Users, label: "Batches", path: "/batches" },
  { icon: BookOpen, label: "Question Bank", path: "/questions" },
  { icon: GraduationCap, label: "Tests", path: "/tests" },
  { icon: PenTool, label: "Homework", path: "/homework" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="relative">
      <aside
        className={cn(
          "fixed top-0 left-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out z-50",
          isCollapsed ? "w-20" : "w-64"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <h1 className={cn("font-bold text-xl", isCollapsed && "hidden")}>
              ElectronJEE
            </h1>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isCollapsed ? (
                <Menu className="w-5 h-5" />
              ) : (
                <X className="w-5 h-5" />
              )}
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-gray-500" />
                    {!isCollapsed && (
                      <span className="text-gray-700 dark:text-gray-200">
                        {item.label}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          isCollapsed ? "ml-20" : "ml-64"
        )}
      >
        {/* Content will be rendered here */}
      </div>
    </div>
  );
}

