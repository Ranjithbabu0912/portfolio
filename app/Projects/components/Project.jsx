import React from 'react'

const Project = ({ title, setModal, index }) => {
    return (
        <div className='w-full max-h-screen flex items-center justify-center'>
            <div
                className='flex items-center justify-center w-full sm:w-[65%] border-t border-gray-400 py-7 cursor-pointer'
                onMouseEnter={() => { setModal({ active: true, index: index }) }}
                onMouseLeave={() => { setModal({ active: false, index: index }) }}
            >
                <div className='w-[70%] flex items-center justify-between hover:opacity-50 group transition'>
                    <h1 className='text-lg sm:text-4xl group-hover:-translate-x-2 duration-500'>{title}</h1>
                    <p className='text-xs sm:text-sm group-hover:translate-x-2 duration-500'>Design & Development</p>
                </div>
            </div>
        </div >
    )
}

export default Project