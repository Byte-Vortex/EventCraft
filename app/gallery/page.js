"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function Gallery() {
  const galleryItems = [
    { src: '/1.jpg?height=400&width=600', alt: 'Tattoo artist at work during an event', caption: 'Live Tattoo Art' },
    { src: '/2.jpg?height=400&width=600', alt: 'Guests playing an interactive game', caption: 'Interactive Gaming' },
    { src: '/3.jpg?height=400&width=600', alt: 'Sketch artist creating a portrait', caption: 'Event Sketches' },
    { src: '/4.jpg?height=400&width=600', alt: 'Elaborate event decoration', caption: 'Custom Decor' },
    { src: '/5.jpg?height=400&width=600', alt: 'Group photo of event attendees', caption: 'Happy Clients' },
    { src: '/6.jpg?height=400&width=600', alt: 'Close-up of a temporary tattoo', caption: 'Temporary Tattoo Art' },
  ]

  return (
    <div className="bg-background text-foreground">
      <main className="pt-8">
        <div className="container mx-auto px-4 py-4">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          ><h1 className="text-4xl md:text-6xl font-bold  mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Event Gallery
          </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5,delay:0.5 }}
            className="text-center"
          >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-3">
            {galleryItems.map((item, index) => (
              <div key={index} className="relative group">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-64"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}