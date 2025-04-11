import Card from './cards/card'
import bedroom from "@/public/portfolio/bedroom.png"
import bathroom from "@/public/portfolio/bathroom.png"
import kitchen from "@/public/portfolio/Kitchen.png"
import balcony from "@/public/portfolio/balcony.png"
import livingRoom from "@/public/portfolio/livingRoom.png"
import office from "@/public/portfolio/office.png"
import restaurant from "@/public/portfolio/restaurant.png"
import library from "@/public/portfolio/library.png"



export default function Portfolio() {
  return (
    <div className='w-full container py-10'>
      <div className='hover:scale-115 duration-300'>
        <div className='flex justify-center mt-[3px] mb-2'> 
            <p className="text-5xl text-center font-bold font-[poppins]">Portfolio</p>
        </div>
        <hr className='w-52 h-1 mx-auto bg-gray-400 border-0 rounded-sm' />
      </div>
        <div className='pt-10 grid grid-cols-4 gap-10 px-20'>
            <Card imgsrc={bedroom} altText={"Bedroom"}/>
            <Card imgsrc={bathroom} altText={"Bathroom"}/>
            <Card imgsrc={kitchen} altText={"Kitchen"}/>
            <Card imgsrc={balcony} altText={"Balcony"}/>
            <Card imgsrc={livingRoom} altText={"Living Room"}/>
            <Card imgsrc={office} altText={"Office"}/>
            <Card imgsrc={restaurant} altText={"Restaurant"}/>
            <Card imgsrc={library} altText={"Library"}/>
        </div>
    </div>
  )
}
