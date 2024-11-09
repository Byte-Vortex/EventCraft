'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

export default function Preloader() {
const icons=['🎨', '🎭', '🎉', '🎸', '📸']
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative w-64 h-64">
        <motion.div
          className="absolute inset-0 border-4 border-primary rounded-full"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-2 border-4 border-secondary rounded-full"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: -360 }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="absolute inset-4 border-4 border-accent rounded-full"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, delay: 0.4 }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="text-center">
            <h2 className="font-dancingScript text-5xl font-bold text-primary mb-2">EventCraft</h2>
            <p className="text-muted-foreground font-dancingScript text-xl py-1">Crafting your experience...</p>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-56 left-0 right-0 flex justify-center">
        <motion.div
          className="flex space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          
        {icons.map((emoji, index) => (
            <motion.span
              key={index}
              className="text-3xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.8}}
            >
              {emoji}
            </motion.span>
          ))}

        </motion.div>
      </div>
    </div>
  )
}
{/* {icons.map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-3xl text-primary"
            style={{
              transformOrigin: '50% 150%',
              top: `${40 - index * 10}%`,
              left: `${40 + index * 20}%`,
            }}
            initial={{ opacity: 0.6 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 2 + index,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.3,
            }}
          >
            {icon}
          </motion.div>
        ))} */}