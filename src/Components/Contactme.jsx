import React from "react";
import Image from "react-bootstrap/Image";

const ContectMe = () => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <img src="src/assets/Images/contact.jpg" style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="col-lg-6 col-md-12">
                        <div className="contact-form">
                            <div className="contact-title">
                                <h2>Hire Me!</h2>
                                <p>I am available for freelancing work. Please connect with me via phone:
                                    <a href="tel:+441372278462">+92-321-4297477</a>
                                    or email: <a href="mtaimoor.h@gmail.com">mtaimoor.h@gmail.com</a>
                                </p>
                            </div>
                            <form>
                                <div className="contact-form-box">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" placeholder="Name" className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="email" placeholder="Email" className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-3">
                                            <div className="form-group">
                                                <input type="text" name="number" placeholder="Phone number" className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-3">
                                            <div className="form-group">
                                                <input type="text" name="subject" placeholder="Subject" className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea name="text" cols="30" rows="6" placeholder="Write your message..." className="form-control" required="">
                                                </textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-12 my-3">
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


    )
}
export default ContectMe;