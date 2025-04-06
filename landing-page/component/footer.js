import Image from 'next/image'
import React from 'react'
import facebook from '@/public/facebook.svg'
import youtube from '@/public/youtube.svg'
import instagram from '@/public/instagram.svg'
import linkedin from '@/public/linkedin.svg'
import mapMarker from '@/public/map-marker.svg'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='flex bg-[#d3e4df] p-5 gap-x-20'>
        {/* Company */}
        <div className='p-4'>
            <div className='text-3xl text- pb-5 font-bold'>Company</div>
            <ul>
                <li>Careers</li>
                <li>Design Careers</li>
                <li>Reviews</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
        </div>

        {/* Resources */}
        <div className='p-4'>
        <div className='text-3xl pb-5 pr-5 font-bold'>Resources</div>
            <ul>
                <li>Home Design Ideas</li>
                <li>Tutorial</li>
                <li>Help Center</li>
                <li>Article</li>
                <li>Arochi App</li>
            </ul>
        </div>

        {/* Contact */}
        <div className='p-4'>
            <div className='text-3xl pb-5 font-bold'>
                Contact Us
            </div>
            <div className='flex'>
                <Image 
                    src={mapMarker}
                    alt='Company Location'
                    width={14}
                />
                <div className='px-2'>Address:</div>
            </div>
            <div>Level-06, Shop-32, Badhundhara Shopping 
                Complex, Dhaka-1215, Bangladesh
            </div>
            <div className='py-5'>
                <div className=''>
                    <Link href={"tel:+8801516-532740"}>
                        Phone: +8801516-532740
                    </Link>
                </div>
                <div className=''>
                    <Link href={"mailto:info@arochiinteriors.com"}>
                        Email: info@arochiinteriors.com
                    </Link>
                </div>
            </div>

            <div className='flex gap-x-5 pt-2'>
                <div className=''>
                    <Link href={"https://www.facebook.com/arochiinteriors/"}>
                        <Image 
                            src={facebook}
                            alt='Company Facebook Page'
                            width={40}
                        />
                    </Link>
                </div>
                
                <div>
                    <Link href={"https://www.youtube.com/@arochiinteriors/"}>
                        <Image 
                            src={youtube}
                            alt='Company YouTube Channel'
                            width={40}
                        />
                    </Link>
                </div>
                
                <div>
                    <Link href={"https://www.instagram.com/arochiinteriors/"}>
                        <Image 
                            src={instagram}
                            alt='Company Instagram Page'
                            width={40}
                        />
                    </Link>
                </div>
                
                <div>
                    <Link href={"https://www.linkedin.com/arochiinteriors/"}>
                        <Image 
                            src={linkedin}
                            alt='Company LinkedIn Page'
                            width={40}
                        />
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}
