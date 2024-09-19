import Link from "next/link"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-md dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          <nav className="flex space-x-6 items-center">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white hover:text-purple-600 transition-colors duration-300 dark:hover:bg-gray-700 dark:hover:text-white">Home</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost" className="text-white hover:bg-white hover:text-pink-500 transition-colors duration-300 dark:hover:bg-gray-700 dark:hover:text-white">About</Button>
            </Link>
            <Link href="/services">
              <Button variant="ghost" className="text-white hover:bg-white hover:text-red-500 transition-colors duration-300 dark:hover:bg-gray-700 dark:hover:text-white">Services</Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="text-white hover:bg-white hover:text-purple-600 transition-colors duration-300 dark:hover:bg-gray-700 dark:hover:text-white">Contact</Button>
            </Link>
            <Link href="/signin">
              <Button variant="outline" className="bg-white text-purple-600 hover:bg-purple-600 hover:text-white border-2 border-white transition-colors duration-300 dark:bg-gray-700 dark:text-white dark:hover:bg-white dark:hover:text-gray-900">Sign In</Button>
            </Link>
            <Button
              variant="outline"
              // size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4 bg-white text-purple-600 hover:bg-purple-600 hover:text-white border-2 border-white transition-colors duration-300 dark:bg-gray-700 dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}