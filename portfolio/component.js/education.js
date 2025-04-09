const institutions = [
    {
        name: "Khulna University",
        location: "Khulna-9208, Khulna",
        degree: "Bachelor of Science in Computer Science and Engineering",
        resultType: "CGPA",
        result: "3.45/4.00",
        additionalInfo: {
            thesisTitle: "Blockchain-based Official Document Attestation Network"
        }
    },
    {
        name: "Gazipur Ideal College",
        location: "BOF-1703, Gazipur",
        degree: "Higher Secondary Certificate",
        resultType: "GPA",
        result: "4.50/5.00",
    },
    {
        name: "Gazipur Cantonment Board High School",
        location: "",
        degree: "Secondary School Certificate",
        resultType: "GPA",
        result: "4.85/5.00"
    },
]

export default function Education() {
    return (
      <div className="container mx-auto py-10 px-15">
          <div className="flex justify-center mt-[3px] hover:scale-115 duration-300 pb-15">
              <p className="text-5xl text-center font-bold font-[poppins]">Education</p>
          </div>
  
          <div>
              <div className="flex shadow-2xl rounded-2xl py-10 px-10">
                  <div className="w-3/4 pr-2">
                      <div className="flex flex-col pb-3 gap-y-1">
                          <p className="text-justify font-[poppins] text-3xl font-bold ">{institutions[0].name}</p>
                          <p className="text-justify font-[poppins] font-medium text-2xl">{institutions[0].degree}</p>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex">
                          <p className="font-bold font-[poppins]">{institutions[0].resultType}:</p>
                          <p className="font-[poppins]">&nbsp;{institutions[0].result}</p>
                        </div>
                        <div className="flex">
                          <p className="font-bold font-[poppins]">Thesis Title:</p>
                          <p className="font-[poppins]">&nbsp;{institutions[0].additionalInfo.thesisTitle}</p>
                        </div>
                      </div>
                  </div>
                  <div className="flex flex-col mx-auto w-auto">
                      <p className="text-justify font-[pT_Serif_Caption] text-lg">{institutions[0].location}</p>
                      <p className="text-justify font-[pT_Serif_Caption] text-lg">Jan 2020 - Jan 2025</p>
                  </div>
              </div>
          </div>
          
      </div>
    )
  }
  