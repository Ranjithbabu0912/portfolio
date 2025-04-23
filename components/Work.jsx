import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Work = ({ isDarkMode }) => {


    return (
        <motion.div id='work'
            className='w-full px-[13%] py-5 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4
                className='text-center text-lg font-Ovo'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >My portfolio</motion.h4>
            <motion.h2
                className='text-center text-5xl font-Ovo'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >My Latest Works</motion.h2>


            <motion.p
                className='text-center max-w-3xl mx-auto mt-2 font-Ovo'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                A selection of my previous work is displayed below. These projects highlight my skills and experience.
            </motion.p>

            <motion.div
                className='grid grid-cols-auto my-10 gap-5 dark:text-black'
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}>
                {
                    workData.map((project, index) => (
                        <motion.div
                            key={index}
                            style={{ backgroundImage: `url(${project.img})` }}
                            className='aspect-square bg-no-repeat bg-center bg-cover rounded-lg relative cursor-pointer group'
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className='bg-white w-10/12 shadow-lg rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div className=''>
                                    <h2 className='font-semibold text-sm'>{project.title}</h2>
                                    <p className='text-xs text-gray-700'>{project.description}</p>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                    <Image src={assets.send_icon} alt='send_icon' className='w-5' />
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>

            <motion.a href='/Projects' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-8 py-3 mx-auto -my-2 hover:bg-lightHover duration-500 dark:border-white dark:text-white dark:hover:bg-darkHover '
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
            >
                show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right-arrow' className='w-4' />
            </motion.a>

        </motion.div>
    )
}

export default Work