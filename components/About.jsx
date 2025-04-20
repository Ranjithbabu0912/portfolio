import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-5 scroll-mt-16'>
            <h4 className='text-center text-lg font-Ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-Ovo'>About Me</h2>


            <div className='flex w-full flex-col lg:flex-row  items-center gap-10 my-5'>
                <div className='w-44 md:w-72 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='profile' className='w-full rounded-3xl'/>
                </div>
                <div className='flex-1 '>
                    <p className='mb-5 text-sm max-w-2xl font-Ovo'>I'm a freelance frontend developer based in Tamil Nadu, India. I specialize in building responsive, high-performance web apps. My core stack includes React, JavaScript, and Tailwind CSS. I focus on clean code, smooth UI/UX, and fast load times. Always learning, always shipping sleek user experiences.</p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {
                            infoList.map(({icon, iconDark, title, description}, index) => (
                                <li
                                    key={index}
                                    className='border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'
                                >
                                    <Image src={icon} alt={title} className='w-5 mt-2' />
                                    <h3 className='my-3 font-semibold text-gray-700'>{title}</h3>
                                    <p className='text-gray-600 text-sm'>{description}</p>
                                </li>
                            ))
                        }
                    </ul>


                    <h4 className='my-3 text-gray-700 font-Ovo'>Tools I use</h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {
                            toolsData.map((tool,index) => (
                                <li
                                    key={index}
                                    className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                                >
                                    <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About