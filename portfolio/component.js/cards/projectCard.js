import Image from "next/image";

export default function ProjectCard({projectList}) {
  return (
    
        <div className="flex flex-col justify-around shadow-2xl rounded-2xl min-h-max">

            <div className="flex justify-around">
                <Image 
                    className=""
                    key={projectList.title}
                    src={projectList.image}
                    alt={projectList.title}
                    height={50}
                />
            </div>
            <div className="p-8 flex flex-col py-4 gap-y-2 min-h-52">
                <p className="text-center text-3xl font-bold font-[pT_Serif_Caption]">{projectList.title}</p>
                <p className="font-medium text-justify font-[poppins]">{projectList.description}</p>
            </div>
            
            <div className="flex justify-start pb-6 pl-6 gap-x-4"> 
                {projectList.technologies.map(element => (
                        <div key={element} className="shadow-2xl shadow-[#210F37] px-4 py-2 rounded-4xl">
                            <p className="font-[poppins] font-medium">{element}</p>
                        </div>
                ))}

            </div>
            
        </div>
        
  )
}
