"use client"

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import Image from "next/image";
import Footer from "./components/Footer";
import ProjectsCarousel from "./components/ProjectCarousel";
import { AnimatedCounter } from "./components/Counter";
import { useRouter } from "next/navigation";

const projects = [
  "/projects/project1.svg",
  "/projects/project2.svg",
  "/projects/project3.svg"
]

export default function Home() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    verticalCategory: '',
    verticalName: '',
    developerName: '',
    projectNumber: '',
    state: '',
    city: '',
    message: ''
  })


  const [formErrors, setFormErrors] = useState({});
  const [message, setMessage] = useState('Connect Now');
  const [authToken, setAuthToken] = useState("")
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [selectedState, setSelectedState] = useState("");
  const [capacities, setCapacities] = useState([])

  const [saleskitEmail, setSaleskitEmail] = useState({ email: "" })

  const router = useRouter()

  useEffect(() => {
    fetch("https://geoapi.ftvassets.in:4001/api/getaccesstoken", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "api-token": "j9EF8D8eDp_H5D40m01kiK9E7JnY7s8Yd8bkFkzIUs945wrtSCMTl94WJ7BW0Mbznh4",
        "user-email": "satejchauhan01@gmail.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAuthToken(data.auth_token);
        getState(data.auth_token);
      })
      .catch((error) => console.error("Token fetch error:", error));
  }, []);

  const getState = (token) => {
    fetch(`https://geoapi.ftvassets.in:4001/api/states/India`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setStates(data))
      .catch((error) => console.error("States fetch error:", error));
  };

  useEffect(() => {
    if (selectedState) {
      getCity(selectedState);
    }
  }, [selectedState]);

  useEffect(() => {
    if (formData.verticalCategory == "Residential") {
      setCapacities([
        "FTV Residences",
        "FTV Villas",
        "F Furnished Apartments",
      ])
    } else if (formData.verticalCategory == "Commercial") {
      setCapacities([
        "FTV Coworks",
        "FTV Malls",
        "FTV Business Bay",
        "FTV Outlet Malls",
      ])
    }
    else if (formData.verticalCategory == "Hospitality") {
      setCapacities([
        "FTV Hotels",
        "FTV Resorts",
        "FTV House",
      ])
    }
    else {
      setCapacities([])
    }
  }, [formData.verticalCategory])

  const getCity = (stateName) => {
    fetch(`https://geoapi.ftvassets.in:4001/api/cities/${stateName}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCities(data))
      .catch((error) => console.error("Cities fetch error:", error));
  };

  const handleStateChange = (event) => {
    const selectedStateValue = event.target.value;
    setSelectedState(selectedStateValue);
    setFormData((prevData) => ({
      ...prevData,
      state: selectedStateValue,
      city: "" // Reset city on state change
    }));
  };

  const submitSaleskitEmail = async (e) => {
    try {
      const res = await fetch('/api/saleskits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(saleskitEmail),
      });
      if (res.ok) {
        setSaleskitEmail({ email: "" })
      }
    }
    catch (err) {
      console.error(err);
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({}); // Clear previous errors

    const errors = {};
    const { name, mobile, email, verticalCategory, verticalName, developerName, projectNumber, state, city, message: userMessage } = formData;

    if (!name) errors.name = "Name is required.";
    if (!mobile) errors.mobile = "Mobile number is required.";
    else if (!/^[0-9]{10}$/.test(mobile)) errors.mobile = "Enter a valid 10-digit number.";

    if (!email) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email.";

    if (!verticalCategory) errors.verticalCategory = "Choose a vertical category.";
    if (!verticalName) errors.verticalName = "Select a vertical.";
    if (!developerName) errors.developerName = "Developer name is required.";
    if (!projectNumber) errors.projectNumber = "Enter number of projects.";
    if (!state) errors.state = "Select a state.";
    if (!city) errors.city = "Select a city.";
    if (!userMessage) errors.message = "Message cannot be empty.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      setMessage("Please wait....")
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    


      const data = await res.json();

      if (res.ok) {
        setFormData({
          name: '',
          mobile: '',
          email: '',
          verticalCategory: '',
          verticalName: '',
          developerName: '',
          projectNumber: '',
          state: '',
          city: '',
          message: ''
        });
        setMessage("Submitted successfully!")
        router.push('/thankyou')
      } else {
        console.log(res)
        setMessage("Please try again!")
      }
    } catch (err) {
      console.error(err);
      setMessage("Error occured!")
    }
  };


  return (
    <div className="w-full h-full flex flex-col overflow-x-hidden">
<section className="relative w-full min-h-screen bg-cover bg-center bg-[url('/header.svg')] overflow-hidden">

  {/* VIDEO BACKGROUND */}
  <video
    src="./headerBg.mp4"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* OVERLAY GRADIENT */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#000000be] to-[#0000] z-[1]"></div>

  {/* CONTENT */}
  <div className="relative z-[2] flex flex-col min-h-screen">
    <Navbar />

    <main className="flex-1 w-full max-w-[1400px] mx-auto flex flex-col gap-0 justify-center md:items-end items-start lg:pt-[20px] pt-[0vh] px-5">
      
      {/* HEADING */}
      <div className="w-fit md:mx-0">
        <h1
          style={{ fontFamily: 'BodoniBook' }}
          className="w-fit lg:text-[4vw] text-[8vw] lg:text-end text-start tracking-tight md:leading-[75%] leading-[80%] text-white"
        >
          More than property <br /> it&apos;s a statement of style
        </h1>
      </div>

      {/* FORM BOX */}
      <div className="bg-gradient-to-br from-[#111111] to-[#060606] md:w-[530px] max-w-full lg:p-8 p-5 rounded-xl lg:mt-10 mt-6 mb-6 w-full h-fit">
        <h1
          style={{ fontFamily: 'Helvetica' }}
          className="text-white lg:text-xl text-sm uppercase font-light pb-2 max-w-full"
        >
          Start your brand licensing <br /> journey here
        </h1>

        <form className="text-white text-xs w-full flex flex-col md:gap-2 gap-1 mt-2">
          <div className="flex flex-row gap-4 w-full">
            <div className="w-full lg:basis-1/2">
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                name="name"
                className="outline-none border-b border-[#EBEBEB] lg:py-4 py-3 placeholder-[#EBEBEB] w-full bg-transparent"
                type="text"
                placeholder="NAME"
              />
              {formErrors.name && <span className="text-red-400 text-xs">{formErrors.name}</span>}
            </div>

            <div className="w-full lg:basis-1/2">
              <input
                value={formData.mobile}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, mobile: e.target.value }))
                }
                name="mobile"
                className="outline-none border-b border-[#EBEBEB] lg:py-4 py-3 placeholder-[#EBEBEB] w-full"
                type="tel"
                placeholder="CONTACT"
              />
              {formErrors.mobile && <span className="text-red-400 text-xs">{formErrors.mobile}</span>}
            </div>
          </div>

          <div>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              name="email"
              className="outline-none border-b border-[#EBEBEB] lg:py-4 py-3 placeholder-[#EBEBEB] w-full"
              type="email"
              placeholder="EMAIL"
            />
            {formErrors.email && <span className="text-red-400 text-xs">{formErrors.email}</span>}
          </div>

          <div className="lg:my-1 my-0 flex flex-col lg:flex-row justify-between gap-4 text-xs">
            <div className="w-full">
              <select
                value={formData.verticalCategory}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, verticalCategory: e.target.value }))
                }
                className="w-full border-b outline-none lg:py-4 py-2 uppercase"
                name="verticalCategory"
              >
                <option className="bg-[#111111] text-white" value="">CHOOSE VERTICAL CATEGORY</option>
                <option className="bg-[#111111] text-white" value="Residential">Residential</option>
                <option className="bg-[#111111] text-white" value="Commercial">Commercial</option>
                <option className="bg-[#111111] text-white" value="Hospitality">Hospitality</option>
              </select>
              {formErrors.verticalCategory && <span className="text-red-400 text-xs">{formErrors.verticalCategory}</span>}
            </div>

            <div className="w-full">
              <select
                value={formData.verticalName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, verticalName: e.target.value }))
                }
                className="w-full border-b outline-none lg:py-4 py-2 uppercase"
                name="verticalName"
              >
                <option className="bg-[#111111] text-white" value="">VERTICAL</option>
                {capacities.map((capacity, index) => (
                  <option className="bg-[#111111] text-white" key={index} value={capacity}>
                    {capacity}
                  </option>
                ))}
              </select>
              {formErrors.verticalName && <span className="text-red-400 text-xs">{formErrors.verticalName}</span>}
            </div>
          </div>

          <div className="flex flex-row justify-between gap-4">
            <div className="w-full lg:basis-1/2">
              <input
                value={formData.developerName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, developerName: e.target.value }))
                }
                name="developerName"
                className="outline-none border-b border-[#EBEBEB] lg:py-4 py-3 placeholder-[#EBEBEB] w-full bg-transparent"
                type="text"
                placeholder="DEVELOPER NAME"
              />
              {formErrors.developerName && <span className="text-red-400 text-xs">{formErrors.developerName}</span>}
            </div>

            <div className="w-full lg:basis-1/2">
              <input
                value={formData.projectNumber}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, projectNumber: e.target.value }))
                }
                name="projectNumber"
                className="outline-none border-b border-[#EBEBEB] lg:py-4 py-3 placeholder-[#EBEBEB] w-full"
                type="text"
                placeholder="NUMBER OF PROJECTS"
              />
              {formErrors.projectNumber && <span className="text-red-400 text-xs">{formErrors.projectNumber}</span>}
            </div>
          </div>

          <div className="flex flex-row justify-between gap-4">
            <div className="w-full lg:basis-1/2">
              <select
                value={formData.state}
                onChange={handleStateChange}
                name="state"
                className="outline-none border-b border-[#EBEBEB] lg:py-4 py-3 w-full"
              >
                <option className="bg-[#111111] text-white" value="">SELECT STATE</option>
                {states.map((state, index) => (
                  <option className="bg-[#111111] text-white" key={index} value={state.state_name}>
                    {state.state_name}
                  </option>
                ))}
              </select>
              {formErrors.state && <span className="text-red-400 text-xs">{formErrors.state}</span>}
            </div>

            <div className="w-full lg:basis-1/2">
              <select
                value={formData.city}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, city: e.target.value }))
                }
                name="city"
                className="outline-none border-b border-[#EBEBEB] lg:py-4 py-3 w-full"
              >
                <option className="bg-[#111111] text-white" value="">SELECT CITY</option>
                {cities.map((city, index) => (
                  <option className="bg-[#111111] text-white" key={index} value={city.city_name}>
                    {city.city_name}
                  </option>
                ))}
              </select>
              {formErrors.city && <span className="text-red-400 text-xs">{formErrors.city}</span>}
            </div>
          </div>

          <div className="my-2 flex flex-col placeholder-[#EBEBEB]">
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              name="message"
              className="outline-none border-b md:min-h-14 placeholder-[#EBEBEB]"
              placeholder="MESSAGE"
            ></textarea>
            {formErrors.message && <span className="text-red-400 text-xs">{formErrors.message}</span>}

            <button
              onClick={handleSubmit}
              style={{ fontFamily: 'Helvetica' }}
              className="uppercase font-medium lg:mt-5 mt-4 lg:p-3 p-2 tracking-wider lg:text-sm text-xs bg-[linear-gradient(90deg,_#84613B_-10.87%,_#AA8B55_5.15%,_#A48454_13.62%,_#C7B07C_31.26%,_#BFA573_46.14%,_#C5AD78_55.71%,_#C1A670_83.29%,_#EAD9A1_99.8%)] cursor-pointer mb-1"
            >
              <p className="gradient-text-btn">{message}</p>
            </button>
          </div>
        </form>

        <p className="text-[#d4d4d4] text-[10px] font-light text-justify mt-2">
          Note: By submitting this form, you agree to authorize fashiontv and affiliated partners,
          including our authorized third parties, to contact you and/or send relevant information
          via Email, SMS, and WhatsApp. This authorization will override any registration with the
          DNC/NDNC.
        </p>
      </div>
    </main>
  </div>
</section>


      <section className="w-full h-full lg:min-h-[150vh] bg-white relative">
        <Image alt="goldenFLogo" src="./goldenF.svg" width={335} height={640} className="absolute lg:w-fit lg:h-fit w-[50px] top-[14vh] lg:left-10 left-4 z-[1]" />
        <Image alt="goldenFLogo" src="./emptyDiamond.svg" width={335} height={640} className="absolute lg:w-fit lg:h-fit w-[70px] top-10 right-0 md:z-10 z-0" />
        <div className="w-full h-full max-w-[1400px] mx-auto lg:py-[100px] pt-20 pb-5 flex flex-col gap-5 px-7">
          <span className="flex flex-row justify-between w-full">
            <h4
              style={{ fontFamily: 'HelveticaBold' }} className="lg:text-lg text-sm tracking-wider font-semibold text-[#333333] text-center flex flex-row justify-end mt-1">ABOUT <Image height={10} width={10} src="./arrowRightDown.svg" alt="" className="lg:w-4 lg:h-4 h-3 w-3 mt-2 ml-3" /></h4>
            <h3
              style={{ fontFamily: 'Bodoni' }}
              className="lg:text-[70px] md:text-4xl text-2xl gradient-text leading-[100%] md:text-start text-end"
            >
              Brand your project<i style={{ fontFamily: 'Times new roman' }} className="opacity-0  lg:text-3xl text-[2px] md:mx-4 not-italic">Lorem </i> <br />
              <i style={{ fontFamily: 'Times new roman' }} className="opacity-0 lg:text-5xl text-[2px] not-italic">Lorem ipsum re </i>with Global Power
            </h3>
          </span>

          <p
            className="lg:text-xl text-sm text-justify leading-[140%] font-normal text-[#333333] z-10">F Real Estate by FashionTV offers exclusive licensing that transforms real estate projects into globally branded, high-style developments, blending signature designs with international recognition. Transform your vision into a high-style, globally admired project. With FashionTV’s signature design sensibility and international visibility, your development gains a bold market advantage, attracting premium buyers and standing apart through a unique blend of fashion, luxury, and architectural sophistication.</p>
        </div>

        <div className="lg:w-[calc(100%-3vw)] w-[calc(100%-40px)] lg:h-[550px] h-[240px] max-w-[1400px] mx-auto bg-[url('/reimagine.png')] bg-cover rounded-md p-18 relative z-[1] lg:mb-10 origin-bottom"></div>

        <div className="w-full h-full max-w-[1400px] mx-auto lg:py-[100px] pt-10 pb-20 flex flex-col gap-5 px-5">
          <span className="flex flex-row justify-between w-full">
            <span

              className="w-fit h-full flex flex-col">
              <h4 style={{ fontFamily: 'HelveticaBold' }} className="lg:text-lg text-sm tracking-wider font-semibold text-[#333333] text-center flex flex-row justify-start">STATISTICS <Image height={10} width={10} src="./arrowRightDown.svg" alt="" className="w-4 h-4 mt-2 ml-3" /></h4>
              <Image src="/fDiamond.svg" alt="fdiamond" width={300} height={300} className="lg:w-34 lg:h-34 w-14 h-12 lg:mt-8" />
            </span>
            <h3
              style={{ fontFamily: 'Bodoni' }}
              className="lg:text-[70px] md:text-4xl text-2xl text-[#3D3D3D] leading-[100%] md:text-start text-end"
            >
              The Numbers<i style={{ fontFamily: 'Times new roman' }} className="opacity-0  lg:text-3xl text-[2px] md:mx-4 not-italic">Lorem </i> <br />
              <i style={{ fontFamily: 'Times new roman' }} className="opacity-0 lg:text-5xl text-[2px] not-italic">Lorem ipsum re </i>Behind The Vision
            </h3>
          </span>

          <div className="w-full h-full lg:flex lg:flex-row grid grid-cols-2 gap-x-10 gap-y-10 max-w-[1400px] mx-auto border-[1px] border-[#BCBCBC] rounded-xl bg-[url('/floatingBg.svg')] lg:py-10 py-5 lg:mt-10 p-10">
            <span className="w-full mx-auto h-full flex flex-col justify-center items-center">
              <span className="w-fit h-full flex flex-col justify-center items-start">
                <AnimatedCounter target={20} />
                <p className="lg:text-lg text-sm text-[#fff] font-medium">
                  Projects
                </p>
              </span>
            </span>

            <span className="w-full mx-auto h-full flex flex-col justify-center items-center">
              <span className="w-fit h-full flex flex-col justify-center items-start">
                <AnimatedCounter suffix={"M"} target={500} />
                <p className="lg:text-lg text-sm text-[#fff] font-medium">
                  Valuation
                </p>
              </span>

            </span>

            <span className="w-full mx-auto h-full flex flex-col justify-center items-center">
              <span className="w-fit h-full flex flex-col justify-center items-start">
                <AnimatedCounter suffix={""} target={2000} />
                <p className="lg:text-lg text-sm text-[#fff] font-medium">
                  Total Unit
                </p>
              </span>

            </span>

            <span className="w-full mx-auto h-full flex flex-col justify-center items-center">
              <span className="w-fit h-full flex flex-col justify-center items-start">
                <AnimatedCounter suffix={"M"} target={10} />
                <p className="lg:text-lg text-sm text-[#fff] font-medium">
                  Sq. Ft. Designed
                </p>
              </span>
            </span>
          </div>
        </div>
        <ProjectsCarousel projects={projects} />
        <div className="w-full h-full bg-[url('/saleskitBg.svg')] bg-cover bg-right min-h-[650px] flex justify-center items-center px-7">
          <div className="w-full h-full bg-[#DFD1B4] lg:p-12 p-5 max-w-[700px] mx-auto relative overflow-hidden">
            <Image alt="goldenFLogo" src="./goldenDiamond.svg" width={335} height={640} className="absolute w-fit h-fit top-0 left-0 z-[1]" />
            <Image alt="goldenFLogo" src="./goldenDiamond.svg" width={335} height={640} className="absolute w-fit h-fit bottom-5 right-[-20px] z-[1]" />
            <h4 style={{ fontFamily: 'BodoniBook' }} className="text-[28px] font-medium">Download the Sales Kit Now!</h4>
            <p className="text-lg text-[#2A3443] mt-2">Get instant access to our Sales Kit and grab the benefits of partnering with us. Download now and start your journey.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitSaleskitEmail();
              }}
              className="w-full h-12 flex flex-row mt-6 z-[3] relative"
            >
              <input
                value={saleskitEmail.email}
                onChange={(e) => setSaleskitEmail({ email: e.target.value })}
                type="email"
                required
                placeholder="Enter your email"
                className="md:text-base bg-white w-full h-10 px-4 md:py-3 py-2 text-xs"
              />
              <button type="submit" className="bg-[#121A27] md:px-8 text-xs tracking-wider text-white cursor-pointer w-fit h-10 px-2 placeholder:text-xs">
                DOWNLOAD
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
