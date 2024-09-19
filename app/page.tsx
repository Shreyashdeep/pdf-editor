'use client'
import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import CallToAction from './components/CallToAction'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Notification from './components/Notification'

export default function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isNotificationVisible, setIsNotificationVisible] = useState(true)

  const controlSidebar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scroll down hide the sidebar
        setIsSidebarVisible(false)
      } else { // if scroll up show the sidebar
        setIsSidebarVisible(true)
      }
      // Remember last scroll position
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlSidebar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlSidebar)
      }
    }
  }, [lastScrollY])

  const hideNotification = () => {
    setIsNotificationVisible(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="flex-grow">
        <Hero onGetStarted={hideNotification} />
        <Features />
        <Benefits />
        <CallToAction />
      </main>
      <Sidebar isVisible={isSidebarVisible} />
      <Footer />
      {isNotificationVisible && (
        <Notification message="Click Get Started to add PDF" onClose={hideNotification} />
      )}
    </div>
  )
}