export default function Certifications() {
    return (
      <div className="container mx-auto py-10 px-15">
          <div className="flex justify-center mt-[3px] hover:scale-115 duration-300 pb-15">
              <p className="text-5xl text-center font-bold font-[poppins]">Certification</p>
          </div>
  
          <div>
              <div className="flex shadow-2xl rounded-2xl py-10 px-10">
                  <div className="w-3/4 pr-2">
                    <a target="_blank" href={"https://coursera.org/share/bb2b07f687e40f843609ff78b2b48bf8"}>
                      <div className="flex flex-col pb-3 gap-y-1">
                          <p className="text-justify font-[poppins] text-3xl font-bold ">Coursera</p>
                          <p className="text-justify font-[poppins] font-medium text-2xl"> Introduction to Git and GitHub - Google</p>
                      </div>
                    </a>
                    <div className="flex flex-col pl-2">
                    <p className="text-left font-[poppins] text-xl">
                        I acquired essential skills for version control and open-source collaboration and successfully completing Google&apos;s <q>Introduction to Git and GitHub</q> course.
                    </p>
                    </div>
                    <div className="flex justify-start pt-2 gap-x-4">
                        <div className="shadow-2xl shadow-[#210F37] px-4 py-2 rounded-4xl">
                            <p className="font-[poppins] font-medium">Git</p>
                        </div>
                        <div className="shadow-2xl shadow-[#210F37] px-4 py-2 rounded-4xl">
                            <p className="font-[poppins] font-medium">GitHub</p>
                        </div>
                    </div>
                  </div>
                  {/* <div className="flex flex-col mx-auto w-auto">
                      <p className="text-justify font-[pT_Serif_Caption] text-lg">Khulna-9100, Khulna</p>
                      <p className="text-justify font-[pT_Serif_Caption] text-lg">Dec 2023 – Feb 2024</p>
                  </div> */}
              </div>
          </div>
          
      </div>
    )
  }
  