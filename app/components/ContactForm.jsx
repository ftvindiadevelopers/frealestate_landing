import React, { useState } from "react";
import { BsArrowUpRight } from 'react-icons/bs'

export default function MultiStepForm() {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        vertical: "",
        investmentCapacity: "",
        state: "",
        city: "",
        message: "",
    });

    const [step, setStep] = useState(1);
    const [message, setMessage] = useState("");

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        // setMessage('');

        // // Validation
        // const { name, contact, email, vertical, investmentCapacity, state, city, message } = formData;

        // if (!name || !contact || !email || !vertical || !investmentCapacity || !state || !city || !message) {
        //     setMessage('Please fill in all the fields.');
        //     return;
        // }

        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!emailRegex.test(email)) {
        //     setMessage('Please enter a valid email.');
        //     return;
        // }

        // const phoneRegex = /^[0-9]{10}$/;
        // if (!phoneRegex.test(contact)) {
        //     setMessage('Please enter a valid 10-digit number.');
        //     return;
        // }

        // try {
        //     const res = await fetch('/api/contact', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });

        //     const data = await res.json();

        //     if (res.ok) {
        //         setMessage('Contact submitted successfully!');
        //         setFormData({
        //             name: '',
        //             contact: '',
        //             email: '',
        //             vertical: '',
        //             investmentCapacity: '',
        //             state: '',
        //             city: '',
        //             message: ''
        //         });
        //     } else {
        //         setMessage(data.error || 'Something went wrong');
        //     }
        // } catch (err) {
        //     console.error(err);
        //     setMessage('Server error');
        // }
    };

    return (
        <div className="bg-[#111111] md:w-[680px] md:max-w-[680px] max-w-[420px] lg:p-8 p-5 lg:mt-10 mt-5 mb-6 w-full rounded-sm">
            <h1 style={{ fontFamily: "Helvetica" }} className="text-white lg:text-xl text-sm uppercase font-light pb-2 max-w-full">
                Start your brand licensing <br /> journey here
            </h1>

            <form className="text-white text-xs w-full flex flex-col mt-2">
                {step === 1 && (
                    <div className="w-full md:h-[50px] h-full flex md:flex-row flex-col items-end">
                        <div className="w-full h-full flex md:flex-row flex-col gap-4 px-2  md:px-0">
                            <input
                                value={formData.name}
                                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                                name="name"
                                className="w-full outline-none bg-transparent border-b border-[#787878] py-3 px-2 placeholder-[#787878] h-10"
                                type="text"
                                placeholder="NAME"
                            />
                            <input
                                value={formData.contact}
                                onChange={(e) => setFormData((prev) => ({ ...prev, contact: e.target.value }))}
                                name="phone"
                                className="w-full outline-none bg-transparent border-b border-[#787878] py-3 px-2 placeholder-[#787878] h-10"
                                type="tel"
                                placeholder="PHONE"
                            />
                            <input
                                value={formData.email}
                                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                                name="email"
                                className="w-full md:max-w-[130px] outline-none bg-transparent border-b border-[#787878] py-3 px-2 placeholder-[#787878] h-10"
                                type="email"
                                placeholder="EMAIL"
                            />
                        </div>
                        <div className="md:w-fit w-full">
                            <button type="button" onClick={handleNext} className="text-white flex justify-center items-center uppercase md:mt-4 mt-6 text-xs p-2 border-[1px] hover:bg-white hover:text-[#111111] border-[#cacaca] md:rounded-full md:h-18 h-10 md:w-18 w-full md:ml-2"><BsArrowUpRight className="text-2xl"/></button>
                        </div>

                    </div>
                )}

                {step === 2 && (
                    <div className="w-full md:h-[50px] h-full flex md:flex-row flex-col items-end">
                        <div className="w-full h-full flex md:flex-row flex-col gap-4 px-2 md:px-0">
                            <select
                                value={formData.vertical}
                                onChange={(e) => setFormData((prev) => ({ ...prev, vertical: e.target.value }))}
                                className="w-full  bg-transparent border-b border-[#787878] px-2 text-[#787878] outline-none py-2 text-[10px] uppercase"
                                name="vertical"
                            >
                                <option value="">Choose vertical</option>
                                <option value="Residential">Residential</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Hospitality">Hospitality</option>
                            </select>

                            <select
                                value={formData.investmentCapacity}
                                onChange={(e) => setFormData((prev) => ({ ...prev, investmentCapacity: e.target.value }))}
                                className="w-full  bg-transparent border-b border-[#787878] px-2 text-[#787878] outline-none py-2 text-[10px] uppercase"
                                name="investmentCapacity"
                            >
                                <option value="">Investment capacity</option>
                                <option value="Below 50K USD">Below 50K USD</option>
                                <option value="50K - 100K USD">50K - 100K USD</option>
                                <option value="Above 100K USD">Above 100K USD</option>
                            </select>
                        </div>


                        <div className="md:w-fit w-full">
                            <button type="button" onClick={handleNext} className="text-white flex justify-center items-center uppercase md:mt-4 mt-6 text-xs p-2 border-[1px] hover:bg-white hover:text-[#111111] border-[#cacaca] md:rounded-full md:h-18 h-10 md:w-18 w-full md:ml-2"><BsArrowUpRight className="text-2xl"/></button>
                        </div>
                    </div>
                )}

                {/* {step === 3 && (
                    <div className="w-full h-full flex flex-col gap-4">
                        <div className="w-full h-full flex flex-row gap-4">
                            <input
                                value={formData.state}
                                onChange={(e) => setFormData((prev) => ({ ...prev, state: e.target.value }))}
                                name="state"
                                className="w-full outline-none bg-transparent border-b border-[#787878] py-3 px-2 placeholder-[#787878] h-10"
                                type="text"
                                placeholder="STATE" />
                            <input
                                value={formData.city}
                                onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                                name="city"
                                className="w-full outline-none bg-transparent border-b border-[#787878] py-3 px-2 placeholder-[#787878] h-10"
                                type="text"
                                placeholder="CITY"
                            />
                            <textarea id="messageTextarea"
                                value={formData.message}
                                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                                name="message"
                                className="w-full outline-none bg-transparent resize-none overflow-scroll border-b border-[#787878] py-3 px-2 placeholder-[#787878] h-10"
                                placeholder="MESSAGE"
                            ></textarea>
                        </div>

                        <button
                            onClick={handleSubmit}
                            style={{ fontFamily: "Helvetica" }}
                            className="uppercase font-normal lg:mt-5 mt-4 lg:p-4 p-2 tracking-wider lg:text-sm text-xs bg-[linear-gradient(90deg,_#84613B_-10.87%,_#AA8B55_5.15%,_#A48454_13.62%,_#C7B07C_31.26%,_#BFA573_46.14%,_#C5AD78_55.71%,_#C1A670_83.29%,_#EAD9A1_99.8%)] cursor-pointer mb-1"
                        >
                            <p className="gradient-text-btn">Connect now</p>
                        </button>
                        {message && <p className="text-green-500 mt-2">{message}</p>}
                    </div>
                )} */}

                {step === 3 && (
                    <div className="w-full md:h-[50px] flex md:flex-row flex-col items-end">
                        <div className="w-full h-full flex md:flex-row flex-col items-end">
                            <div className="w-full h-full flex md:flex-row flex-col gap-4">
                                <input
                                    value={formData.state}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, state: e.target.value }))}
                                    name="state"
                                    className="w-full outline-none bg-transparent border-b border-[#787878] py-3 px-2 placeholder-[#787878] h-10"
                                    type="text"
                                    placeholder="STATE" />
                                <input
                                    value={formData.city}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                                    name="city"
                                    className="w-full outline-none bg-transparent border-b border-[#787878] py-3 px-2 placeholder-[#787878] h-10"
                                    type="text"
                                    placeholder="CITY"
                                />
                                <textarea id="messageTextarea"
                                    value={formData.message}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                                    name="message"
                                    className="w-full outline-none bg-transparent border-b border-[#787878] py-3 px-2 placeholder-[#787878] h-10"
                                    placeholder="MESSAGE"
                                ></textarea>
                            </div>

                        <div className="md:w-fit w-full z-10">
                            <button onClick={() => handleSubmit()} className="text-black bg-white flex justify-center items-center uppercase md:mt-4 mt-6 text-xs p-2 border-[1px] hover:bg-[#111111] hover:text-[#fff] border-[#cacaca] md:rounded-full md:h-18 h-10 md:w-18 w-full md:ml-2 font-medium">Send</button>
                        </div>
                        </div>


                        {message && <p className="mt-2">{message}</p>}
                    </div>
                )}
            </form>

            <p className="text-[#d4d4d4] text-xs font-light text-justify mt-6">
                Note: By submitting this form, you agree to authorize fashiontv and affiliated partners, including our authorized third parties, to contact you and/or send relevant information via Email, SMS, and WhatsApp. This authorization will override any registration with the DNC/NDNC.
            </p>
        </div>
    );
}
