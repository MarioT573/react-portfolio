import React from 'react';
import bakery from '../images/bakery.png';
import teamProfile from '../images/teamprofile.PNG';
import textEditor from '../images/JATE.png';
import weatherDemo from '../images/weatherdemo.png';
import notetaker from '../images/notetaker.PNG';
import latteLarry from '../images/lattelarry.png';

export const projectData = [
    {
        name: "Latte Larry's Coffee",
        description: "It's a website for a local coffee shop, where users can look at all the coffee products offered and place an order through the inquiry tab to get coffee grounds delivered at home. This site is built on Vanilla JS, tailwind components, Node, Expess, MySQL & HTML-CSS.",
        image: latteLarry,
        link: 'https://larry-coffee.herokuapp.com/'
    },
    {
        name: 'Team Profile Generator',
        description: 'A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.',
        image: teamProfile,
        link: 'https://github.com/MarioT573/Team-Profile-Generator'
    },
    {
        name: 'Fresh Bakery',
        description: 'This is a bakery website that is created using HTML, CSS, and JavaScript. It is a simple website that allows the user to view the bakerys products and services.',
        image: bakery,
        link: 'https://areyno20.github.io/Fresh-Bakery/'
    },
    {
        name: 'Text Editor',
        description: 'This application is a simple text editor that can be used offline. It uses an existing text editor application but adds certain funcionalities that were not present prior.',
        image: textEditor,
        link: 'https://mariot573-text-editor.herokuapp.com/'
    },
    {
        name: 'Note Taker',
        description: 'A Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.',
        image: notetaker,
        link: 'https://guarded-sands-51709.herokuapp.com/'
    },
    {
        name: 'Weather Dashboard',
        description: 'A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS using data retrieved from the OpenWeatherMap API.',
        image: weatherDemo,
        link: 'https://github.com/MarioT573/weather-dashboard'
    },
]



export default function Projects() {
    return (
        <section id="projects" className='my-5'>
            <div className='flex flex-wrap justify-center shadow-xl'>
                {projectData.map((projects) => (
                <div className='md:w-1/3 lg:w-1/2 p-4'>
                    <div className='bg-teal-700 rounded-lg shadow-lg p-3'>
                        <h3 className='text-xl text-white font-bold'>{projects.name}</h3>
                        <p className='text-white shadow-md'>{projects.description}</p>
                        <a href={projects.link} id="button" class="button" className='text-orange-500 inline-block hover:text-blue-400 mt-4 p-5 m-5'>View Project</a>
                        <img
                            alt="gallery"
                            className="rounded shadow-md"
                            src={projects.image}
                        />
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}
