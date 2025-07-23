import Image from "next/image"

export const Navbar = () => {
    return (
        <nav className="max-w-[1400px] mx-auto py-[60px] px-6 absolute top-0 left-0 right-0 w-full">
            <Image src="./logoWhite.svg" alt="logo" height={50} width={200} className="w-fit h-fit" />
        </nav>
    )
}