'use client'

import * as React from 'react'
import Image from 'next/image'

const slides = [
  {
    url: '/1.jpg',
    alt: 'Event with tattoo artist at work',
  },
  {
    url: '/2.jpg',
    alt: 'Interactive game session at an event',
  },
  {
    url: '/3.jpg',
    alt: 'Sketch artist creating portraits at an event',
  },
  {
    url: '/4.jpg',
    alt: 'Sketch artist creating portraits at an event',
  },
  {
    url: '/5.jpg',
    alt: 'Sketch artist creating portraits at an event',
  },
  {
    url: '/6.jpg',
    alt: 'Sketch artist creating portraits at an event',
  },
]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [touchStartX, setTouchStartX] = React.useState(0)
  const [touchEndX, setTouchEndX] = React.useState(0)
  const [isDragging, setIsDragging] = React.useState(false)
  const [mouseStartX, setMouseStartX] = React.useState(0)
  const [mouseEndX, setMouseEndX] = React.useState(0)

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }, [])

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }, [])

  // Handle touch start
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX)
  }

  // Handle touch move
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX)
  }

  // Handle touch end to determine swipe direction
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide() // Swiped left
    }
    if (touchStartX - touchEndX < -50) {
      prevSlide() // Swiped right
    }
  }

  // Handle mouse down (start dragging)
  const handleMouseDown = (e) => {
    setMouseStartX(e.clientX)
    setIsDragging(true)
  }

  // Handle mouse move (dragging)
  const handleMouseMove = (e) => {
    if (isDragging) {
      setMouseEndX(e.clientX)
    }
  }

  // Handle mouse up (end dragging)
  const handleMouseUp = () => {
    if (isDragging) {
      if (mouseStartX - mouseEndX > 50) {
        nextSlide() // Dragged left
      } else if (mouseStartX - mouseEndX < -50) {
        prevSlide() // Dragged right
      }
      setIsDragging(false) // Stop dragging
    }
  }

  React.useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000)
    return () => clearInterval(slideInterval)
  }, [nextSlide])

  return (
    <div
      className="relative h-[calc(80vh)] w-full overflow-hidden "
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsDragging(false)} // Stop dragging if the mouse leaves the slider
    >
      {/* Slides */}
      <div
        className="h-full w-full flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative overflow-x-hidden bg-muted">
                     
            <Image
              src={slide.url}
              alt={slide.alt}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>
    </div>
  )
}
