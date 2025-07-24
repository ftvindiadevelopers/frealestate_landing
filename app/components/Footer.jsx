const Footer = () => {
    return <>
        <div className="bg-[#0A0602] px-5 py-12">
            <div className="max-w-[1400px] flex flex-row justify-between mx-auto items-center ">
                <div className="flex flex-col gap-7" >
                    <img className="w-[180px] h-full " src="./footer_logo.svg" alt="" />
                    <div className="text-[#FFFFFF] flex flex-row text-sm gap-20">
                        <div className="flex items-center gap-2">
                            <img className="w-5 items-center" src="./phone.svg" alt="" />
                            <a href="">7873566666</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <img className="w-5 items-center" src="./mail.svg" alt="" />
                            <a href="" >enquiry@ftv.ind.in</a>
                        </div>
                    </div>
                </div>


                <div className=" flex flex-col gap-8 justify-between" >
                    <div className="flex gap-8 ">
                        <img className="w-10 h-10" src="./facebook.svg" alt="" />
                        <img className="w-10 h-10" src="./instagram.svg" alt="" />
                        <img className="w-10 h-10" src="./twitter.svg" alt="" />
                        <img className="w-10 h-10" src="./linkedin.svg" alt="" />
                        <img className="w-10 h-10" src="./youtube.svg" alt="" />
                    </div>
                    <p className="text-[#414141] text-xs text-right">Copyrights © 2025 FTV LICENSE all right Reserved</p>
                </div>
            </div>

        </div>
    </>
}
export default Footer 