"use client"

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Image from "next/image";
import Footer from "./components/Footer";

const projects = [
  "./projects/project1.svg",
  "./projects/project2.svg",
  "./projects/project3.svg"
]


export default function Home() {

  const [projectShowcase, setProjectShowcase] = useState(projects[1])

  return (
    <div className="w-full h-full flex flex-col">
      <section className="w-full h-full bg-[url('/header.svg')] min-h-screen bg-cover bg-center relative">
        <Navbar />
        <main className="w-full h-full min-h-screen max-w-[1400px] mx-auto flex flex-col justify-start lg:items-end items-center lg:pt-[60px] pt-[16vh] px-5">
          <div className="w-fit mx-auto md:mx-0">
            <h1 style={{ fontFamily: 'Bodoni' }}
              className="w-fit text-[4vw] text-end tracking-tight leading-[100%] 
              gradient-text">
              More than property <br /> it's a statement <br /> of
              <span
                className="inline-block align-middle mx-8 h-1 w-[8vw] bg-gradient-to-r from-[#998263] via-[#C7B985] to-[#A0865C]"
              ></span>
              style
            </h1>
          </div>

          <div className="bg-gradient-to-br from-[#111111] to-[#060606] md:w-[530px] w-[200px]  p-8 work-sans rounded-xl mt-auto mb-6">
            <h1 style={{ fontFamily: 'BodoniBook' }} className="text-white text-xl uppercase font-light pb-2 w-[350px]">Are you READY to invest in your OWN Food and Beverages Franchise?</h1>
            <p className="text-[#EBEBEB] text-xs font-light">Fill out the form below & learn more about our franchise opportunities!</p>
            <form className="text-white text-xs w-full flex flex-col gap-4 mt-6">
              <div className="flex gap-4 w-full">
                <input name="name" className="outline-none border-b border-[#EBEBEB]  py-4 placeholder-[#EBEBEB] w-fit basis-1/3" type="text" placeholder="NAME" />
                <input name="tel" className="outline-none border-b border-[#EBEBEB]   py-4 placeholder-[#EBEBEB] w-fit basis-1/3" type="tel" placeholder="NUMBER" />
                <input name="email" className="outline-none border-b border-[#EBEBEB]  py-4 placeholder-[#EBEBEB] basis-1/3" type="email" placeholder="EMAIL" />
              </div>
              <div className="my-1 flex justify-between gap-4 text-xs">
                <select className="w-full border-b outline-none py-4 uppercase" name="" id=""><option value="">Choose vertical</option></select>
                <select className="w-full border-b outline-none py-4 uppercase" name="" id=""><option value="">Investment capacity</option></select>
              </div>
              <div className="flex justify-between gap-4">
                <input name="email" className="outline-none border-b py-4 border-[#EBEBEB]  w-[260px] placeholder-[#EBEBEB] text-xs" type="text" placeholder="STATE" />
                <input className="outline-none border-b border-[#EBEBEB] py-4 w-[260px] placeholder-[#EBEBEB] text-xs" type="text" placeholder="CITY" />
              </div>
              <div className="my-2 flex flex-col placeholder-[#EBEBEB]">
                <textarea className="outline-none border-b  placeholder-[#EBEBEB]" name="" id="" placeholder="MESSAGE"></textarea>
                <button style={{fontFamily: 'Helvetica'}} className="uppercase  font-normal mt-10 p-4 tracking-wider text-md bg-[linear-gradient(90deg,_#84613B_-10.87%,_#AA8B55_5.15%,_#A48454_13.62%,_#C7B07C_31.26%,_#BFA573_46.14%,_#C5AD78_55.71%,_#C1A670_83.29%,_#EAD9A1_99.8%)] cursor-pointer"><p className="gradient-text-btn">Connect now</p></button>
              </div>
            </form>
            <div className="absolute right-45 bottom-15 z-0">
              {/* <img src="./images/fblend.svg" alt="" /> */}
            </div>
          </div>
        </main>
      </section>

      <section className="w-full h-full min-h-[150vh] bg-white relative">
        <Image alt="goldenFLogo" src="./goldenF.svg" width={335} height={640} className="absolute w-fit h-fit top-0 left-10 z-[1]" />
        <Image alt="goldenFLogo" src="./emptyDiamond.svg" width={335} height={640} className="absolute w-fit h-fit top-10 right-0 z-10" />
        <div className="w-full h-full max-w-[1400px] mx-auto px-5 py-[100px] flex flex-col gap-5">
          <span className="flex flex-row justify-between w-full">
            <h4 style={{ fontFamily: 'HelveticaBold' }} className="text-lg tracking-wider font-semibold text-[#333333] text-center flex flex-row justify-end">ABOUT <img src="./arrowRightDown.svg" alt="" className="w-4 h-4 mt-2 ml-3" /></h4>
            <h3
              style={{ fontFamily: 'Bodoni' }}
              className="text-[70px] gradient-text"
            >
              Lorem Ipsum <i className="opacity-0">Lorem </i> <br />
              <i className="opacity-0">Lorem </i>Lorem Ipsum style
            </h3>
          </span>

          <p className="text-xl leading-[140%] font-normal text-[#333333]">FashionTV presents F Real Estate Brand Licensing that is an entire brand vision in the luxury real estate spectrum, comprising different kinds of real estate licensing verticals, ranging from residential to commercial, including hospitality. Exploring new vistas in luxury real estate, FashionTV has extended its brand perspective into real estate developments having introduced a unique concept in the history of real estate.</p>
        </div>

        <div className="w-full h-[550px] max-w-[1400px] mx-auto bg-[url('/reimagine.png')] bg-cover rounded-md p-18 relative z-[1] mb-10">
        </div>

        <div className="w-full h-full max-w-[1400px] mx-auto px-5 py-[100px] flex flex-col gap-5">
          <span className="flex flex-row justify-between w-full">
            <span className="w-fit h-full flex flex-col">
              <h4 style={{ fontFamily: 'HelveticaBold' }} className="text-lg tracking-wider font-semibold text-[#333333] text-center flex flex-row justify-end">STATISTICS <img src="./arrowRightDown.svg" alt="" className="w-4 h-4 mt-2 ml-3" /></h4>
              <Image src="/fDiamond.svg" width={300} height={300} className="w-34 h-34 mt-8" />
            </span>
            <h3
              style={{ fontFamily: 'Bodoni' }}
              className="text-[70px] text-[#3D3D3D] leading-[120%]"
            >
              The Number<i className="opacity-0">Lorem </i> <br />
              <i className="opacity-0">Lorem </i>Behind The Vision
            </h3>
          </span>

          <div className="w-full h-full flex flex-row max-w-[1400px] mx-auto border-[1px] border-[#BCBCBC] rounded-xl bg-[url('/floatingBg.svg')] py-10 mt-10">
            <span className="w-full h-full flex flex-col justify-center items-center">
              <h3 style={{ fontFamily: 'BodoniBook' }} className="gradient-text text-[60px] font-medium">20+</h3>
              <p className="text-lg text-[#2e2e2e] font-medium">Projects</p>
            </span>

            <span className="w-full h-full flex flex-col justify-center items-center">
              <h3 style={{ fontFamily: 'BodoniBook' }} className="gradient-text text-[60px] font-medium">500M
                +</h3>
              <p className="text-lg text-[#2e2e2e] font-medium">Valuation</p>
            </span>

            <span className="w-full h-full flex flex-col justify-center items-center">
              <h3 style={{ fontFamily: 'BodoniBook' }} className="gradient-text text-[60px] font-medium">2000+</h3>
              <p className="text-lg text-[#2e2e2e] font-medium">Total Unit</p>
            </span>

            <span className="w-full h-full flex flex-col justify-center items-center">
              <h3 style={{ fontFamily: 'BodoniBook' }} className="gradient-text text-[60px] font-medium">10M+</h3>
              <p className="text-lg text-[#2e2e2e] font-medium">Sq. Ft. Designed</p>
            </span>
          </div>
        </div>

        <div className="w-full h-full bg-black pb-10 py-20 relative">
          <Image src="./goldenFDark.svg" width={700} height={700} className="absolute bottom-0 w-fit h-[600px] left-10" />
          <h3 style={{ fontFamily: 'BodoniBook' }} className="text-6xl font-medium gradient-text text-center tracking-[3px]">OUR PROJECTS</h3>

          <div className="w-full h-[430px] bg-cover bg-[center_10%] max-w-[1400px] flex flex-row mx-auto p-18 mt-10 px-20 z-[3] relative rounded-md"
            style={{
              backgroundImage: `url('${projectShowcase}')`
            }}>
            <span className="w-full h-full absolute top-0 left-0 right-0 bg-gradient-to-r from-[#00000096] to-[#2e2e2e7e]"></span>
            <div className="w-full h-full flex flex-col justify-between flex-2/5 z-[3]">
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
        </div>

        <div className="w-full h-full min-h- bg-[url('/saleskitBg.svg')] bg-cover bg-right min-h-[750px] flex justify-center items-center">
          <div className="w-full h-full bg-[#DFD1B4] p-12 max-w-[700px] mx-auto relative">
            <Image alt="goldenFLogo" src="./goldenDiamond.svg" width={335} height={640} className="absolute w-fit h-fit top-0 left-0 z-[1]" />
            <h4 style={{ fontFamily: 'BodoniBook' }} className="text-[30px] font-medium">Download the Sales Kit Now!</h4>
            <p className="text-lg text-[#2A3443]">Get instant access to our Sales Kit and grab the benefits of partnering with our franchises. Download now and start your entrepreneurial journey.</p>

            <span className="w-full h-12 flex flex-row mt-6">
              <input type="email" placeholder="Enter your email" className="text-base bg-white w-full px-4 py-3" />
              <button className="bg-[#121A27] px-8 text-xs tracking-wider text-white">DOWNLOAD</button>
            </span>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
