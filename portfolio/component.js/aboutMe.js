import Link from 'next/link'

export default function AboutMe() {
  return (
    <div id='about' className='container mx-auto px-15 py-20'>
      <div className="hover:scale-115 duration-300 pb-15">
        <div className='flex justify-center'> 
              <p className="text-5xl text-center font-bold font-[pT_Serif_Caption]">About Me</p>
        </div>
      </div>
      
      <div className='shadow-2xl rounded-2xl pb-8'>
        <p className='text-justify font-[poppins] px-20 text-xl py-10'>
          I am a Computer Science and Engineering graduate from Khulna University, specializing in modern web development technologies, including <b>React</b>, <b>Next.js</b>, <b>Express.js</b>, <b>Node.js</b>, <b>AngularJS</b>, and <b>Spring Boot</b>. My expertise lies in designing and implementing efficient, user-centric applications, underpinned by a strong foundation in academic research, particularly in blockchain technology.
          <br></br>
          Beyond technical skills, I have demonstrated exceptional leadership abilities through active roles in student organizations, where I honed my skills in collaboration, problem-solving, and project management. With a passion for continuous learning, I strive to stay updated with evolving technologies and apply my knowledge to make a meaningful impact in the tech industry.
        </p>
        <div className="flex justify-center">
            <div className="shadow-2xl shadow-[#210F37] px-4 py-2 rounded-4xl">
                <a target='_blank' href={"https://drive.google.com/file/d/1xuE2z4uBoFkh6ayIMs9KpXpu0IkGX7cl/view?usp=sharing"}>
                  <p className="text-2xl font-[pT_Serif_Caption] font-medium"> Here&apos;s My Resume</p>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}
