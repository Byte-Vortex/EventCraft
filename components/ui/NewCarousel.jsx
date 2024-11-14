// "use client"
// import * as React from 'react'
// import { Carousel, CarouselContent, CarouselItem } from './carousel'
// import Image from 'next/image'
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";


// const slides = [
//     {
//         url: '/1.jpg',
//         alt: 'Event with tattoo artist at work',
//         title: 'Unleash\nCreativity',
//         description: 'Join our tattoo art sessions and bring out the artist within you.',
//     },
//     {
//         url: '/2.jpg',
//         alt: 'Interactive game session at an event',
//         title: 'Fun and \nGames',
//         description: 'Experience the thrill with our interactive game sessions.',
//     },
//     {
//         url: '/3.jpg',
//         alt: 'Sketch artist creating portraits at an event',
//         title: 'Portrait\n Magic',
//         description: 'Get your portraits done by talented sketch artists.',
//     },
//     {
//         url: '/4.jpg',
//         alt: 'Elaborate event decoration',
//         title: 'Custom\n Decor',
//         description: 'Design your event with our custom decor options.',
//     },
//     {
//         url: '/5.jpg',
//         alt: 'Group photo of event attendees',
//         title: 'Happy\n Clients',
//         description: 'Connect with your event attendees and showcase your work.',
//     },
//     {
//         url: '/6.jpg',
//         alt: 'Sketch artist creating portraits at an event',
//         title: 'Creative\n Sketching',
//         description: 'Let your creativity shine with our sketch artists.',
//     }
// ]

// export default function NewCarousel() {
//     const title = slides?.[0]?.title || 'Default Title'; // Use slides instead of items
//     const [currentIndex, setCurrentIndex] = React.useState(0);

//     // Handler for updating the current slide index
//     const handleSlideChange = (newIndex) => {
//         setCurrentIndex(newIndex); // Update the state with the new index
//     };

//     return (
//         <div>
//             <Carousel
//                 className="-mt-20 bg-gradient-to-b from-background to-background/80 selection:bg-transparent"
//             >
//                 <CarouselContent>
//                     {slides.map((image, index) => (
//                         <CarouselItem className="relative h-[calc(90vh)] w-full overflow-hidden" key={index}>
//                             <div className="min-w-full h-full relative overflow-hidden">
//                                 <Image
//                                     src={image.url}
//                                     alt={image.alt}
//                                     fill
//                                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                                     style={{ objectFit: 'cover' }}
//                                     priority={index === 0}
//                                 />
//                             </div>
//                         </CarouselItem>
//                     ))}
//                 </CarouselContent>
//             </Carousel>

//             {/* Title */}
//             <div className="absolute px-2 inset-0 flex items-center justify-start -mt-32 ml-10 md:ml-28 mx-auto pointer-events-none overflow-hidden">
//                 <motion.div
//                     key={currentIndex} // Re-render when the slide index changes
//                     initial={{ opacity: 0, x: -100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: 50 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-left"
//                 >
//                     <h1 className="text-6xl md:pr-0 pr-8 md:text-8xl font-poppins font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-pink-700 px-2 py-3">
//                         {slides[currentIndex].title.split('\n').map((line, index) => (
//                             <span key={index} className="block">{line}</span>
//                         ))}
//                     </h1>
//                 </motion.div>
//             </div>

//             {/* Description */}
//             <div className="absolute px-2 inset-2 flex items-center justify-start ml-7 md:ml-28 mt-28 md:mt-40 mx-auto pointer-events-none overflow-hidden">
//                 <motion.div
//                     key={currentIndex} // Re-render when the slide index changes
//                     initial={{ opacity: 0, x: +100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: 50 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-left"
//                 >
//                     <p className="text-xl md:pr-2 pr-4 md:pl-2 pl-4 mb-8 text-white">
//                         {slides[currentIndex].description}
//                     </p>
//                 </motion.div>
//             </div>
//         </div>
//     )
// }
{/* <section className="-mt-20 bg-gradient-to-b from-background to-background/80 selection:bg-transparent">
            <div
                className="relative h-[calc(90vh)] w-full overflow-hidden"
                // onTouchStart={handleTouchStart}
                // onTouchMove={handleTouchMove}
                // onTouchEnd={handleTouchEnd}
                // onMouseDown={handleMouseDown}
                // onMouseMove={handleMouseMove}
                // onMouseUp={handleMouseUp}
                // onMouseLeave={() => setIsDragging(false)}
            >

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

    
                <div className="absolute px-2 inset-0 flex items-center justify-start -mt-32 ml-10 md:ml-28 mx-auto pointer-events-none overflow-hidden">
                    <motion.div
                        key={currentIndex} // Adding a key prop to re-render on slide change
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="text-left"
                    >
                        <h1 className="text-6xl md:pr-0 pr-8 md:text-8xl font-poppins font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-pink-700 px-2 py-3">
                            {slides[currentIndex].title.split('\n').map((line, index) => (
                                <span key={index} className="block">{line}</span>
                            ))}
                        </h1>
                    </motion.div>


                </div>
                <div className="absolute px-2 inset-2 flex items-center justify-start ml-7 md:ml-28 mt-28 md:mt-40 mx-auto pointer-events-none overflow-hidden">
                    <motion.div
                        key={currentIndex} // Adding a key prop to re-render on slide change
                        initial={{ opacity: 0, x: +100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="text-left"
                    >
                        <p className="text-xl md:pr-2 pr-4 md:pl-2 pl-4 mb-8 text-white">
                            {slides[currentIndex].description}
                        </p>
                    </motion.div>
                </div>
                <div className="absolute px-2 inset-0 flex justify-start items-end md:ml-24 ml-6 mb-36 mx-auto pointer-events-none overflow-hidden">

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
                <div className="absolute px-2 inset-0 flex justify-end items-end mr-8 md:mr-28 md:mb-16 mb-12 mx-auto pointer-events-none space-x-1 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="flex space-x-1 items-center"
                    >
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 7 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}

                        >
                            <p className="text-white text-2xl">
                                {String(currentIndex + 1).padStart(2, '0')} </p>
                        </motion.div>
                        <p className="mb-2 text-xs">/ {String(totalSlides).padStart(2, '0')}</p>
                    </motion.div>
                </div>
                <div className="absolute px-2 space-x-4 md:mr-32 mr-14 inset-0 flex justify-end items-end mb-10 mx-auto pointer-events-none overflow-hidden">
                    <div className="z-20 mr-3 pointer-events-auto cursor-pointer overflow-hidden text-white" onClick={() => { resetInterval(); prevSlide(); }}>
                        <p className="text-sm">PREV</p>
                    </div>
                    <Slider
                        value={[currentIndex]}
                        max={totalSlides - 1} 
                        onValueChange={(value) => goToSlide(value[0])} 
                        className="w-[20%] p-2  pointer-events-auto cursor-pointer"
                    />
                    <div className="ml-3 z-20 overflow-hidden text-white pointer-events-auto cursor-pointer" onClick={() => { resetInterval(); nextSlide(); }}>
                        <p className="text-sm">NEXT</p>
                    </div>
                </div>
            </div>
        </section> */}