'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { FiArrowDownRight } from 'react-icons/fi'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

const projectData = [
  {
    name: "F Acacia",
    location: " Ras Al Khaimah, Dubai",
    img: "./projects/acacia.jpeg",
    url: "https://frealestatebyftv.in/projects/facacia-ras-al-khaimah-project-details"
  },
  {
    name: "Luxe Resort",
    location: "Antalya, Turkey",
    img: "./projects/luxe.jpg",
    url: "https://frealestatebyftv.in/projects/luxe-resort-antalya-turkey-project-details"
  },
  {
    name: "F-Premiere",
    location: "Greater Noida",
    img: "./projects/fpremiere.jpeg",
    url: "https://frealestatebyftv.in/projects/fpremiere-greater-noida-project-details"
  },
  {
    name: "F-Towers",
    location: " Chandigarh Tricity",
    img: "./projects/ftower-chandigarh.jpg",
    url: "https://frealestatebyftv.in/projects/ftowerschandigarhtricity-project-details"
  },
  {
    name: "F Residences",
    location: " Malad, Mumbai",
    img: "./projects/fresidences-malad.webp",
    url: "https://frealestatebyftv.in/projects/malad-project-details"
  },
  {
    name: "F Residences",
    location: "Ghatkopar, Mumbai",
    img: "./projects/fresidences-ghatkopar.webp",
    url: "https://frealestatebyftv.in/projects/ghatkopar-project-details"
  },
  {
    name: "F Residences",
    location: "Kalyani Nagar, Pune",
    img: "./projects/kalyani_nagar.webp",
    url: "https://frealestatebyftv.in/projects/kalyani-nagar-pune-project-details"
  },
    {
    name: "F Residences",
    location: "Balewadi, Pune",
    img: "./projects/balewadi.webp",
    url: "https://frealestatebyftv.in/projects/balewadi-pune-project-details"
  },
  {
    name: "Fashionz Danube",
    location: "Dubai, UAE",
    img: "./projects/danube.webp",
    url: "https://frealestatebyftv.in/projects/dubai-uae-project-details"
  },
  {
    name: "F Towers",
    location: "Ludhiana",
    img: "./projects/ludhiana.jpg",
    url: "https://frealestatebyftv.in/projects/ludhiana-project-details"
  },
  {
    name: "F Master Plan",
    location: "Poland",
    img: "./projects/poland.jpg",
    url: "https://frealestatebyftv.in/projects/poland-Warsaw-project-details"
  },
  {
    name: "F Residences & Resorts",
    location: "Bali",
    img: "./projects/residences-resorts-bali.jpg",
    url: "https://frealestatebyftv.in/projects/bali-diamond-cabanas-project-details"

  },
  {
    name: "Love F Hotel ",
    location: "Bali",
    img: "./projects/lovefhotel.jpg",
    url: "https://frealestatebyftv.in/projects/bali-hotel-project-details"

  },
  {
    name: "F Hotels & Residences",
    location: "Jimbaran, Bali",
    img: "./projects/jimbaran.jpg",
    url: "https://frealestatebyftv.in/projects/bali-Jimbaran-project-details"

  },
  {
    name: "F Villas",
    location: " Paud, Pune",
    img: "./projects/paudpune.jpg",
    url: "https://frealestatebyftv.in/projects/pune-paud-project-details"

  },
  {
    name: "F Residences ",
    location: " Tathawade,Pune",
    img: "./projects/tathawade.jpg",
    url: "https://frealestatebyftv.in/projects/pune-Tathawade-project-details"

  },
  {
    name: "F Residences ",
    location: "Gopalpur, West Bengal",
    img: "./projects/gopalpur.jpg",
    url: "https://frealestatebyftv.in/projects/bangal-Gopalpur-project-details"

  },
  {
    name: "F Imperial Spaces",
    location: "Ranchi",
    img: "./projects/imperialspaces-ranchi.jpg",
    url: "https://frealestatebyftv.in/projects/imperial-spaces-ranchi-project-details"

  }
];




export default function ProjectsCarousel({ projects }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentIndex, setCurrentIndex] = useState(0)
  const indexRef = useRef(0)
  const intervalRef = useRef(null)

  const startAutoScroll = () => {
  intervalRef.current = setInterval(() => {
    if (!emblaApi) return
    indexRef.current = (indexRef.current + 1) % projectData.length
    emblaApi.scrollTo(indexRef.current)
    setCurrentIndex(indexRef.current)
  }, 5000) // Set to 5 seconds
}

useEffect(() => {
  if (!emblaApi) return

  const onSelect = () => {
    const selectedIndex = emblaApi.selectedScrollSnap()
    indexRef.current = selectedIndex
    setCurrentIndex(selectedIndex)

    // Restart autoplay timer
    clearInterval(intervalRef.current)
    startAutoScroll()
  }

  emblaApi.on('select', onSelect)
  onSelect() // Initial call
  startAutoScroll() // Start the timer on mount

  return () => {
    clearInterval(intervalRef.current)
    emblaApi.off('select', onSelect)
  }
}, [emblaApi])

  return (
    <div className="relative bg-black text-white py-20 px-7">
      <Image alt="goldenFLogo" src="./goldenFDark.svg" width={335} height={640} className="absolute w-[300px] h-fit bottom-0 left-0 z-[1]" />
      <h2 style={{ fontFamily: 'Bodoni' }} className="gradient-text lg:text-6xl md:text-4xl text-2xl font-serif text-center mb-10 tracking-wider">
        OUR PROJECTS
      </h2>

      <div style={{ backgroundImage: `url(${projectData[currentIndex].img})`, transition: 'background-image 0.2s ease-in-out', }} className="bg-cover bg-top lg:py-10 lg:px-16 p-8 max-w-[1400px] mx-auto flex flex-col lg:flex-row items-end justify-start gap-8 rounded-lg relative transition-transform duration-300 ease-in-out z-[2]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d1d1dd3]  to-[#2e2e2e1e] z-[2] rounded-sm" />
        {/* LEFT TEXT BLOCK */}
        <div style={{ fontFamily: 'Bodoni' }} className="w-full lg:w-2/5 text-left h-full z-[3] flex flex-col">
          <h3 className="lg:text-4xl text-3xl font-light uppercase mb-0">
            {projectData[currentIndex].name}
          </h3>
          <p style={{ fontFamily: 'Helvetica' }} className="text-md uppercase font-medium tracking-wider text-gray-300">
            {projectData[currentIndex].location}
          </p>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="w-full lg:w-4/5 z-[3] overflow-hidden" ref={emblaRef}>
          <div className="flex flex-row md:mx-4 gap-4">
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
                  style={{ backgroundImage: `url('${project.img}')`, filter: index !== currentIndex ? "grayscale(100%)" : "grayscale(0)" }}
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

                  <a target='_blank' href={project.url} style={{ backgroundColor: currentIndex != index ? "#fff" : '#121212' }} className="absolute bottom-0 right-0  p-2 z-[3]">
                    <FiArrowDownRight style={{ color: currentIndex == index ? "#fff" : '#121212', fontSize: '25px' }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
