"use client"

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Image from "next/image";
import Footer from "./components/Footer";
import ProjectsCarousel from "./components/ProjectCarousel";

const projects = [
  "/projects/project1.svg",
  "/projects/project2.svg",
  "/projects/project3.svg"
]


export default function Home() {


  return (
    <div className="w-full h-full flex flex-col pt-[100vh]">
      <section className="w-full h-full bg-[url('/header.svg')] min-h-screen bg-cover bg-center fixed top-0">
        <Navbar />
        <main className="w-full h-full min-h-screen max-w-[1400px] mx-auto flex flex-col justify-start md:items-end items-start lg:pt-[60px] pt-[20vh] px-5 ">
          <div className="w-fit  md:mx-0">
            <h1 style={{ fontFamily: 'BodoniBook' }}
              className="w-fit lg:text-[4vw] text-4xl lg:text-end text-start tracking-tight leading-[85%] 
              gradient-text">
              More than property <br /> it's a statement <br /> of
              <span
                className="inline-block align-middle lg:mx-8 mx-4 h-1 lg:w-[8vw] w-[50px] bg-gradient-to-r from-[#998263] via-[#C7B985] to-[#A0865C]"
              ></span>
              style
            </h1>
          </div>

          <div className="bg-gradient-to-br from-[#111111] to-[#060606] md:w-[530px] md:max-w-[530px]  max-w-[420px]  lg:p-8 p-5 rounded-xl lg:mt-3 mt-5 mb-6 w-full">
            <h1 style={{ fontFamily: 'BodoniBook' }} className="text-white lg:text-xl text-sm uppercase font-light pb-2 max-w-full">Are you READY to invest in your OWN Food and Beverages Franchise?</h1>
            <p className="text-[#EBEBEB] text-xs font-light">Fill out the form below & learn more about our franchise opportunities!</p>
            <form className="text-white text-xs w-full flex flex-col gap-4 mt-6">
              <div className="flex lg:flex-row flex-col lg:gap-4 gap-2 w-full">
                <input name="name" className="outline-none border-b border-[#EBEBEB]  lg:py-4 py-3 placeholder-[#EBEBEB] lg:w-fit w-full lg:basis-1/3 basis-full" type="text" placeholder="NAME" />
                <input name="tel" className="outline-none border-b border-[#EBEBEB] lg:py-4 py-3 placeholder-[#EBEBEB] lg:w-fit w-full lg:basis-1/3 basis-full" type="tel" placeholder="NUMBER" />
                <input name="email" className="outline-none border-b border-[#EBEBEB]  lg:py-4 py-3 placeholder-[#EBEBEB] lg:w-fit w-full lg:basis-1/3 basis-full" type="email" placeholder="EMAIL" />
              </div>
              <div className="lg:my-1 my-0 flex justify-between gap-4 text-xs">
                <select className="w-full border-b outline-none lg:py-4 py-2 text-[10px] uppercase" name="" id=""><option value="">Choose vertical</option></select>
                <select className="w-full border-b outline-none lg:py-4 py-2 text-[10px] uppercase" name="" id=""><option value="">Investment capacity</option></select>
              </div>
              <div className="flex lg:flex-row flex-row justify-between gap-4">
                <input name="email" className="outline-none border-b border-[#EBEBEB]  lg:py-4 py-3 placeholder-[#EBEBEB] lg:w-fit w-full lg:basis-1/2 basis-full" type="text" placeholder="STATE" />
                <input className="outline-none border-b border-[#EBEBEB]  lg:py-4 py-3 placeholder-[#EBEBEB] lg:w-fit w-full lg:basis-1/2 basis-full" type="text" placeholder="CITY" />
              </div>
              <div className="my-2 flex flex-col placeholder-[#EBEBEB]">
                <textarea className="outline-none border-b  placeholder-[#EBEBEB]" name="" id="" placeholder="MESSAGE"></textarea>
                <button style={{ fontFamily: 'Helvetica' }} className="uppercase  font-normal lg:mt-10 mt-4 lg:p-4 p-2 tracking-wider lg:text-sm text-xs bg-[linear-gradient(90deg,_#84613B_-10.87%,_#AA8B55_5.15%,_#A48454_13.62%,_#C7B07C_31.26%,_#BFA573_46.14%,_#C5AD78_55.71%,_#C1A670_83.29%,_#EAD9A1_99.8%)] cursor-pointer"><p className="gradient-text-btn">Connect now</p></button>
              </div>
            </form>
            <div className="absolute right-45 bottom-15 z-0">
              {/* <img src="./images/fblend.svg" alt="" /> */}
            </div>
          </div>
        </main>
      </section>

      <section className="w-full h-full lg:min-h-[150vh] bg-white relative">
        <Image alt="goldenFLogo" src="./goldenF.svg" width={335} height={640} className="absolute lg:w-fit lg:h-fit w-[50px] top-[14vh] lg:left-10 left-4 z-[1]" />
        <Image alt="goldenFLogo" src="./emptyDiamond.svg" width={335} height={640} className="absolute lg:w-fit lg:h-fit w-[70px] top-10 right-0 z-10" />
        <div className="w-full h-full max-w-[1400px] mx-auto lg:py-[100px] py-10 flex flex-col gap-5 px-5">
          <span className="flex flex-row justify-between w-full">
            <h4 style={{ fontFamily: 'HelveticaBold' }} className="lg:text-lg text-sm tracking-wider font-semibold text-[#333333] text-center flex flex-row justify-end">ABOUT <img src="./arrowRightDown.svg" alt="" className="lg:w-4 lg:h-4 h-3 w-3 mt-2 ml-3" /></h4>
            <h3
              style={{ fontFamily: 'Times new roman' }}
              className="lg:text-[70px] md:text-4xl text-2xl gradient-text"
            >
              Lorem Ipsum <i className="opacity-0 lg:text-2xl text-[10px]">Lorem </i> <br />
              <i className="opacity-0 lg:text-2xl text-[10px]">Lorem ipsum lorem</i>Lorem Ipsum style
            </h3>
          </span>

          <p className="lg:text-xl text-xs text-justify leading-[140%] font-normal text-[#333333]">FashionTV presents F Real Estate Brand Licensing that is an entire brand vision in the luxury real estate spectrum, comprising different kinds of real estate licensing verticals, ranging from residential to commercial, including hospitality. Exploring new vistas in luxury real estate, FashionTV has extended its brand perspective into real estate developments having introduced a unique concept in the history of real estate.</p>
        </div>

        <div className="lg:w-[calc(100%-3vw)] w-[calc(100%-40px)] lg:h-[550px] h-[240px] max-w-[1400px] mx-auto bg-[url('/reimagine.png')] bg-cover rounded-md p-18 relative z-[1] lg:mb-10"></div>

        <div className="w-full h-full max-w-[1400px] mx-auto lg:py-[100px] py-10 flex flex-col gap-5 px-5">
          <span className="flex flex-row justify-between w-full">
            <span className="w-fit h-full flex flex-col">
              <h4 style={{ fontFamily: 'HelveticaBold' }} className="lg:text-lg text-sm tracking-wider font-semibold text-[#333333] text-center flex flex-row justify-start">STATISTICS <img src="./arrowRightDown.svg" alt="" className="w-4 h-4 mt-2 ml-3" /></h4>
              <Image src="/fDiamond.svg" width={300} height={300} className="lg:w-34 lg:h-34 w-14 h-12 lg:mt-8" />
            </span>
            <h3
              style={{ fontFamily: 'Bodoni' }}
              className="lg:text-[70px] md:text-4xl text-2xl text-[#3D3D3D] leading-[120%]"
            >
              The Number<i className="opacity-0 lg:text-2xl text-[10px]">Lorem ipsum </i> <br />
              <i className="opacity-0 lg:text-2xl text-[10px]">Lorem ipsum lorem </i>Behind The Vision
            </h3>
          </span>

          <div className="w-full h-full lg:flex lg:flex-row grid grid-cols-2 gap-x-10 gap-y-10 max-w-[1400px] mx-auto border-[1px] border-[#BCBCBC] rounded-xl bg-[url('/floatingBg.svg')] lg:py-10 py-5 lg:mt-10">
            <span className="w-full mx-auto h-full flex flex-col justify-center items-center">
              <div className="flex flex-col justify-start items-start w-fit">
                <h3 style={{ fontFamily: 'BodoniBook' }} className="gradient-text lg:text-[60px] text-[35px] font-medium">
                  20+
                </h3>
                <p className="lg:text-lg text-sm text-[#2e2e2e] font-medium">
                  Projects
                </p>
              </div>
            </span>

            <span className="w-full mx-auto h-full flex flex-col justify-center items-center">
              <div className="flex flex-col justify-start items-start w-fit">
                <h3 style={{ fontFamily: 'BodoniBook' }} className="gradient-text lg:text-[60px] text-[35px] font-medium">
                  500M
                  +
                </h3>
                <p className="lg:text-lg text-sm text-[#2e2e2e] font-medium">
                  Valuation
                </p>
              </div>
            </span>

            <span className="w-full mx-auto h-full flex flex-col justify-center items-center">
              <div className="flex flex-col justify-start items-start w-fit">
                <h3 style={{ fontFamily: 'BodoniBook' }} className="gradient-text lg:text-[60px] text-[35px] font-medium">
                  2000+
                </h3>
                <p className="lg:text-lg text-sm text-[#2e2e2e] font-medium">
                  Total Unit
                </p>
              </div>
            </span>

                        <span className="w-full mx-auto h-full flex flex-col justify-center items-center">
              <div className="flex flex-col justify-start items-start w-fit">
                <h3 style={{ fontFamily: 'BodoniBook' }} className="gradient-text lg:text-[60px] text-[35px] font-medium">
                  10M+
                </h3>
                <p className="lg:text-lg text-sm text-[#2e2e2e] font-medium">
                  Sq. Ft. Designed
                </p>
              </div>
            </span>
          </div>
        </div>
        <ProjectsCarousel projects={projects} />
        <div className="w-full h-full bg-[url('/saleskitBg.svg')] bg-cover bg-right min-h-[750px] flex justify-center items-center ">
          <div className="w-full h-full bg-[#DFD1B4] lg:p-12 p-5 max-w-[700px] mx-auto relative overflow-hidden">
            <Image alt="goldenFLogo" src="./goldenDiamond.svg" width={335} height={640} className="absolute w-fit h-fit top-0 left-0 z-[1]" />
            <Image alt="goldenFLogo" src="./goldenDiamond.svg" width={335} height={640} className="absolute w-fit h-fit bottom-5 right-[-20px] z-[1]" />
            <h4 style={{ fontFamily: 'BodoniBook' }} className="text-[30px] font-medium">Download the Sales Kit Now!</h4>
            <p className="text-lg text-[#2A3443] mt-2">Get instant access to our Sales Kit and grab the benefits of partnering with our franchises. Download now and start your entrepreneurial journey.</p>

            <span className="w-full h-12 flex flex-row mt-6 z-[3] relative">
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
