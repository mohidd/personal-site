'use client'

import './styles/globals.css';
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <html lang="en">
      <body className={`${inter.className} ${darkMode ? 'dark' : ''}`}>
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <header className="bg-white dark:bg-gray-800 py-4 shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4">
              <nav className="flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">Mohid Durrani</a>
                <ul className="flex space-x-4 items-center">
                  <li><a href="#education" className="hover:text-primary">Education</a></li>
                  <li><a href="#experiences" className="hover:text-primary">Experience</a></li>
                  <li><a href="#projects" className="hover:text-primary">Projects</a></li>
                  <li><a href="#contact" className="hover:text-primary">Contact</a></li>
                  <li>
                    <button
                      onClick={() => setDarkMode(!darkMode)}
                      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                    >
                      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-white dark:bg-gray-800 py-4 mt-8">
            <div className="container mx-auto px-4 text-center">
              © {new Date().getFullYear()} Mohid Durrani. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}