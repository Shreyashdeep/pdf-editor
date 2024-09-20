import { Button } from "./ui/button";
import {
  FiLayers,
  FiPlusSquare,
  FiEdit,
} from "react-icons/fi";

interface SidebarProps {
  isVisible: boolean;
}

export default function Sidebar({ isVisible }: SidebarProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-purple-600 via-pink-500 to-red-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 shadow-2xl flex flex-col transition-all duration-300 ease-in-out ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-8 flex flex-col space-y-6 flex-grow relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-5"></div>
        <h2 className="text-3xl font-bold text-white mb-6 relative z-10">
          PDF Tools
        </h2>
        <Button className="bg-white dark:bg-gray-700 text-pink-500 dark:text-pink-300 border-none shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 hover:bg-pink-100 dark:hover:bg-gray-600 font-semibold text-lg relative z-10">
          <FiLayers className="mr-3 text-2xl" /> Merge PDFs
        </Button>
        <Button className="bg-white dark:bg-gray-700 text-red-500 dark:text-red-300 border-none shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 hover:bg-red-100 dark:hover:bg-gray-600 font-semibold text-lg relative z-10">
          <FiPlusSquare className="mr-3 text-2xl" /> Add Page
        </Button>
        <Button className="bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-300 border-none shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 hover:bg-purple-100 dark:hover:bg-gray-600 font-semibold text-lg relative z-10">
          <FiEdit className="mr-3 text-2xl" /> Edit PDF
        </Button>
      </div>
      <div className="mt-auto p-6 border-t border-white/20 relative z-10">
        <p className="text-sm text-white text-center font-medium">
          Powerful PDF Tools at Your Fingertips
        </p>
      </div>
    </div>
  );
}
