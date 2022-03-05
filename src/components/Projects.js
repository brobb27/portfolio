import React from 'react'
import ProjComponent from './ProjComponent'

// importing images
import magicAte from '../images/magicAteBallImg.png'
import zenGarden from '../images/zenGardenCSS.png'
import jobTracker from '../images/jobTracker.png'
import memeMachine from '../images/memeMachine.png'
import sampleBlog from '../images/sampleBlog.png'
import kentsCamera from '../images/kentsCamera.png'
import travelList from '../images/travelList.png'
import askedIt from '../images/askedIt.png'
import eventPlanner from '../images/eventPlanner.png'

function Projects() {
    // list of project details
    const projectList = [
        {
            projectImg: askedIt,
            title: 'Asked It',
            description: `For all of those questions you have, and all the answers to questions you never knew you had. You can create an account, ask questions, answer others' questions, upvote the good questions/answers, and downvote the bad ones. This full-stack app was deployed using Netlify and Cloud Run.`,
            link: 'https://askedit.netlify.app/'
        },
        {
            projectImg: eventPlanner,
            title: 'Vision Ingen',
            description: `This full-stack web application helps companies plan their events. They can add sessions to the event lineup, edit the lineup, and delete one or multiple sessions if for whatever reason plans fall through. Don’t worry about sorting the lineup, the software nicely displays and sorts the events’ sessions by start time.`,
            link: 'https://visioningen.netlify.app/'
        },
        {
            projectImg: magicAte,
            title: 'Magic Ate Ball',
            description: `Are you tired of eating at the same places time and time again? This app uses Foursquare's api and allows you to shake up your food selection. Enter your city, state, and what kind of food you are craving to find your next favorite restaurant. Save the new restaurants you love to your favorites list.`,
            link: 'https://magic-ate-ball-br.netlify.app/'
        },
        {
            projectImg: zenGarden,
            title: 'CSS Zen Garden',
            description: `This is a fully responsive website built from scratch with HTML & CSS. It is a copy of the original CSS Zen Garden created by Dave Shea.`,
            link: 'https://zengarden-br.netlify.app/'
        },
        {
            projectImg: jobTracker,
            title: 'Job Tracker',
            description: 'Are you on the job hunt? This full stack app helps you to keep track of all the jobs you want. Easily see the pros, cons, and if you have applied to the jobs you are interested in.',
            link: 'https://job-tracker-brobb.herokuapp.com/'
        },
        {
            projectImg: memeMachine,
            title: 'Meme Machine',
            description: 'This app selects random meme images from an API for you to make your own meme by entering in a top and bottom text.',
            link: 'https://meme-machine-br.netlify.app/'
        },
        {
            projectImg: sampleBlog,
            title: 'Sample Blog',
            description: 'This is a sample landing page for a generic blog. It was built using React props and CSS.',
            link: 'https://sample-blog-br.netlify.app/'
        },
        {
            projectImg: kentsCamera,
            title: 'Kents Camera Castle',
            description: `This landing page was built from scratch using HTML, CSS, and Bootstrap. It was built for a digital marketing class I took while completing bachelor's degree.`,
            link: 'https://kents-camera-castle-br.netlify.app/'
        },
        {
            projectImg: travelList,
            title: 'Travel List',
            description: 'This app was built from scratch using HTML, CSS, and Javascript to make AJAX/HTTP calls to an API and allows the user to add, complete, and delete travel destinations to the webpage.',
            link: 'https://ajax-travel-list-br.netlify.app/'
        }
    ]

    // map through project list for components
    const projectComponents = projectList.map(project => <ProjComponent proj={project} key={project.projectImg} />)


    return (
        <div id='projects'>
            <div>
                <h2>Projects</h2>
                <p>The projects below were developed using web development tools such as: React, Node.js, Express.js, ES6, MongoDB, HTML, CSS, Bootstrap, and AJAX/HTTP.</p>
            </div>
            <div id='projectContainer'>
                {projectComponents}
            </div>
        </div>
    )

}

export default Projects

// 