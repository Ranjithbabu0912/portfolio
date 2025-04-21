import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = ({ isDarkMode }) => {
    return (
        <motion.div
            id='services' className='w-full px-[12%] py-5 scroll-mt-16'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4
                className='text-center text-lg font-Ovo'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >What I offer</motion.h4>
            <motion.h2
                className='text-center text-5xl font-Ovo'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >My Services</motion.h2>

            <motion.p
                className='text-center max-w-2xl mx-auto mt-5 mb-5 font-Ovo'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >I'm a passionate freelance frontend developer based in Tamil Nadu, India, specializing in building responsive and user-friendly web applications.</motion.p>

            <motion.div
                className='grid grid-cols-auto gap-6 my-5 mx-auto'
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
            >
                {
                    serviceData.map(({ icon, title, description, link }, index) => (
                        <motion.div
                            key={index}
                            className='w-full border border-gray-400 rounded-lg px-5 py-6 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image src={icon} alt={title} className='w-10' />
                            <h3 className='text-lg my-4 text-gray-700 dark:text-white' >{title}</h3>
                            <p className='text-sm text-gray-600 leading-5 dark:text-white/70'>{description}</p>
                            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                                Read more <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} alt='' className='w-4' />
                            </a>
                        </motion.div>
                    ))
                }
            </motion.div>

        </motion.div>
    )
}

export default Services