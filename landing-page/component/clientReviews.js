import Image from "next/image"

const reviews = [
    {
        heading: "Exceptional Transformation!",
        name: "Sheikh Toriqul Islam",
        paragraph: "Arochi Interiors turned our dull office into a vibrant and functional workspace that has greatly boosted team morale and productivity. Their attention to detail, creative ideas, and seamless execution left us thoroughly impressed. From start to finish, the team was professional, communicative, and receptive to our feedback. Highly recommended!"
    },
    {
        heading: "A Dream Come True",
        name: "Wali Uz Zaman",
        paragraph: "The team at Arochi Interiors brought our vision for a cozy, stylish home to life. They perfectly combined elegance and practicality, creating spaces that we absolutely adore. The process was stress-free, and they truly made us feel like partners in the design journey. Thank you, Arochi Interiors!"
    }
]

export default function ClientReviews() {
  return (
    <div className="grid grid-col-3 py-10">
        <div className="hover:scale-115 duration-300">
            {/* Heading */}
            <div className='flex justify-center mt-[3px] mb-2'> 
                <p className="text-5xl text-center font-bold font-[poppins]">Client Reviews</p>
            </div>

            {/* Underline */}
            <hr className='w-90 h-1 mx-auto bg-gray-400 border-0 rounded-sm' />
        </div>

        {/* Cards */}
        <div className='container w-7/10 pt-10 grid grid-cols-2 gap-10 px-20 place-self-center'>
                {reviews.map(item => 
                <div className='flex flex-col p-4 border-[#e4e3d3] rounded-lg items-center bg-[#e4e3d3]/60' key={item.name}>
                    
                    <p className='pt-4 pb-4 text-center text-xl font-[Poppins]'>
                        {item.heading}
                    </p>
                
                {/* Star Ratings */}
                <div class="flex items-center">
                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                </div>

                    <p className='pt-4 pb-1 text-center text-xl font-[Poppins]'>
                        {item.name}
                    </p>
                    <p className='pt-1 text-justify font-[poppins]'>
                        <q>{item.paragraph}</q>
                    </p>
                </div>

                )}
        </div>
    </div>
  )
}
