export default function Activities() {
    return (
      <div id="activities" className="container mx-auto px-15 py-20">
          <div className="flex justify-center mt-[3px] hover:scale-115 duration-300 pb-15">
              <p className="text-5xl text-center font-bold font-[pT_Serif_Caption]">Activities</p>
          </div>
  
            <div className="flex flex-col gap-y-10">
                <div className="flex shadow-2xl rounded-2xl py-10 px-10">
                    <div className="w-7/10 pr-2">
                        <div className="flex flex-col gap-y-1">
                            <a target="_blank" href="https://www.facebook.com/CLUSTER.KU">
                                <p className="text-justify font-[pT_Serif_Caption text-3xl font-bold ">CLUSTER, Khulna University</p>
                                <p className="text-justify font-[pT_Serif_Caption] font-medium text-2xl">President</p>
                            </a>
                        </div>
                        <div className="flex flex-col pl-2">
                            <p className="text-left font-[poppins] text-xl"></p>
                        </div>
                        {/* <div className="flex justify-start pt-2 gap-x-4">
                            <div className="shadow-2xl shadow-[#210F37] px-4 py-2 rounded-4xl">
                                <p className="font-[poppins] font-medium">Next.js</p>
                            </div>
                            <div className="shadow-2xl shadow-[#210F37] px-4 py-2 rounded-4xl">
                                <p className="font-[poppins] font-medium">Tailwind CSS</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="flex flex-col mx-auto w-auto">
                        <p className="text-justify font-[pT_Serif_Caption] text-lg">Khulna-9208, Khulna</p>
                        <p className="text-justify font-[pT_Serif_Caption] text-lg">March 2024 – February 2025</p>
                    </div>
                </div>
                
                <div className="flex shadow-2xl rounded-2xl py-10 px-10">
                    <div className="w-7/10 pr-2">
                        <div className="flex flex-col gap-y-1">
                            <a target="_blank" href="https://www.facebook.com/groups/90982940236">
                            <p className="text-justify font-[pT_Serif_Caption] text-3xl font-bold ">Badhan, Khulna University</p>
                            <p className="text-justify font-[pT_Serif_Caption] font-medium text-2xl">Vice President</p>
                            </a>
                        </div>
                        <div className="flex flex-col pl-2">
                            <p className="text-left font-[poppins] text-xl"></p>
                        </div>
                        {/* <div className="flex justify-start pt-2 gap-x-4">
                            <div className="shadow-2xl shadow-[#210F37] px-4 py-2 rounded-4xl">
                                <p className="font-[poppins] font-medium">Next.js</p>
                            </div>
                            <div className="shadow-2xl shadow-[#210F37] px-4 py-2 rounded-4xl">
                                <p className="font-[poppins] font-medium">Tailwind CSS</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="flex flex-col mx-auto w-auto">
                        <p className="text-justify font-[pT_Serif_Caption] text-lg">Khulna-9208, Khulna</p>
                        <p className="text-justify font-[pT_Serif_Caption] text-lg">February 2024 – February 2025</p>
                    </div>
                </div>
            </div>
          
      </div>
    )
  }
  