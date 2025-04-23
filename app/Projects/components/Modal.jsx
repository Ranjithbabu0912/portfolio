import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import gsap from 'gsap'
import { workData } from '@/assets/assets'

const scaleAnimation = {
    initial: { scale: 0, x: '-50%', y: '-50%' },
    open: {
        scale: 1,
        x: '-50%',
        y: '-50%',
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        scale: 0,
        x: '-50%',
        y: '-50%',
        transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] }
    }
}

const Modal = ({ modal }) => {
    const { active, index } = modal
    const containerRef = useRef(null)
    const cursor = useRef(null)
    const cursorLabel = useRef(null)

    useEffect(() => {
        const moveX = gsap.quickTo(containerRef.current, 'left', { duration: 0.8, ease: 'power3' })
        const moveY = gsap.quickTo(containerRef.current, 'top', { duration: 0.8, ease: 'power3' })
        
        const moveCursorX = gsap.quickTo(cursor.current, 'left', { duration: 0.5, ease: 'power3' })
        const moveCursorY = gsap.quickTo(cursor.current, 'top', { duration: 0.5, ease: 'power3' })
        
        const moveCursorLabelX = gsap.quickTo(cursorLabel.current, 'left', { duration: 0.45, ease: 'power3' })
        const moveCursorLabelY = gsap.quickTo(cursorLabel.current, 'top', { duration: 0.45, ease: 'power3' })

        const handleMouseMove = (e) => {
            moveX(e.clientX)
            moveY(e.clientY)
            moveCursorX(e.clientX)
            moveCursorY(e.clientY)
            moveCursorLabelX(e.clientX)
            moveCursorLabelY(e.clientY)
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])


    return (
        <>
            <motion.div
                ref={containerRef}
                variants={scaleAnimation}
                initial="initial"
                animate={active ? 'open' : 'closed'}
                className="h-48 w-64 sm:flex items-center justify-center absolute overflow-hidden pointer-events-none hidden"
            >
                <div
                    className="w-full h-full absolute"
                    style={{
                        top: `${index * -100}%`,
                        transition: 'top 0.6s cubic-bezier(0.76, 0, 0.24, 1)'
                    }}
                >
                    {workData.map((project, i) => (
                        <div
                            key={`modal_${i}`}
                            style={{ backgroundColor: project.color }}
                            className="relative h-full flex items-center justify-center"
                        >
                            <Image
                                src={project.bgImage}
                                alt=""
                                className="h-full object-contain p-5"
                            />
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                ref={cursor}
                variants={scaleAnimation}
                initial="initial"
                animate={active ? 'open' : 'closed'}
                className='hidden h-[80px] w-[80px] bg-lightHover dark:bg-darkHover absolute pointer-events-none rounded-full sm:flex items-center justify-center'
            ></motion.div>
            <motion.div
                ref={cursorLabel}
                variants={scaleAnimation}
                initial="initial"
                animate={active ? 'open' : 'closed'}
                className='hidden h-[80px] w-[80px] absolute pointer-events-none rounded-full sm:flex items-center justify-center text-black dark:text-white bg-transparent'
            >view</motion.div>
        </>
    )
}

export default Modal
