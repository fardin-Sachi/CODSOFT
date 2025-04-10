import ProjectCard from "./cards/projectCard"
import dummyImage from "@/public/me.png"

const projectLists = [
    {
        title: "Orbit",
        image: dummyImage,
        description: "An e-commerce website dedicated to books, providing a platform for users to browse and purchase various books.",
        technologies: [ 
            "React", "Node.js", "Express.js", "MongoDB Atlas"
        ]
    },
    {
        title: "Apartment Rent",
        image: dummyImage,
        description: "Engineered a web-based rental platform with Next.js, incorporating advanced search filters and interactive maps, facilitating a faster property discovery process for prospective tenants.",
        technologies: [
            "Next.js", "Tailwind CSS"
        ]
    },
    {
        title: "Task Manager",
        image: dummyImage,
        description: "A task management application featuring a frontend developed with Angular and a backend powered by Spring Boot. It aims to provide users with an efficient platform to organize and track their tasks effectively.",
        technologies: [
            "AngularJS", "Spring Boot"
        ]
    },
    {
        title: "Arochi Interiors",
        image: dummyImage,
        description: "Designed a modern and user-friendly landing page with optimized design, focusing on performance and accessibility.",
        technologies: [
            "Next.js", "Tailwind CSS"
        ]
    },
    {
        title: "Video Trimmer",
        image: dummyImage,
        description: "A video editing tool designed to trim videos efficiently, developed as part of an academic project. It provides users with an intuitive interface to select and cut video segments, ensuring a user-friendly experience.",
        technologies: [
            "Java", "JavaFX"
        ]
    },
]

export default function Projects() {
  return (
    <div id="projects" className='container mx-auto px-15 py-20'>
        <div className="hover:scale-115 duration-300 pb-15">
            <div className='flex justify-center'> 
                <p className="text-5xl text-center font-bold font-[pT_Serif_Caption]">Projects</p>
            </div>
            {/* <hr className='w-60 h-1 mx-auto bg-gray-400 border-0 rounded-sm ' /> */}
        </div>
        <div className="grid grid-cols-2 gap-10">
            {projectLists.map(project => 
                <div key={project.title}>
                    <ProjectCard projectList={project}/>
                </div>
            )}
        </div>
    </div>
  )
}
