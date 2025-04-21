import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-44 mx-auto mb-5' />

                <a href="mailto:ranjithbabu.dev@gmail.com" className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                    ranjithbabu.dev@gmail.com
                </a>
            </div>

            <div className='text-center sm:flex items-center justify-between mx-[10%] border-t border-gray-400 mt-6 py-6'>
                <p>© 2025 Ranjithbabu. All rights reserved.</p>
                <ul className='flex items-center justify-center mt-5 gap-5'>
                    <li><a target='_blank' href="https://github.com/Ranjithbabu0912">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/ranjithbabu0912/">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer