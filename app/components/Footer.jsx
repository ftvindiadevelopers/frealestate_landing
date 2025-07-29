import Image from "next/image"

const Footer = () => {
    return(
        <div className="bg-[#0A0602] lg:px-10 px-10 py-12 relative w-full h-full">
            <Image alt="goldenFLogo" src="./dualDiamond.svg" width={335} height={640} className="absolute w-fit h-fit xl:top-10 xl:left-10 md:top-5 md:left-5 top-4 right-[-5px] z-[1]" />
            <div className="max-w-[1400px] flex md:flex-row flex-col lg:gap-0 gap-10 justify-between mx-auto items-start ">
                <div className="flex flex-col gap-7" >
                    <img className="w-[180px] h-full " src="./footer_logo.svg" alt="" />
                    <div className="text-[#FFFFFF] flex flex-row text-sm flex-wrap lg:gap-20 gap-10">
                        <div className="flex items-center gap-2">
                            <img className="w-5 items-center" src="./phone.svg" alt="" />
                            <a href="tel:+91%207873566666">+91 7873566666</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="w-5 items-center" src="./mail.svg" alt="" />
                            <a href="mailto:business@ftv.ind.in" >business@ftv.ind.in</a>
                        </div>
                    </div>
                </div>


                <div className=" flex flex-col gap-10 justify-between" >
                    <div className="flex gap-8 ">
                        <a href="https://www.facebook.com/frealestatebyftv"><img className="w-10 h-10" src="./facebook.svg" alt="" /></a>
                        <a href="https://www.instagram.com/frealestatebyftv.in/"><img className="w-10 h-10" src="./instagram.svg" alt="" /></a>
                        <a href="https://x.com/FtvRealestate"><img className="w-10 h-10" src="./twitter.svg" alt="" /></a>
                        <a href="https://www.linkedin.com/company/ftv-real-estate/"><img className="w-10 h-10" src="./linkedin.svg" alt="" /></a>
                        <a href="https://www.youtube.com/@ftv"> <img className="w-10 h-10" src="./youtube.svg" alt="" /></a>
                       
                    </div>
                    <p className="text-[#414141] text-xs text-right">Copyrights © 2025 FTV LICENSE all right Reserved</p>
                </div>
            </div>

        </div>
    )
}
export default Footer 