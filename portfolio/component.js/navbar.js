import Image from "next/image"
import Link from "next/link"

const navItems = [
    // {
    //     title: "Home",
    //     path: "/",
    // },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Experience",
        path: "/experience",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Education",
        path: "/education",
    },
    {
        title: "Skills",
        path: "/skills",
    },
    {
        title: "Activities",
        path: "/activities",
    },
    {
        title: "Contact Me",
        path: "/contact",
    },
    {
        title: "My Resume",
        path: "/resume",
    },

]
export default function Navbar() {
  return (
    <div className="flex justify-center">
        <nav className="fixed top-0.5 z-50 w-auto flex justify-center items-center gap-x-15 backdrop-blur-3xl py-4 px-10 mask-b-from-90% mask-l-from-97% mask-r-from-97% rounded-t-sm">
            <div>
                <ul className="flex gap-x-15">
                    {navItems.map(item => 
                    <li key={item.title} className="font-[poppins] font-semibold text-lg text-center hover:scale-120 duration-300">
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
