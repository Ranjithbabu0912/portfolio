import { assets, getToolsData, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({ isDarkMode }) => {

    const toolsData = getToolsData(isDarkMode);

    return (
        <motion.div id='about'
            className='w-full px-[12%] py-5 scroll-mt-16'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4
                className='text-center text-lg font-Ovo'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >Introduction</motion.h4>
            <motion.h2
                className='text-center text-5xl font-Ovo'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >About Me</motion.h2>


            <motion.div
                className='flex w-full flex-col lg:flex-row  items-center gap-10 my-5'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className='w-44 md:w-72 rounded-3xl max-w-none'
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image src={assets.user_image} alt='profile' className='w-full rounded-3xl' />
                </motion.div>
                <motion.div
                    className='flex-1'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <p className='mb-5 text-sm max-w-2xl font-Ovo'>I'm a freelance frontend developer based in Tamil Nadu, India. I specialize in building responsive, high-performance web apps. My core stack includes React, JavaScript, and Tailwind CSS. I focus on clean code, smooth UI/UX, and fast load times. Always learning, always shipping sleek user experiences.</p>

                    <motion.ul
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        {
                            infoList.map(({ icon, iconDark, title, description }, index) => (
                                <motion.li
                                    whileHover={{ scale: 1.05 }}
                                    key={index}
                                    className='border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                                >
                                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-5 mt-2' />
                                    <h3 className='my-3 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                    <p className='text-gray-600 text-sm dark:text-white/70'>{description}</p>
                                </motion.li>
                            ))
                        }
                    </motion.ul>


                    <motion.h4
                        className='my-3 text-gray-700 font-Ovo dark:text-white/80'
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                    >Tools I use</motion.h4>
                    <motion.ul
                        className='flex items-center gap-3 sm:gap-5'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                    >
                        {
                            toolsData.map((tool, index) => (
                                <motion.li
                                    key={index}
                                    className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                                    whileHover={{ scale: 1.1 }}
                                    transition={{duration: 0.1}}
                                >
                                    <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                                </motion.li>
                            ))
                        }
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About