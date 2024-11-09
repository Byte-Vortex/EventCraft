'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TextBanner({ messages, speed = 50 }) {
  const [currentMessageIndex, setCurrentMessageIndex] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(true)
  const [isPaused, setIsPaused] = React.useState(false)
  
  React.useEffect(() => {
    if (!isVisible || isPaused) return

    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
    }, 2000) // Change message every 10 seconds

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

  if(!isVisible) {
    return null
  }

  return (
    <div className="py-4">
      <AnimatePresence>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-primary text-primary-foreground relative"
        >
          <div className='flex justify-between items-center' >
          <div className="mx-auto px-4 py-2 flex items-center justify-between overflow-x-hidden">
            {/* Running Text */}
            <motion.div
              key={currentMessageIndex}
              initial={{ x: '-5%' }}
              animate={{ x: '5%' }}
              transition={{
                duration: messages[currentMessageIndex].length / speed,
                ease: 'linear',
                repeat: Infinity,
              }}
              className="whitespace-nowrap text-lg font-medium flex-grow pointer-events-auto"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p className='pointer-events-none'>{messages[currentMessageIndex]}</p>
            </motion.div>

            {/* Dismiss Button */}
            
          </div>
          <Button
            variant="ghost"
              className="w-10 h-10text-primary-foreground hover:bg-transparent outline-none pointer-events-auto"
              onClick={handleDismiss}
              aria-label="Dismiss banner"
            >
              <X className="h-10 w-10" />
            </Button>
            </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
