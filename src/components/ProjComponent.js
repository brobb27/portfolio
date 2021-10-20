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
                <a href={proj.link}>Visit Site</a>
            </div>
        </div>
    )
}

export default ProjComponent