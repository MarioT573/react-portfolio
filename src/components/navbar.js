import React from 'react';

export default function Navbars() {
    return (
        <nav className='flex flex-col bg-teal-900 top-0 z-10 text-white md:sticky md:mr-auto md:border-l md:border-gray-700' role='navigation'>
            <div className=' md:border-gray-700 flex flex-wrap items-center text-base'>
            <h1 className='text-2xl m-5 justify-start'>Mario Trigueros</h1>
                <a href='#about' className='p-2 border-l-2'>About Me</a>
                <a href='#projects' className='p-2'>Projects</a>
                <a href='#resume' className='p-2'>Resume</a>
                <a href='#contact' className='p-2'>Contact</a>
            </div>
        </nav>
    )
}