import React from "react";
import Image  from "react-bootstrap/Image";

const Skills = () => {
    

    return (
        <div className="container">
            <h2 className="mb-5"><span className="text-primary h2 ">____ </span>My Skills</h2>
        <div className="row">
            <div className="col-sm-3 col-md-3 mb-5 ">
                <Image src="src/assets/Images/html-colored.png" style={{height:50}} />
                <h4 className="my-3">HTML</h4>
            </div>
            <div className="col-sm-3 col-md-3 mb-5">
            <Image src="src/assets/Images/css-file (1).png" style={{height:50}} />
            <h4 className="my-3">CSS</h4>
            </div>
            <div className="col-sm-3 col-md-3 mb-5">
            <Image src="src/assets/Images/java-script.png" style={{height:50}} />
            <h4 className="my-3">JavaScript</h4>
            </div>       
            <div className="col-sm-3 col-md-3 mb-5">
            <Image src="src/assets/Images/bootstrap-4-logo.png" style={{height:50}} />
            <h4 className="my-3">BootStrap</h4>
            </div>
            <div className="col-sm-3 col-md-3 mb-5">
            <Image src="src/assets/Images/aspnetcoremvc-logo.png" style={{height:50}} />
            <h4 className="my-3">Asp .Net Core</h4>
            </div>
            <div className="col-sm-3 col-md-3 mb-5">
            <Image src="src/assets/Images/MVC-Logo.jpg" style={{height:50}} />
            <h4 className="my-3">Asp .Net MVC</h4>
            </div>
            <div className="col-sm-3 col-md-3 mb-5">
            <Image src="src/assets/Images/MsCSharplogo.png" style={{height:50}} />
            <h4 className="my-3">C#</h4>
            </div>
            <div className="col-sm-3 col-md-3 mb-5">
            <Image src="src/assets/Images/linq.png" style={{height:50}} />
            <h4 className="my-3">LINQ</h4>
            </div>
            <div className="col-sm-3 col-md-3 mb-5">
            <Image src="src/assets/Images/sql-blue.png" style={{height:50}} />
            <h4 className="my-3">SQL Server</h4>
            </div>
            <div className="col-sm-3 col-md-3 mb-5">
            <Image src="src/assets/Images/postgresql_original.png" style={{height:50}} />
            <h4 className="my-3">Postgres</h4>
            </div>
            <div className="col-sm-3 col-md-3 mb-5">
            <Image src="src/assets/Images/mongodb-logo.png" style={{height:50}} />
            <h4 className="my-3">MongoDB</h4>
            </div>
            <div className="col-sm-3 col-md-3 mb-5">
            <Image src="src/assets/Images/react-1-logo.png" style={{height:50}} />
            <h4 className="my-3">React</h4>
            </div>
        </div>


        </div>


    )
}
export default Skills;