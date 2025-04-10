import Image from "next/image"
import Link from "next/link"

const navItems = [
    // {
    //     title: "Home",
    //     path: "/",
    // },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Experience",
        path: "#experience",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Education",
        path: "#education",
    },
    {
        title: "Skills",
        path: "#skills",
    },
    {
        title: "Activities",
        path: "#activities",
    },
    {
        title: "Certification",
        path: "#certification",
    },
    {
        title: "Contact Me",
        path: "#contact",
    },
    {
        title: "My Resume",
        path: "https://drive.google.com/file/d/1xuE2z4uBoFkh6ayIMs9KpXpu0IkGX7cl/view?usp=sharing",
    },

]
export default function Navbar() {
  return (
    <div className="flex justify-around">
        <nav className="fixed top-0.5 z-50 w-auto backdrop-blur-3xl py-4 px-10 rounded-t-sm mask-b-from-90% mask-l-from-97% mask-r-from-97%">
            <div>
                <ul className="flex gap-x-15">
                    {navItems.map(item => 
                    <li key={item.title} className="font-[pT_Serif_Caption] font-semibold text-md text-center hover:scale-120 duration-300">
                        <Link href={item.path}>
                            {item.title}
                        </Link>
                    </li>
                    )}
                </ul>
            </div>
        </nav>
    </div>
  )
}
