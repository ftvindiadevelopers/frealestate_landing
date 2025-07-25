"use client"

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import Image from "next/image";
import Footer from "./components/Footer";
import ProjectsCarousel from "./components/ProjectCarousel";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion'
import { AnimatedCounter } from "./components/Counter";
import MultiStepForm from "./components/ContactForm";

const projects = [
  "/projects/project1.svg",
  "/projects/project2.svg",
  "/projects/project3.svg"
]


export default function Home() {

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    vertical: '',
    investmentCapacity: '',
    state: '',
    city: '',
    message: ''
  })

  const [message, setMessage] = useState("")

const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage('');

  // Validation
  const { name, contact, email, vertical, investmentCapacity, state, city, message } = formData;

  if (!name || !contact || !email || !vertical || !investmentCapacity || !state || !city || !message) {
    setMessage('Please fill in all the fields.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setMessage('Please enter a valid email.');
    return;
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(contact)) {
    setMessage('Please enter a valid 10-digit number.');
    return;
  }

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('Contact submitted successfully!');
      setFormData({
        name: '',
        contact: '',
        email: '',
        vertical: '',
        investmentCapacity: '',
        state: '',
        city: '',
        message: ''
      });
    } else {
      setMessage(data.error || 'Something went wrong');
    }
  } catch (err) {
    console.error(err);
    setMessage('Server error');
  }
};

  return (
    <div className="w-full h-full flex flex-col pt-[100vh] overflow-x-hidden">
      <section className="w-full h-full min-h-screen flex items-end bg-cover bg-center fixed top-0">
        <video src="./headerBg.mp4" className="w-full h-full absolute top-0 left-0 right-0 bottom-0 object-cover object-center z-[1]" autoPlay loop muted></video>
        <Navbar />
        <main className="w-full h-full max-h-[800px] max-w-[1400px] mx-auto flex flex-col gap-0 justify-center md:items-end items-start lg:pt-[60px] pt-[20vh] px-5 z-[3] relative">
          <div className="w-fit  md:mx-0">
            <h1 style={{ fontFamily: 'BodoniBook' }}
              className="w-fit lg:text-[4vw] text-4xl lg:text-end text-start tracking-tight leading-[85%] 
              gradient-silver-text opacity-100">
              More than property <br /> it's a statement of style
            </h1>
          </div>

          {/* <div className="bg-gradient-to-br from-[#111111] to-[#060606] md:w-[530px] md:max-w-[530px]  max-w-[420px]  lg:p-8 p-5 rounded-xl lg:mt-10 mt-5 mb-6 w-full">
            <h1 style={{ fontFamily: 'Helvetica' }} className="text-white lg:text-xl text-sm uppercase font-light pb-2 max-w-full">Start your brand licensing <br /> journey here</h1>
            <form className="text-white text-xs w-full flex flex-col gap-4 mt-2">
              <div className="flex lg:flex-row flex-col lg:gap-4 gap-2 w-full">
                <input value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} name="name" className="outline-none border-b border-[#EBEBEB]  lg:py-4 py-3 placeholder-[#EBEBEB] lg:w-fit w-full lg:basis-1/2 basis-full" type="text" placeholder="NAME" />
                <input value={formData.contact} onChange={(e) => setFormData((prev) => ({ ...prev, contact: e.target.value }))} name="contact" className="outline-none border-b border-[#EBEBEB] lg:py-4 py-3 placeholder-[#EBEBEB] lg:w-fit w-full lg:basis-1/2 basis-full" type="tel" placeholder="CONTACT" />
              </div>
              <input value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} name="email" className="outline-none border-b border-[#EBEBEB]  lg:py-4 py-3 placeholder-[#EBEBEB] w-full lg:basis-1/3 basis-full" type="email" placeholder="EMAIL" />
              <div className="lg:my-1 my-0 flex justify-between gap-4 text-xs">
                <select value={formData.vertical} onChange={(e) => setFormData((prev) => ({ ...prev, vertical: e.target.value }))} className="w-full border-b outline-none lg:py-4 py-2 text-[10px] uppercase outline-none focus:outline-none" name="vertical" id="">
                  <option className="bg-[#111111] text-white border-none outline-0" value="">Choose vertical</option>
                  <option className="bg-[#111111] text-white" value="Residential">Residential</option>
                  <option className="bg-[#111111] text-white" value="Commercial">Commercial</option>
                  <option className="bg-[#111111] text-white" value="Hospitality">Hospitality</option>
                </select>
                <select value={formData.investmentCapacity} onChange={(e) => setFormData((prev) => ({ ...prev, investmentCapacity: e.target.value }))} className="w-full border-b outline-none lg:py-4 py-2 text-[10px] uppercase" name="investmentCapacity" id=""><option value="">Investment capacity</option></select>
              </div>
              <div className="flex lg:flex-row flex-row justify-between gap-4">
                <input value={formData.state} onChange={(e) => setFormData((prev) => ({ ...prev, state: e.target.value }))} name="state" className="outline-none border-b border-[#EBEBEB]  lg:py-4 py-3 placeholder-[#EBEBEB] lg:w-fit w-full lg:basis-1/2 basis-full" type="text" placeholder="STATE" />
                <input value={formData.city} onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))} name="city" className="outline-none border-b border-[#EBEBEB]  lg:py-4 py-3 placeholder-[#EBEBEB] lg:w-fit w-full lg:basis-1/2 basis-full" type="text" placeholder="CITY" />
              </div>
              <div className="my-2 flex flex-col placeholder-[#EBEBEB]">
                <textarea value={formData.message} onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))} name="message" className="outline-none border-b  placeholder-[#EBEBEB]" id="" placeholder="MESSAGE"></textarea>
                <button onClick={handleSubmit} style={{ fontFamily: 'Helvetica' }} className="uppercase  font-normal lg:mt-5 mt-4 lg:p-4 p-2 tracking-wider lg:text-sm text-xs bg-[linear-gradient(90deg,_#84613B_-10.87%,_#AA8B55_5.15%,_#A48454_13.62%,_#C7B07C_31.26%,_#BFA573_46.14%,_#C5AD78_55.71%,_#C1A670_83.29%,_#EAD9A1_99.8%)] cursor-pointer mb-1"><p className="gradient-text-btn">Connect now</p></button>
                {message}
              </div>
            </form>
            <p className="text-[#d4d4d4] text-xs font-light text-justify mt-2">Note: By submitting this form, you agree to authorize fashiontv and affiliated partners, including our authorized third parties, to contact you and/or send relevant information via Email, SMS, and WhatsApp. This authorization will override any registration with the DNC/NDNC.</p>
          </div> */}

        
            <MultiStepForm/>
        </main>
      </section>

      <section className="w-full h-full lg:min-h-[150vh] bg-white relative">
        <Image alt="goldenFLogo" src="./goldenF.svg" width={335} height={640} className="absolute lg:w-fit lg:h-fit w-[50px] top-[14vh] lg:left-10 left-4 z-[1]" />
        <Image alt="goldenFLogo" src="./emptyDiamond.svg" width={335} height={640} className="absolute lg:w-fit lg:h-fit w-[70px] top-10 right-0 z-10" />
        <div className="w-full h-full max-w-[1400px] mx-auto lg:py-[100px] py-10 flex flex-col gap-5 px-5">
          <span className="flex flex-row justify-between w-full">
            <h4
              style={{ fontFamily: 'HelveticaBold' }} className="lg:text-lg text-sm tracking-wider font-semibold text-[#333333] text-center flex flex-row justify-end mt-1">ABOUT <img src="./arrowRightDown.svg" alt="" className="lg:w-4 lg:h-4 h-3 w-3 mt-2 ml-3" /></h4>
            <h3
              style={{ fontFamily: 'Times new roman' }}
              className="lg:text-[70px] md:text-4xl text-2xl gradient-text relative"
            >
              Brand your project <i style={{ fontFamily: 'Times new roman' }} className="opacity-0  lg:text-3xl text-[20px] mx-4 not-italic">Lorem </i> <br />
              <i style={{ fontFamily: 'Times new roman' }} className="opacity-0 lg:text-5xl text-[10px] not-italic">Lorem ipsum lore</i>with Global Power
            </h3>
          </span>

          <p
            className="lg:text-xl text-sm text-justify leading-[140%] font-normal text-[#333333]">F Real Estate by FashionTV offers exclusive licensing that transforms real estate projects into globally branded, high-style developments, blending signature designs with international recognition. Transform your vision into a high-style, globally admired project. With FashionTV’s signature design sensibility and international visibility, your development gains a bold market advantage, attracting premium buyers and standing apart through a unique blend of fashion, luxury, and architectural sophistication.</p>
        </div>

        <div className="lg:w-[calc(100%-3vw)] w-[calc(100%-40px)] lg:h-[550px] h-[240px] max-w-[1400px] mx-auto bg-[url('/reimagine.png')] bg-cover rounded-md p-18 relative z-[1] lg:mb-10 origin-bottom"></div>

        <div className="w-full h-full max-w-[1400px] mx-auto lg:py-[100px] py-10 flex flex-col gap-5 px-5">
          <span className="flex flex-row justify-between w-full">
            <span

              className="w-fit h-full flex flex-col">
              <h4 style={{ fontFamily: 'HelveticaBold' }} className="lg:text-lg text-sm tracking-wider font-semibold text-[#333333] text-center flex flex-row justify-start">STATISTICS <img src="./arrowRightDown.svg" alt="" className="w-4 h-4 mt-2 ml-3" /></h4>
              <Image src="/fDiamond.svg" alt="fdiamond" width={300} height={300} className="lg:w-34 lg:h-34 w-14 h-12 lg:mt-8" />
            </span>
            <h3
              style={{ fontFamily: 'Bodoni' }}
              className="lg:text-[70px] md:text-4xl text-2xl text-[#3D3D3D] leading-[120%]"
            >
              The Numbers<i style={{ fontFamily: 'Times new roman' }} className="opacity-0  lg:text-3xl text-[20px] mx-4 not-italic">Lorem </i> <br />
              <i style={{ fontFamily: 'Times new roman' }} className="opacity-0 lg:text-5xl text-[10px] not-italic">Lorem ipsum re </i>Behind The Vision
            </h3>
          </span>

          <div className="w-full h-full lg:flex lg:flex-row grid grid-cols-2 gap-x-10 gap-y-10 max-w-[1400px] mx-auto border-[1px] border-[#BCBCBC] rounded-xl bg-[url('/floatingBg.svg')] lg:py-10 py-5 lg:mt-10 p-10">
            <span className="w-full mx-auto h-full flex flex-col justify-start items-start">
              <AnimatedCounter target={20} />
              <p className="lg:text-lg text-sm text-[#2e2e2e] font-medium">
                Projects
              </p>
            </span>

            <span className="w-full mx-auto h-full flex flex-col justify-start items-start">
              <AnimatedCounter suffix={"M"} target={500} />
              <p className="lg:text-lg text-sm text-[#2e2e2e] font-medium">
                Valuation
              </p>
            </span>

            <span className="w-full mx-auto h-full flex flex-col justify-start items-start">
              <AnimatedCounter suffix={""} target={2000} />
              <p className="lg:text-lg text-sm text-[#2e2e2e] font-medium">
                Total Unit
              </p>
            </span>

            <span className="w-full mx-auto h-full flex flex-col justify-start items-start">
              <AnimatedCounter suffix={"M"} target={10} />
              <p className="lg:text-lg text-sm text-[#2e2e2e] font-medium">
                Sq. Ft. Designed
              </p>
            </span>
          </div>
        </div>
        <ProjectsCarousel projects={projects} />
        <div className="w-full h-full bg-[url('/saleskitBg.svg')] bg-cover bg-right min-h-[750px] flex justify-center items-center ">
          <div className="w-full h-full bg-[#DFD1B4] lg:p-12 p-5 max-w-[700px] mx-auto relative overflow-hidden">
            <Image alt="goldenFLogo" src="./goldenDiamond.svg" width={335} height={640} className="absolute w-fit h-fit top-0 left-0 z-[1]" />
            <Image alt="goldenFLogo" src="./goldenDiamond.svg" width={335} height={640} className="absolute w-fit h-fit bottom-5 right-[-20px] z-[1]" />
            <h4 style={{ fontFamily: 'BodoniBook' }} className="text-[30px] font-medium">Download the Sales Kit Now!</h4>
            <p className="text-lg text-[#2A3443] mt-2">Get instant access to our Sales Kit and grab the benefits of partnering with us. Download now and start your journey.</p>

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
