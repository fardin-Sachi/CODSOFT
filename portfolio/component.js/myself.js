import Image from "next/image";
import happyMe from "@/public/me2.png"
import Link from "next/link";

export default function Myself() {
  return (
    <div className='container flex mx-auto max-h-min pt-15 pr-15 pl-15 align-middle'>
        <div className="mx-auto p-6">
            <p className='font-[poppins] text-3xl font-bold pb-6'>Hi, this is</p>
            <p className='font-[pT_Serif_Caption] text-8xl font-bold pb-10'>Fardin Ahsan</p>
            
            <div className="shadow-2xl rounded-2xl p-8">
              <div className="justify-normal flex border-black p-2">
                {/* Location */}
                <svg className="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <p className="text-xl px-2 font-[pT_Serif_Caption] justify-center">Bangladesh Diesel Plant Officers’ Quarter, BOF-1703, Gazipur</p>
              </div>
              
              <div className="justify-normal flex border-black p-2">
                {/* Mail */}
                <svg className="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <p className="text-xl px-2 font-[pT_Serif_Caption] justify-center"><Link href={"mailto:fardin2002@cseku.ac.bd"}>fardin2002@cseku.ac.bd</Link></p>
              </div>
              
              <div className="flex border-black p-2">
                {/* Phone */}
                <svg className="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <p className="text-xl px-2 font-[pT_Serif_Caption]"><Link href={"tel:+8801516-532740"}>+8801516-532740</Link></p>
              </div>
              
              <div className="flex border-black p-2">
                {/* LinkedIn */}
                <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                <p className="text-xl px-2 font-[pT_Serif_Caption]"><Link href={"https://www.linkedin.com/in/fardinahsan02/"} prefetch={false}>FardinAhsan02</Link></p>
              </div>
              
              <div className="flex border-black p-2">
                {/* GitHub */}
                <svg className="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                <p className="text-xl px-2 font-[pT_Serif_Caption]"><Link href={"https://github.com/fardin-Sachi"} prefetch={false}>Fardin-Sachi</Link></p>
              </div>
            </div>
        </div>

        <div className="flex self-end pb-8">
            <Image 
                src={happyMe}
                alt="Fardin Ahsan"
            />
        </div>
    </div>
  )
}
