'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TextBanner({ messages, speed = 5 }) {
  const [currentMessageIndex, setCurrentMessageIndex] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(true)
  const [isPaused, setIsPaused] = React.useState(false)
  
  React.useEffect(() => {
    if (!isVisible || isPaused) return

    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
    }, 5000) // Change message every 5 seconds

    return () => clearInterval(intervalId)
  }, [messages, isVisible, isPaused])

  const handleDismiss = () => {
    setIsVisible(false)
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const restartBanner = () => {
    setIsVisible(true)
    setCurrentMessageIndex(0)
  }

  if (!isVisible) {
    return (
      <></>
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-primary text-primary-foreground relative"
      >
        <div className="container mx-auto px-4 py-2 flex items-center justify-between overflow-x-hidden">
          {/* Running Text */}
          <motion.div
            key={currentMessageIndex}
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: messages[currentMessageIndex].length / speed,
              ease: 'linear',
              repeat: Infinity,
            }}
            className="whitespace-nowrap text-lg font-medium flex-grow pointer-events-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {messages[currentMessageIndex]}
          </motion.div>

          {/* Dismiss Button */}
          <Button
            variant="ghost"
            size="sm"
            className="ml-4 text-primary-foreground hover:bg-transparent outline-none"
            onClick={handleDismiss}
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
