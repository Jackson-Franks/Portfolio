import React from 'react'
import BB from './beach-bums'

const Project3 = () => {
    return (
        // <div className='container'>
        // <p className='proj-title'>Loadout Builder</p>
        // <div className='flip-card'>
        //     <div className='flip-card-inner'>
        //         <div className='flip-card-back'>
        //             <MWVid />
        //         </div>
        //         <div className='flip-card-front'>
        //             <MW />
        //         </div>
        //     </div>

        // </div>
        // </div>
        <div className="container">
            <br/>
            <div id="about">
            <p className="subhead">Beach Bums</p>
            <hr/>
                <p className="projectContent">Collaberated with 3 other team members to create a scoial media app with full CRUD functionality, where the user could post, delete, comment, like, and follow other users.
                    <br/>
                    <div className="projectContainer">
                        <BB />
                    </div>
                    <br/>
                    it was created using HTML, CSS, Bootstrap, Javascript, React, and Mongoose.
                </p>
            </div>
        </div>
    )
}

export default Project3