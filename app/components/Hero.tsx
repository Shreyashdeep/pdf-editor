import { Button } from "./ui/button"

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="bg-gradient-to-b from-purple-100 via-pink-50 to-red-50 py-32 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-purple-800 dark:text-purple-300">Welcome to Our PDF Tool</h1>
        <p className="text-xl md:text-2xl mb-12 text-purple-600 dark:text-purple-200 max-w-3xl mx-auto">Easily manage and edit your PDF files with our powerful and intuitive tools</p>
        <Button 
          onClick={onGetStarted} 
          className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-10 py-4 rounded-full text-xl font-semibold hover:from-purple-700 hover:via-pink-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl dark:from-purple-800 dark:via-pink-700 dark:to-red-700 dark:hover:from-purple-900 dark:hover:via-pink-800 dark:hover:to-red-800"
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}