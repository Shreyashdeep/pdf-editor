import { useState, useEffect } from 'react'
import { FiInfo, FiX } from 'react-icons/fi'

interface NotificationProps {
  message: string;
  onClose: () => void;
}

export default function Notification({ message, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`fixed left-4 top-24 transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-blue-700 dark:to-cyan-600 text-white p-4 rounded-lg shadow-lg flex items-center max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-full p-2 mr-4">
          <FiInfo className="text-blue-500 dark:text-blue-300 text-xl" />
        </div>
        <div className="flex-grow">
          <h3 className="font-bold text-lg mb-1">
            <span className="text-yellow-300 dark:text-yellow-200">Get Started</span>
          </h3>
          <p className="text-sm">{message}</p>
        </div>
        <button onClick={onClose} className="ml-4 text-white hover:text-yellow-300 dark:hover:text-yellow-200 transition-colors duration-300">
          <FiX className="text-xl" />
        </button>
      </div>
    </div>
  )
}