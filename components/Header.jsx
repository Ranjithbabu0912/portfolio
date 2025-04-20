import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-4xl text-center mx-auto pt-10 h-screen flex flex-col items-center justify-center gap-2'>
            <div>
                <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
            </div>
            <h3 className='flex items-center gap-2 text-xl md:text-2xl font-Ovo'>
                Hi! I'm Ranjith Babu <Image src={assets.hand_icon} alt='' className='w-6' />
            </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
                Frontend web developer based in Tamil Nadu.
            </h1>
            <p className='max-w-2xl mx-auto text-sm font-Ovo'>
            I'm a passionate freelance frontend developer based in Tamil Nadu, India, specializing in building responsive and user-friendly web applications.
            </p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'>Contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>
                <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
            </div>
        </div>
    )
}

export default Header