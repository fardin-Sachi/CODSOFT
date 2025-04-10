import c from "@/public/logos/c.svg"
import cPlusPlusLang from "@/public/logos/cPlusPlusLang.svg"
import java from "@/public/logos/java.svg"
import javascript from "@/public/logos/javascript.svg"
import dart from "@/public/logos/dart.svg"
import react from "@/public/logos/react.svg"
import angularJs from "@/public/logos/angularjs.svg"
import nodeJs from "@/public/logos/nodejs.svg"
import nextJs from "@/public/logos/nextjs.svg"
import springBoot from "@/public/logos/springBoot.svg"
import mongodb from "@/public/logos/mongodb.svg"
import html from "@/public/logos/html.svg"
import tailwind from "@/public/logos/tailwind.svg"
import git from "@/public/logos/git.svg"
import vscode from "@/public/logos/vscode.svg"
import postman from "@/public/logos/postman.svg"
import windows from "@/public/logos/windows.svg"
import linux from "@/public/logos/linux.svg"
import ubuntu from "@/public/logos/ubuntu.svg"
import SkillCard from "./cards/skillCard"

const logos = [
    {
        name: c,
        alt: "C",
    },
    {
        name: cPlusPlusLang,
        alt: "C++",
    },
    {
        name: java,
        alt: "Java",
    },
    {
        name: javascript,
        alt: "Javascript",
    },
    {
        name: dart,
        alt: "Dart",
    },
    {
        name: react,
        alt: "React",
    },
    {
        name: angularJs,
        alt: "Angular JS",
    },
    {
        name: nodeJs,
        alt: "Node.js",
    },
    {
        name: nextJs,
        alt: "Next.js",
    },
    {
        name: springBoot,
        alt: "Spring Boot",
    },
    {
        name: mongodb,
        alt: "MongoDB",
    },
    {
        name: html,
        alt: "HTML",
    },
    {
        name: tailwind,
        alt: "Tailwind CSS",
    },
    {
        name: git,
        alt: "Git",
    },
    {
        name: vscode,
        alt: "VS Code",
    },
    {
        name: postman,
        alt: "Postman",
    },
    {
        name: windows,
        alt: "Windows",
    },
    {
        name: linux,
        alt: "Linux",
    },
    {
        name: ubuntu,
        alt: "Ubuntu",
    }
]

export default function Skills() {
    // console.log(logos.find(logo=>logo.name === c))
  return (
    <div id="skills" className='container mx-auto px-15 py-20'>
        <div className="hover:scale-115 duration-300 pb-15">
            <div className='flex justify-center'> 
                <p className="text-5xl text-center font-bold font-[pT_Serif_Caption]">Skills</p>
            </div>
            {/* <hr className='w-60 h-1 mx-auto bg-gray-400 border-0 rounded-sm ' /> */}
        </div>
        <div className='grid grid-cols-3 gap-10'>
            <SkillCard skillType={"Languages"} logos={[logos.find(logo=>logo.name === c), logos.find(logo=>logo.name === cPlusPlusLang), logos.find(logo=>logo.name === java), logos.find(logo=>logo.name === javascript), logos.find(logo=>logo.name === dart)]}/>
                
            <SkillCard skillType={"Libraries & Frameworks"} logos={[logos.find(logo=>logo.name === react), logos.find(logo=>logo.name === angularJs), logos.find(logo=>logo.name === nodeJs), logos.find(logo=>logo.name === nextJs), logos.find(logo=>logo.name === springBoot)]}/>

            <SkillCard skillType={"Technologies and Databases"} logos={[logos.find(logo=>logo.name === html), logos.find(logo=>logo.name === tailwind), logos.find(logo=>logo.name === mongodb)]}/>
                
            <SkillCard skillType={"Development Tools"} logos={[logos.find(logo=>logo.name === vscode), logos.find(logo=>logo.name === postman), logos.find(logo=>logo.name === git)]}/>

            <SkillCard skillType={"Operating Systems"} logos={[logos.find(logo=>logo.name === windows), logos.find(logo=>logo.name === ubuntu), logos.find(logo=>logo.name === linux)]}/>
        </div>
    </div>
  )
}