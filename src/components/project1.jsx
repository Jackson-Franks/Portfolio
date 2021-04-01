import React from 'react'
import SoFVid from './save-our-forest'
import Zuko from './zuko-info'

const Project4 = () => {
    return (
        // <div className='container'>
        // <p className='proj-title'>Save Our Forest!</p>
        // <div className='flip-card'>
        //     <div className='flip-card-inner'>
        //         <div className='flip-card-back'>
        //             <SoFVid />
        //         </div>
        //         <div className='flip-card-front'>
        //             <Zuko />
        //         </div>
        //     </div>

        // </div>
        // </div>
        <div className="container">
            <br/>
            <div id="about">
            <p className="subhead">Save Our Forest!</p>
            <hr/>
                <p className="projectContent">2D Dungeon Crawler
                    <br/>
                    <div className="projectContainer">
                        <SoFVid />
                    </div>
                    <br/>
                    it was created using typeScript, phaser, and tiled
                </p>
            </div>
        </div>
    )
}

export default Project4