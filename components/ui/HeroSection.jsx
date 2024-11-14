'use client'
import * as React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from './separator';

// Extended slides array with title and description
const slides = [
    {
        url: '/1.jpg',
        alt: 'Event with tattoo artist at work',
        title: 'Unleash\nCreativity',
        description: 'Join our tattoo art sessions and bring out the artist within you.',
    },
    {
        url: '/2.jpg',
        alt: 'Interactive game session at an event',
        title: 'Fun and \nGames',
        description: 'Experience the thrill with our interactive game sessions.',
    },
    {
        url: '/3.jpg',
        alt: 'Sketch artist creating portraits at an event',
        title: 'Portrait\n Magic',
        description: 'Get your portraits done by talented sketch artists.',
    },
    {
        url: '/4.jpg',
        alt: 'Elaborate event decoration',
        title: 'Custom\n Decor',
        description: 'Design your event with our custom decor options.',
    },
    {
        url: '/5.jpg',
        alt: 'Group photo of event attendees',
        title: 'Happy\n Clients',
        description: 'Connect with your event attendees and showcase your work.',
    },
    {
        url: '/6.jpg',
        alt: 'Sketch artist creating portraits at an event',
        title: 'Creative\n Sketching',
        description: 'Let your creativity shine with our sketch artists.',
    }
];

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const totalSlides = slides.length; // Total number of slides
    const [touchStartX, setTouchStartX] = React.useState(0)
    const [touchEndX, setTouchEndX] = React.useState(0)
    const [isDragging, setIsDragging] = React.useState(false)
    const [mouseStartX, setMouseStartX] = React.useState(0)
    const [mouseEndX, setMouseEndX] = React.useState(0)
    const intervalRef = React.useRef(null); // Ref to hold the interval

    const nextSlide = React.useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, []);

    const prevSlide = React.useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    }, []);

    // Function to reset the interval when a manual slide change occurs
    const resetInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(nextSlide, 4000); // Restart the interval
    };

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
            resetInterval(); // Reset the interval on swipe
            nextSlide();
        } else if (touchStartX - touchEndX < -50) {
            resetInterval(); // Reset the interval on swipe
            prevSlide();
        }
    };

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
                resetInterval(); // Reset the interval on drag
                nextSlide();
            } else if (mouseStartX - mouseEndX < -50) {
                resetInterval(); // Reset the interval on drag
                prevSlide();
            }
            setIsDragging(false);
        }
    };

    // Cleanup event listeners for mouse up (in case the user moves out of the component)
    React.useEffect(() => {
        const handleMouseUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleMouseUp);
        return () => window.removeEventListener('mouseup', handleMouseUp);
    }, []);

    React.useEffect(() => {
        intervalRef.current = setInterval(nextSlide, 3000); // Set initial interval
        return () => clearInterval(intervalRef.current); // Clear interval on unmount
    }, [nextSlide]);

    return (
        <section className="-mt-20 bg-gradient-to-b from-background to-background/90 selection:bg-transparent">
            <div
                className="relative h-[calc(90vh)] w-full overflow-hidden"
            >
                <div className="absolute inset-0 h-full w-full"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={() => setIsDragging(false)}
                >
                    {/* Slides */}
                    <div
                        className="flex h-full w-full transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="min-w-full h-full relative overflow-hidden bg-muted">
                                <Image
                                    src={slide.url}
                                    alt={slide.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 bg-black/50" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dynamic Text Content */}
                <div className="absolute px-2 inset-0 flex items-center justify-start ml-10 md:ml-28 mx-auto pointer-events-none overflow-hidden">
                    <motion.div
                        key={currentIndex} // Adding a key prop to re-render on slide change
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="text-left"
                    >
                        <h1 className="text-6xl md:pr-0 pr-8 md:text-8xl font-poppins font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-pink-600 px-2 py-3">
                            {slides[currentIndex].title.split('\n').map((line, index) => (
                                <span key={index} className="block">{line}</span>
                            ))}
                        </h1>

                        <p className="text-xl md:pr-2 pr-4 md:pl-2 pl-4 mb-8 text-white">
                            {slides[currentIndex].description}
                        </p>

                    </motion.div>
                </div>
                <div className="absolute px-2 inset-0 flex justify-start items-start ml-11 md:ml-32 md:mt-40 mt-36 mx-auto pointer-events-none space-x-1 overflow-hidden">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}

                    >
                        <p className="text-white text-2xl">
                            {String(currentIndex + 1).padStart(2, '0')} </p>
                    </motion.div>
                    <p className="mt-2 text-xs">/ {String(totalSlides).padStart(2, '0')}</p>
                </div>
                <div className="absolute px-2 inset-0 flex justify-start items-end md:ml-20 ml-3 mb-20 mx-auto pointer-events-none overflow-hidden">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="text-center"
                    >
                        <Button
                            onClick={() => {
                                const bookingSection = document.getElementById('bookingsection');
                                if (bookingSection) {
                                    bookingSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            size="lg"
                            variant="normal"
                            className="font-bold text-sm text-primary-foreground pointer-events-auto"
                        >
                            BOOK NOW
                        </Button>
                        <Separator className="ml-8 w-20 -mt-2 bg-foreground" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <div className="absolute top-1/2 md:left-5 -left-1 z-20 cursor-pointer overflow-hidden text-white opacity-80 hover:opacity-100 transform -rotate-90" onClick={() => { resetInterval(); prevSlide(); }}>
                        <p className="text-lg">Prev</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-center"
                >
                    <div className="absolute top-1/2 md:right-5 -right-1 cursor-pointer text-white opacity-80 hover:opacity-100 transform -rotate-90" onClick={() => { resetInterval(); nextSlide(); }}>
                        <p className="text-lg">Next</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
