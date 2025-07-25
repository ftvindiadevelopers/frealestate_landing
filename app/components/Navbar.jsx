import Image from "next/image"

export const Navbar = () => {
    return (
        <nav className="max-w-[1400px] mx-auto lg:py-[60px] py-4 px-6 absolute top-0 left-0 right-0 w-full z-[3]">
            <Image src="./logoWhite.svg" alt="logo" height={50} width={200} className="lg:w-fit lg:h-fit w-[160px] h-[100px]" />
        </nav>
    )
}