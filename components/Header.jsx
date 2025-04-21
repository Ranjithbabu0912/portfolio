import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className='w-11/12 max-w-4xl text-center mx-auto pt-10 h-screen flex flex-col items-center justify-center gap-2'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
            </motion.div>
            <motion.h3
                className='flex items-center gap-2 text-xl md:text-2xl font-Ovo'
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                Hi! I'm Ranjith Babu <Image src={assets.hand_icon} alt='' className='w-6' />
            </motion.h3>
            <motion.h1
                className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                Frontend web developer based in Tamil Nadu.
            </motion.h1>
            <motion.p
                className='max-w-2xl mx-auto text-xs font-Ovo'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
            >
                I'm a passionate freelance frontend developer based in Tamil Nadu, India, specializing in building responsive and user-friendly web applications.
            </motion.p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                    href="#contact"
                    className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent'
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >Contact me
                    <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </motion.a>
                <motion.a
                    href="/sample-resume.pdf" download
                    className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black dark:bg-white'
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    My resume <Image src={assets.download_icon} alt='' className='w-4' /></motion.a>
            </div>
        </div>
    )
}

export default Header