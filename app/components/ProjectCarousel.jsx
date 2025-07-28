'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { FiArrowDownRight } from 'react-icons/fi'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

const projectData = [
  {
    title: 'F RESIDENCES - H&S',
    location: 'GREATER NOIDA',
    image: '/projects/project1.svg',
  },
  {
    title: 'FASHIONZ',
    location: 'DUBAI',
    image: '/projects/project2.svg',
  },
  {
    title: 'F TOWER',
    location: 'PUNE',
    image: '/projects/project3.svg',
  },
  {
    title: 'F RESIDENCES - H&S',
    location: 'GREATER NOIDA',
    image: '/projects/project1.svg',
  },
  {
    title: 'FASHIONZ',
    location: 'DUBAI',
    image: '/projects/project2.svg',
  },
  {
    title: 'F TOWER',
    location: 'PUNE',
    image: '/projects/project3.svg',
  },
]

export default function ProjectsCarousel({ projects }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentIndex, setCurrentIndex] = useState(0)
  const indexRef = useRef(0)

  useEffect(() => {
    if (!emblaApi) return

    const interval = setInterval(() => {
      if (!emblaApi) return
      indexRef.current = (indexRef.current + 1) % projectData.length
      emblaApi.scrollTo(indexRef.current)
      setCurrentIndex(indexRef.current)
    }, 3000)

    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <div className="relative bg-black text-white py-20 px-7">
      <Image alt="goldenFLogo" src="./goldenFDark.svg" width={335} height={640} className="absolute w-[300px] h-fit bottom-0 left-0 z-[1]" />
      <h2 style={{ fontFamily: 'Bodoni' }} className="gradient-text lg:text-6xl md:text-4xl text-2xl font-serif text-center mb-10 tracking-wider">
        OUR PROJECTS
      </h2>

      <div style={{ backgroundImage: `url(${projectData[currentIndex].image})`, transition: 'background-image 0.2s ease-in-out', }} className="bg-cover bg-top lg:py-10 lg:px-16 p-8 max-w-[1400px] mx-auto flex flex-col lg:flex-row items-end justify-start gap-8 rounded-lg relative transition-transform duration-300 ease-in-out z-[2]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d1d1dd3]  to-[#2e2e2e1e] z-[2] rounded-sm" />
        {/* LEFT TEXT BLOCK */}
        <div style={{ fontFamily: 'Bodoni' }} className="w-full lg:w-2/5 text-left h-full z-[3] flex flex-col">
          <h3 className="text-3xl font-light uppercase mb-0">
            {projectData[currentIndex].title}
          </h3>
          <p style={{ fontFamily: 'Helvetica' }} className="text-md uppercase font-medium tracking-wider text-gray-300">
            {projectData[currentIndex].location}
          </p>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="w-full lg:w-4/5 z-[3] overflow-hidden" ref={emblaRef}>
          <div className="flex flex-row md:mx-4">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="embla__slide shrink-0 w-[100%] sm:w-1/2 lg:w-[260px]  md:h-[350px]  cursor-pointer mx-2"
                onClick={() => {
                  emblaApi?.scrollTo(index)
                  indexRef.current = index
                  setCurrentIndex(index)
                }}
              >
                <div
                  style={{ backgroundImage: `url('${project.image}')`, filter: index !== currentIndex ? "grayscale(100%)" : "grayscale(0)" }}
                  className="relative h-[350px] lg:w-[260px] md:h-[350px] w-[300px] bg-cover bg-center rounded-sm overflow-hidden"
                >
                  {index !== currentIndex && (
                    <div className="absolute inset-0 w-full h-full lg:bg-gradient-to-br bg-gradient-to-r top-0 from-[#000000c7] to-[#2e2e2e31] z-[2] rounded-sm" />
                  )}

                  <div style={{ fontFamily: 'Helvetica' }} className="absolute top-0 bg-opacity-40 flex flex-col justify-end p-4 z-[3]">
                    <h3 className="text-lg md:text-xl font-normal uppercase text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-md text-gray-200 tracking-wider font-normal uppercase">
                      {project.location}
                    </p>
                  </div>

                  <div style={{ backgroundColor: currentIndex != index ? "#fff" : '#121212' }} className="absolute bottom-0 right-0  p-2 z-[3]">
                    <FiArrowDownRight style={{ color: currentIndex == index ? "#fff" : '#121212', fontSize: '25px' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
