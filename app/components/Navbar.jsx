import Image from "next/image"

export const Navbar = () => {
    return (
        <nav className="max-w-[1400px] mx-auto lg:py-[20px] md:py-2 px-6 h-[90px] w-full z-[3]">
            <Image src="./logoWhite.svg" alt="logo" height={50} width={200} className="lg:w-fit lg:h-fit w-[160px] h-[100px]" />
        </nav>
    )
}