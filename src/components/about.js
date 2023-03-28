import React from 'react';


export default function About(){

    return(
        <section id="about" className='my-5'>
            <div className='my-10 flex flex-wrap justify-center bg-teal-700 rounded-lg shadow-lg p-3 text-white rounded shadow-lg '>
                <div className='my-32 sm:w-1/2 md:w-1/3 lg:w-1/2 p-4 justify-center rounded'>
                    <div className='bg-yellow-600 p-10 rounded'>
                        <h3 className='text-xl text-white font-bold'>About Me</h3>
                        <p className='text-white'>Being born in the 2000's era, I got to grow up watching technology evolve quickly throughout my childhood. From Flip Phones developing into the Smartphone (iPhone, Android, etc) and computers becoming exponentially more powerful, I've been drawn to these devices as long as I lived. Naturally, I gained interest into coding as a gateway for me to learn how to create things that otherwise would not be possible.</p>
                        <p>After 4 years of College following my other passion of physically working with computers through Information Technology and Networking studies, I decided to switch gears into learning the ins and outs of coding with languages such as Python. Now I am furthering my studies with the UofT SCS Coding Bootcamp for fullstack web development.</p>
                    </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-5 shadow-xl'>
                    <img className="object-cover object-right rounded"alt="hero" src={require('../images/selfpic.jpg')}/>
                </div>
            </div>
        </section>
    )


}