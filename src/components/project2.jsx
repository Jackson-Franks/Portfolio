import React from 'react'
import MWVid from './mw'
import MW from './mw-info'

const Project2 = () => {
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
            <p className="subhead">Loadout Builder</p>
            <hr/>
                <p className="projectContent">Created a website designed to build your perfect Modern Warfare loadout. The website features full CRUD functionality, being able to create, edit, delete, and look at other users classes. All data was gathered by scraping a wiki using puppeteer.
                    <br/>
                    <div className="projectContainer">
                        <MWVid />
                    </div>
                    <br/>
                    it was created using javaScript, puppeteer and express.
                </p>
            </div>
        </div>
    )
}

export default Project2