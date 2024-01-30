import React from "react";
import Image from "react-bootstrap/Image";


const Portfolio = () => {
    return (

        <div className="container my-5">

            <div className="row ">
                <div className="col-sm-6">
                    <h5 className="text-muted"><span className="text-primary h2 ">____ </span>Hello I'm</h5>
                    <h1 className="display-5 fw-bold">Muhammad Taimoor Hassan</h1>
                    <h3 className="my-3">Software Developer</h3>
                    <p className="my-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Saepe ipsa eligendi sunt cum facere iste, laborum labore!
                        Cumque quisquam accusantium similique accusamus
                        facere eos! Reprehenderit inventore rerum libero voluptate. Illum!</p>
                    <div class="d-grid gap-2 col-sm-6 ">
                        <button class="btn btn-primary" type="button">Connect With Me</button>
                    </div>
                </div>
                <div className="col-6 ">
                    {/* <Image src="src/assets/Images/shape1.png" style={{ height: 200, width: "50%" }} /> */}

                    <Image src="src/assets/Images/MyPic.jpg" style={{ height: 400, width: "80%" }} />
                </div>
            </div>

        </div>




    )
}

export default Portfolio;