"use client"

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Image from "next/image";

const projects = [
  "./projects/project1.svg",
  "./projects/project2.svg",
  "./projects/project3.svg"
]


export default function Home() {

  const [projectShowcase, setProjectShowcase] = useState(projects[1])

  return (
    <div className="w-full h-full flex flex-col">
      <section className="w-full h-full bg-[url('/header.svg')] min-h-screen bg-cover bg-center">
        <Navbar />
        <main className="w-full h-full max-w-[1400px] mx-auto flex flex-col justify-center items-end py-[60px] px-5">
          <div>
            <h1
              className="w-fit text-[4vw] text-end tracking-tight leading-[110%] 
             bg-gradient-to-r from-[#7C7C7C] via-[#F9F8F6] to-[#7F7F7F] 
             bg-clip-text text-transparent">
              More than property <br /> it's a statement <br /> of
              <span
                className="inline-block align-middle mx-8 h-1 w-48 bg-gradient-to-r from-[#7C7C7C] via-[#F9F8F6] to-[#7F7F7F]"
              ></span>
              style
            </h1>
          </div>

          <form className="bg-[#111111] px-14 py-12" action="">
            <h2 className="text-5xl text-[#D8D8D8] font-bold">Let's Connect!</h2>
            
            <span>
              <input type="text" placeholder="NAME*" 
              className="w-full py-3 text-[#929292] text-sm px-2 border-b-[0.4px] border-[#707070]"/>
            </span>
          </form>
        </main>
      </section>

      <section className="w-full h-full min-h-[150vh] bg-white pb-10 relative">
        <Image src="./goldenF.svg" width={335} height={640} className="absolute w-fit h-fit top-0 left-10 z-10"/>
        <Image src="./emptyDiamond.svg" width={335} height={640} className="absolute w-fit h-fit top-10 right-[-20px] z-10"/>
        <div className="w-full h-full max-w-[1400px] mx-auto px-5 py-[100px] flex flex-col gap-5">
          <span className="flex flex-row justify-between w-full">
            <h4 style={{ fontFamily: 'Helvetica' }} className="text-lg tracking-wider font-semibold text-[#333333] text-center flex flex-row justify-end">ABOUT <img src="./arrowRightDown.svg" alt="" className="w-4 h-4 mt-2 ml-3"/></h4>
            <h3
              style={{ fontFamily: 'Bodoni' }}
              className="text-[70px] font-bodoni gradient-text"
            >
              Lorem Ipsum <i className="opacity-0">Lorem </i> <br />
              <i className="opacity-0">Lorem </i>Lorem Ipsum style
            </h3>
          </span>

          <p className="text-xl leading-[140%] font-normal text-[#333333]">FashionTV presents F Real Estate Brand Licensing that is an entire brand vision in the luxury real estate spectrum, comprising different kinds of real estate licensing verticals, ranging from residential to commercial, including hospitality. Exploring new vistas in luxury real estate, FashionTV has extended its brand perspective into real estate developments having introduced a unique concept in the history of real estate.</p>
        </div>

        <div className="w-full h-[550px] max-w-[1400px] mx-auto bg-[url('/reimagine.png')] p-18">
        </div>

        <h3 className="text-xl font-normal text-[#121212] text-center tracking-[12px] mt-32">OUR PROJECT'S</h3>

        <div className="w-full h-[430px] bg-cover bg-[center_10%] max-w-[1400px] flex flex-row mx-auto bg-[url('/reimagine.svg')] p-18 mt-10 px-20"
          style={{
            backgroundImage: `url('${projectShowcase}')`
          }}>
          <div className="w-full h-full flex flex-col justify-between flex-2/5">
            <span className="text-start">
              <h3 className="text-3xl font-light uppercase text-white">LOREM IPSUM</h3>
              <p className="text-sm uppercase font-medium text-white">STATISTICS</p>
            </span>

            <span className="text-start">
              <h3 className="text-3xl font-light uppercase text-white">F RESIDENCES - MERLIN</h3>
              <p className="text-sm uppercase font-medium text-white">WEST BENGAL</p>
            </span>
          </div>

          {/* Interactive Projects */}
          <div className="w-full h-full flex-3/5 flex flex-row justify-between gap-5">
            <div
              onClick={() => setProjectShowcase(projects[0])}
              style={{
                backgroundImage: `url('${projects[0]}')`,
              }}
              className={`w-full h-full p-5 bg-center bg-cover flex flex-col justify-between relative max-w-[240px] cursor-pointer transition-all duration-300 ease-in-out ${projectShowcase === projects[0] ? "filter-none" : "filter grayscale"
                }`}
            >
              {projectShowcase !== projects[0] && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-0 transition-opacity duration-300" />
              )}

              <span className="relative z-10">
                <h4 className="text-xl font-normal uppercase text-white">
                  F RESIDENCES - H&S,
                </h4>
                <p className="text-sm uppercase font-normal tracking-wider text-gray-200">
                  GREATER NOIDA
                </p>
              </span>

              <button className="w-8 h-8 flex justify-center items-center bg-white absolute bottom-0 right-0 z-10">
                <img src="./arrowRightDown.svg" alt="" />
              </button>
            </div>
            <div
              onClick={() => setProjectShowcase(projects[1])}
              style={{
                backgroundImage: `url('${projects[1]}')`,
              }}
              className={`w-full h-full p-5 bg-center bg-cover flex flex-col justify-between relative max-w-[240px] cursor-pointer transition-all duration-300 ease-in-out ${projectShowcase === projects[1] ? "filter-none" : "filter grayscale"
                }`}
            >
              {projectShowcase !== projects[1] && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-0 transition-opacity duration-300" />
              )}

              <span className="relative z-10">
                <h4 className="text-xl font-normal uppercase text-white">
                  FASHIONZ
                </h4>
                <p className="text-sm uppercase font-normal tracking-wider text-gray-200">
                  DUBAI
                </p>
              </span>

              <button className="w-8 h-8 flex justify-center items-center bg-white absolute bottom-0 right-0 z-10">
                <img src="./arrowRightDown.svg" alt="" />
              </button>
            </div>
            <div
              onClick={() => setProjectShowcase(projects[2])}
              style={{
                backgroundImage: `url('${projects[2]}')`,
              }}
              className={`w-full h-full p-5 bg-center bg-cover flex flex-col justify-between relative max-w-[240px] cursor-pointer transition-all duration-300 ease-in-out ${projectShowcase === projects[2] ? "filter-none" : "filter grayscale"
                }`}
            >
              {projectShowcase !== projects[2] && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-0 transition-opacity duration-300" />
              )}

              <span className="relative z-10">
                <h4 className="text-xl font-normal uppercase text-white">
                  F TOWER
                </h4>
                <p className="text-sm uppercase font-normal tracking-wider text-gray-200">
                  PUNE
                </p>
              </span>

              <button className="w-8 h-8 flex justify-center items-center bg-white absolute bottom-0 right-0 z-10">
                <img src="./arrowRightDown.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
