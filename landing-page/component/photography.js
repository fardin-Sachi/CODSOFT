import Card from "./cards/card"
import livingRoom2 from "@/public/portfolio/livingRoom2.png"
import livingRoom3 from "@/public/portfolio/livingRoom3.png"
import livingRoom4 from "@/public/portfolio/livingRoom4.png"
import livingRoom5 from "@/public/portfolio/livingRoom5.png"
import livingRoom6 from "@/public/portfolio/livingRoom6.png"
import library3 from "@/public/portfolio/library3.png"
import office2 from "@/public/portfolio/office2.png"
import library2 from "@/public/portfolio/library2.png"


export default function Photography() {
  return (
    <div className='w-full container py-10'>
      <div className="hover:scale-115 duration-300">
        <div className='flex justify-center mt-[3px] mb-2'> 
            <p className="text-5xl text-center font-bold font-[poppins]">Photography</p>
        </div>
        <hr className='w-80 h-1 mx-auto bg-gray-400 border-0 rounded-sm' />
      </div>
        <div className='pt-10 grid grid-cols-4 gap-10 px-20'>
                    <Card imgsrc={livingRoom2} altText={"20/4 Tootpara, Khulna"}/>
                    <Card imgsrc={livingRoom3} altText={"11/1 Sugondga Residential Area, Chittagong"}/>
                    <Card imgsrc={livingRoom4} altText={"Meghna/D-1, BDP, Joydebpur, Gazipur"}/>
                    <Card imgsrc={livingRoom5} altText={"12/Niketon, Gulshan, Dhaka"}/>
                    <Card imgsrc={livingRoom6} altText={"336/G Bashundhara Residential Area, Dhaka"}/>
                    <Card imgsrc={library3} altText={"67/B Bashundhara Residential Area, Dhaka"}/>
                    <Card imgsrc={office2} altText={"50, KDA Outer Bypass Rd, Khulna"}/>
                    <Card imgsrc={library2} altText={"7, KDA Avenue, Munna Tower, Khulna"}/>
        </div>
    </div>
  )
}
