import Image from "next/image";

export default function SkillCard( {skillType, logos} ) {
  return (
    <div className="flex flex-col justify-around shadow-2xl rounded-2xl p-8">
        <p className="text-xl text-center font-semibold font-[pT_Serif_Caption] pb-5">{skillType}</p>
        <div className="flex justify-around">
            {logos.map(logo => 
                <Image 
                    className=""
                    key={logo.alt}
                    src={logo.name}
                    alt={logo.alt}
                    width={48}
                />
            )}
        </div>
    </div>
  )
}
