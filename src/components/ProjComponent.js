import React from "react";

function ProjComponent({proj}) {
    return (
        <div className='projComp'>
            <img src={proj.projectImg} alt='project' />
            <div>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
            </div>
            <div id='buttonDiv'>
                <a href={proj.link} rel="noopener noreferrer" target='_blank'>{proj.title !== 'Job Tracker' ? 'Visit Site' : 'Coming Soon'}</a>
            </div>
        </div>
    )
}

export default ProjComponent