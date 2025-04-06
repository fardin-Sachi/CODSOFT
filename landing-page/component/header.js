import Image from "next/image"
import logo from "@/public/logo-square.png" //Logo's Hex Val: #e4e3d3
import Link from "next/link"

const navItems = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 2,
        title: "Service",
        path: "/service",
    },
    {
        id: 3,
        title: "Video Gallery",
        path: "/videogallery",
    },
    {
        id: 4,
        title: "Blog",
        path: "/blog",
    },
    {
        id: 5,
        title: "Shop",
        path: "/shop",
    },
    {
        id: 6,
        title: "About Us",
        path: "/about",
    },
    {
        id: 7,
        title: "Contact",
        path: "/contact",
    }
]
export default function Header() {
  return (
    <div className="header">
        {/* <div className="py-2"></div> */}
        <nav className="flex justify-center items-center gap-x-15 bg-[#e4e3d3] py-5">
            <div className="rounded-lg">
                <Image
                    src={logo}
                    alt="Arochi Interiors Logo"
                    width={120}
                    quality={100}
                    placeholder="blur"
                    priority
                />
            </div>
            <div>
                <ul className="flex gap-x-15">
                    {navItems.map(item => 
                    <li key={item.id} className="font-semibold text-lg text-center">
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
