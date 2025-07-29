import Link from "next/link"

export const Thankyou = () => {
    return(
         <div className="w-screen h-screen flex justify-center items-center bg-[#998263]">
            <div className="md:w-[600px] w-full h-fit flex flex-col justify-center items-center gap-3 p-5">
                <h1 className="font-serif text-[70px] font-medium text-white">Thankyou</h1>
                <p className="text-lg font-normal text-center text-gray-100">Thankyou for contacting us, our business executives will be in touch with you soon!</p>
                <Link href="/" className="text-lg underline text-gray-200">Go back to Homepage</Link>
            </div>
        </div>
    )
}