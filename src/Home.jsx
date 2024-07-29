import React from "react";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <>
            <div className="main-home" >
                <div className="home-left">
                    <div className="image ">
                    </div>
                </div>
                <div className="home-right">
                    <h3>Hi there! This is me...</h3>
                    <p className="heading-text" style={{ justifyContent: 'left' }}>Dhruvi Patel</p>
                    <p>
                        <span>
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    deleteSpeed: 20,
                                    loop: true,
                                    delay: 75,
                                    strings: [
                                        "Computer Engineer",
                                        "Front End Developer",
                                        "Web Designer",
                                    ]
                                }}
                            />
                        </span>
                    </p>
                    <ul className="home-contact">
                        <li><a className="contact-item" href="https://www.linkedin.com/in/dhruvi-patel-ab2703239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><img src="../Images/linkedin.png" alt="" /></a></li>
                        <li><a className="contact-item" href="https://github.com/1210dhruvipatel" target="_blank"><img src="../Images/github.png" alt="" /></a></li>
                        <li><a className="contact-item" href="https://discord.com/channels/@me" target="_blank"><img src="../Images/discord.png" alt="" /></a></li>
                        <li><a className="contact-item" href="https://instagram.com/_12_dhruvi_/" target="_blank"><img src="../Images/instagram.png" alt="" /></a></li>
                        <li><a className="contact-item" href="https://www.facebook.com/patel.dhruvi.7140/" target="_blank"><img src="../Images/facebook.png" alt="" /></a></li>
                    </ul>
                    <div className="links">
                        <div class="buttons">
                            <button class="btn"><span></span><p data-start="good luck!" data-text="Download!" data-title="Resume"></p></button>
                        </div>
                        <div>
                            <Link to='/contact'>Contact Me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;