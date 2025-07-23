import Image from "next/image"

export const Navbar = () => {
    return (
        <nav className="max-w-[1400px] mx-auto py-[60px] px-6">
            <Image src="./logoWhite.svg" alt="logo" height={50} width={200} className="w-fit h-fit" />
        </nav>
    )
}