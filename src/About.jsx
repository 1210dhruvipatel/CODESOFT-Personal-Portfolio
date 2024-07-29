import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const About = () => {
    return (
        <>
            <div className="about main-box">
                <div>
                    <p className="heading-text">About Me</p>
                </div>
                <div className="box-container">
                    <div className="box-left-container">
                        <p>
                            Life is an exhilarating journey, and as a web developer, I thrive on crafting its digital highways. With unwavering ambition, I take each line of code as a step towards excellence, each project as an opportunity to learn, and every challenge as a chance to innovate.
                        </p>
                        <p>
                            As a front-end web developer, I'm not just building websites; I'm architecting experiences, shaping the digital world, and pushing the boundaries of what's possible. Each pixel, each click, each line of code is a testament to my dedication to creating seamless, beautiful, and functional web solutions.
                        </p>
                        <p>
                            Join me on this dynamic expedition, where the thrill of coding meets the art of design, and where the destination is not a point on the map but a limitless horizon of possibilities. Let's make this journey count, for in the realm of web development, every line of code is a stroke on the canvas of progress.
                        </p>

                    </div>
                    <div className="box-right-container">
                        <img src="./Images/accountant-96.png" alt="" />
                    </div>
                </div>
            </div>
            <Education/>
            <Skills/>
            <Experience/>
        </>
    );
}

export default About;