
import React from "react";
import Image  from "react-bootstrap/Image";

const Projects = () => {
    

    return (
        <div className="container">
            <h2 className="mb-5"><span className="text-primary h2 ">____ </span>My All Projects</h2>
        <div className="row">
            <div className="col-sm-6 col-md-4">
                <img src="src/assets/Images/screencapture-tripeeonline-2024-01-29-01_06_20.png" style={{height:"90%",width:"100%"}} />
              
            </div>
            <div className="col-sm-6 col-md-4 ">
            <Image src="src/assets/Images/screencapture-localhost-44311-2024-01-29-05_03_17.png" style={{height:"90%",width:"100%"}} />           
            </div>
            <div className="col-sm-6 col-md-4 ">
            <img src="src/assets/Images/screencapture-localhost-2809-RentACar-Chauffeur-2024-01-29-05_18_25.png" style={{height:"90%",width:"100%"}} />
          
            </div>       
        
        </div>


        </div>


    )
}
export default Projects;