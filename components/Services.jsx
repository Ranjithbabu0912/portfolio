import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div id='services' className='w-full px-[12%] py-5 scroll-mt-16'>
            <h4 className='text-center text-lg font-Ovo'>What I offer</h4>
            <h2 className='text-center text-5xl font-Ovo'>My Services</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-5 font-Ovo'>I'm a passionate freelance frontend developer based in Tamil Nadu, India, specializing in building responsive and user-friendly web applications.</p>

            <div className='grid grid-cols-auto gap-6 my-5 mx-auto'>
                {
                    serviceData.map(({icon, title, description, link},index) => (
                        <div
                            key={index}
                            className='w-full border border-gray-400 rounded-lg px-5 py-6 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'
                        >
                            <Image src={icon} alt={title} className='w-10'/>
                            <h3 className='text-lg my-4 text-gray-700' >{title}</h3>
                            <p className='text-sm text-gray-600 leading-5'>{description}</p>
                            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                                Read more <Image src={assets.right_arrow} alt='' className='w-4'/>
                            </a>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Services